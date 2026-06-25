"""
DEFINITIVE WHOLE-SITE COLOR AUDIT & FIX SCRIPT
================================================
Scans every .tsx file under src/app and src/components.
Enforces strict, deterministic color rules on every className="..." attribute.

Rules (ordered by priority):
  1. Dark container (bg-[#0F1115] | bg-[#1A1A1A] | bg-black)
       → All text MUST be white/light.  Replace any dark text class with text-[#FFFFFF].
  2. Light container (bg-[#FFFFFF] | bg-[#F4F5F7] | bg-white | bg-gray-50/100/200)
       → All text MUST be dark.  Replace any gray-200/300/400 or white text with text-[#0F1115].
  3. Green container (bg-[#00D395])
       → Text MUST be dark (green is bright). Force text-[#0F1115].
  4. Any element with text-gray-200 or text-gray-300 on a non-dark background
       → Replace with text-gray-700 (safe readable gray, contrast > 4.5).
  5. text-[#7B7B7B] everywhere → text-gray-600 (passes WCAG AA at 14px+).
  6. Footer link lists: text-gray-300 → text-gray-700.
  7. Hover contrast:
       a. dark button hovering to white/light  → add hover:text-black (remove hover:text-white)
       b. light/green button hovering to black → add hover:text-white (remove hover:text-black)
"""

import os, re, sys

SCAN_DIRS = [
    r"E:\chain\codenest\src\app",
    r"E:\chain\codenest\src\components",
]

# ────────────────────────────────────────────────────────────────────────────
# Background pattern matchers
# ────────────────────────────────────────────────────────────────────────────
DARK_BG   = re.compile(r'\bbg-(?:\[#0F1115\]|\[#0f1115\]|\[#1A1A1A\]|\[#1a1a1a\]|black)\b')
LIGHT_BG  = re.compile(r'\bbg-(?:\[#FFFFFF\]|\[#ffffff\]|\[#F4F5F7\]|\[#f4f5f7\]|white|gray-50|gray-100|gray-200)\b')
GREEN_BG  = re.compile(r'\bbg-\[#00D395\]\b')

# Hover targets
HOVER_TO_LIGHT = re.compile(r'\bhover:bg-(?:white|gray-\d+|\[#FFFFFF\]|\[#ffffff\]|\[#F4F5F7\]|\[#f4f5f7\])\b')
HOVER_TO_DARK  = re.compile(r'\bhover:bg-(?:black|\[#0F1115\]|\[#0f1115\]|\[#1A1A1A\])\b')
HOVER_TEXT     = re.compile(r'\bhover:text-\S+')

# Text classes that are INVISIBLE on light backgrounds
LIGHT_TEXT_BAD = re.compile(
    r'\btext-(?:white|gray-100|gray-200|gray-300|\[#FFFFFF\]|\[#ffffff\])\b'
)
# Text classes that are INVISIBLE on dark backgrounds
DARK_TEXT_BAD  = re.compile(
    r'\btext-(?:black|gray-700|gray-800|gray-900|\[#0F1115\]|\[#0f1115\]|\[#1A1A1A\])\b'
)

def fix_classname(cls: str) -> str:
    """Apply all color-contrast rules to a single className string."""

    is_dark  = bool(DARK_BG.search(cls))
    is_light = bool(LIGHT_BG.search(cls))
    is_green = bool(GREEN_BG.search(cls))

    # ── Rule 1: Dark background → white text ────────────────────────────────
    if is_dark:
        # Remove any bad dark text classes
        cls = DARK_TEXT_BAD.sub('text-[#FFFFFF]', cls)
        # Remove leftover bad gray text-gray-300 etc (they're also bad)
        cls = re.sub(r'\btext-gray-[23456]\d{0,2}\b', 'text-[#FFFFFF]', cls)
        # If STILL no text- class of any kind for colour, inject white
        if not re.search(r'\btext-(?:white|gray-\d|\[#)', cls):
            cls += ' text-[#FFFFFF]'

    # ── Rule 2: Light background → dark text ────────────────────────────────
    if is_light:
        # Remove any bad light text classes
        cls = LIGHT_TEXT_BAD.sub('text-[#0F1115]', cls)
        # Remove light grays that fail contrast on white
        cls = re.sub(r'\btext-gray-[1234]\d{0,2}\b', 'text-gray-700', cls)
        # Fix borderline color #7B7B7B
        cls = cls.replace('text-[#7B7B7B]', 'text-gray-600')
        # If no text color at all, inject dark
        if not re.search(r'\btext-(?:black|gray-[567]|gray-[89]|\[#0)', cls):
            cls += ' text-[#0F1115]'

    # ── Rule 3: Green background → dark text ────────────────────────────────
    if is_green:
        cls = LIGHT_TEXT_BAD.sub('text-[#0F1115]', cls)
        if not re.search(r'\btext-(?:black|\[#0)', cls):
            cls += ' text-[#0F1115]'

    # ── Rule 4: gray-200/300 on ANY non-dark element ─────────────────────────
    if not is_dark:
        cls = re.sub(r'\btext-gray-[123]\d{0,2}\b', 'text-gray-700', cls)

    # ── Rule 5: #7B7B7B everywhere ───────────────────────────────────────────
    cls = cls.replace('text-[#7B7B7B]', 'text-gray-600')

    # ── Rule 7a: Dark button hovering white/light → hover:text-black ────────
    if is_dark and HOVER_TO_LIGHT.search(cls):
        # remove any wrong hover text
        cls = HOVER_TEXT.sub('', cls)
        cls += ' hover:text-black'

    # ── Rule 7b: Light/green button hovering dark → hover:text-white ─────────
    if (is_light or is_green) and HOVER_TO_DARK.search(cls):
        cls = HOVER_TEXT.sub('', cls)
        cls += ' hover:text-white'

    # Collapse multiple spaces
    cls = re.sub(r'  +', ' ', cls).strip()
    return cls


def process_file(path: str) -> int:
    with open(path, 'r', encoding='utf-8') as fh:
        src = fh.read()

    changes = 0
    result  = []
    pos     = 0

    # Match className="..." or className='...'
    for m in re.finditer(r'className=(["\'])(.+?)\1', src, re.DOTALL):
        q       = m.group(1)
        classes = m.group(2)
        fixed   = fix_classname(classes)
        result.append(src[pos:m.start()])
        if fixed != classes:
            changes += 1
            result.append(f'className={q}{fixed}{q}')
        else:
            result.append(m.group(0))
        pos = m.end()
    result.append(src[pos:])

    if changes:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(''.join(result))

    return changes


# ────────────────────────────────────────────────────────────────────────────
total_files   = 0
total_changes = 0

for scan_dir in SCAN_DIRS:
    for root, _, files in os.walk(scan_dir):
        for fname in files:
            if fname.endswith('.tsx'):
                fpath   = os.path.join(root, fname)
                changes = process_file(fpath)
                total_files += 1
                if changes:
                    total_changes += changes
                    rel = fpath.replace(scan_dir, '').replace('\\', '/')
                    print(f"  [{changes:2d} fixes] {rel}")

print()
print("=" * 58)
print(f"  DONE  |  {total_files} files scanned  |  {total_changes} fixes applied")
print("=" * 58)
