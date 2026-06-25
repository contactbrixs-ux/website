"""
BUTTON TEXT VISIBILITY FIX
===========================
Targeted fix: ensures every SOLID dark button has white text,
and every translucent overlay (bg-black/5, bg-black/10 etc.) is NOT treated as dark.

KEY BUGS FIXED vs previous scripts:
  - bg-black/5, bg-black/10 are TRANSPARENT overlays (near-white result), NOT dark bgs
  - These were being injected with text-[#FFFFFF] making text invisible on light pages
  - Solid dark buttons (bg-[#0F1115], bg-black without opacity) need text-[#FFFFFF]
"""

import os, re

SCAN_DIRS = [
    r"E:\chain\codenest\src\app",
    r"E:\chain\codenest\src\components",
]

# SOLID dark bgs only — NOT opacity variants like bg-black/5
SOLID_DARK_BG   = re.compile(r'\bbg-(?:\[#0F1115\]|\[#0f1115\]|\[#1A1A1A\]|\[#1a1a1a\]|black)(?!/)')
# SOLID light bgs only — NOT opacity variants like bg-white/50
SOLID_LIGHT_BG  = re.compile(r'\bbg-(?:\[#FFFFFF\]|\[#ffffff\]|\[#F4F5F7\]|\[#f4f5f7\]|white|gray-50|gray-100)(?!/)')
# Green solid
SOLID_GREEN_BG  = re.compile(r'\bbg-\[#00D395\](?!/)')
# Transparent overlays (these take colour from PARENT, don't enforce text on them)
TRANSPARENT_BG  = re.compile(r'\bbg-(?:black|white|gray-\d+)/\d+')

# Bad texts on dark backgrounds
BAD_ON_DARK = re.compile(r'\btext-(?:black|\[#0F1115\]|\[#0f1115\]|\[#1A1A1A\]|gray-[6789]\d{0,2})\b')
# Bad texts on light backgrounds
BAD_ON_LIGHT = re.compile(r'\btext-(?:white|\[#FFFFFF\]|\[#ffffff\]|gray-[123]\d{0,2})\b')

SAFE_DARK_TEXT  = 'text-[#0F1115]'
SAFE_LIGHT_TEXT = 'text-[#FFFFFF]'

def has_text_color(cls: str) -> bool:
    """True if className already has any text color specifier."""
    return bool(re.search(
        r'\btext-(?:white|black|\[#|gray-[0-9])',
        cls
    ))

def fix(cls: str) -> str:
    # Skip classes that are purely transparent overlays (bg-black/10 etc.)
    is_transparent = bool(TRANSPARENT_BG.search(cls))
    is_solid_dark  = bool(SOLID_DARK_BG.search(cls))
    is_solid_light = bool(SOLID_LIGHT_BG.search(cls))
    is_solid_green = bool(SOLID_GREEN_BG.search(cls))

    # If the className contains BOTH a solid dark bg AND an opacity-modified bg,
    # treat the solid dark one as primary
    if is_transparent and not is_solid_dark and not is_solid_light and not is_solid_green:
        # Pure transparent overlay — don't touch text colors, they inherit from parent
        return cls

    # ── Solid dark button/container ──────────────────────────────────────────
    if is_solid_dark:
        # Remove any dark text (invisible on dark bg)
        cls = BAD_ON_DARK.sub(SAFE_LIGHT_TEXT, cls)
        # Remove incorrect gray texts too
        cls = re.sub(r'\btext-gray-[5-9]\d{0,2}\b', SAFE_LIGHT_TEXT, cls)
        # Ensure white text is present
        if not re.search(r'\btext-(?:white|\[#FFFFFF\]|\[#ffffff\])', cls):
            cls += f' {SAFE_LIGHT_TEXT}'

    # ── Solid light button/container ─────────────────────────────────────────
    elif is_solid_light:
        # Remove any light text (invisible on light bg)
        cls = BAD_ON_LIGHT.sub(SAFE_DARK_TEXT, cls)
        # Remove light grays that fail contrast
        cls = re.sub(r'\btext-gray-[123]\d{0,2}\b', 'text-gray-700', cls)
        # Fix borderline #7B7B7B
        cls = cls.replace('text-[#7B7B7B]', 'text-gray-600')
        # Ensure dark text is present
        if not has_text_color(cls):
            cls += f' {SAFE_DARK_TEXT}'

    # ── Solid green button ───────────────────────────────────────────────────
    elif is_solid_green:
        cls = BAD_ON_LIGHT.sub(SAFE_DARK_TEXT, cls)
        if not re.search(r'\btext-(?:black|\[#0F1115\])', cls):
            cls += f' {SAFE_DARK_TEXT}'

    # ── Global: #7B7B7B → gray-600 everywhere ───────────────────────────────
    cls = cls.replace('text-[#7B7B7B]', 'text-gray-600')

    # ── Hover contrast fixes ─────────────────────────────────────────────────
    hover_to_light = re.search(r'\bhover:bg-(?:white|gray-\d+|\[#FFFFFF\]|\[#F4F5F7\])(?!/)', cls)
    hover_to_dark  = re.search(r'\bhover:bg-(?:black|\[#0F1115\]|\[#1A1A1A\])(?!/)', cls)

    if is_solid_dark and hover_to_light:
        # Remove any existing hover text, add correct one
        cls = re.sub(r'\bhover:text-\S+', '', cls)
        cls += ' hover:text-black'
    if (is_solid_light or is_solid_green) and hover_to_dark:
        cls = re.sub(r'\bhover:text-\S+', '', cls)
        cls += ' hover:text-white'

    # Tidy up double spaces
    cls = re.sub(r'  +', ' ', cls).strip()
    return cls


def process_file(path: str) -> int:
    with open(path, 'r', encoding='utf-8') as fh:
        src = fh.read()

    changes = 0
    out = []
    pos = 0

    for m in re.finditer(r'className=(["\'])(.+?)\1', src, re.DOTALL):
        q, classes = m.group(1), m.group(2)
        fixed = fix(classes)
        out.append(src[pos:m.start()])
        if fixed != classes:
            changes += 1
            out.append(f'className={q}{fixed}{q}')
        else:
            out.append(m.group(0))
        pos = m.end()
    out.append(src[pos:])

    if changes:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(''.join(out))

    return changes


total_files = total_changes = 0
for scan_dir in SCAN_DIRS:
    for root, _, files in os.walk(scan_dir):
        for fname in files:
            if fname.endswith('.tsx'):
                fpath = os.path.join(root, fname)
                n = process_file(fpath)
                total_files += 1
                if n:
                    total_changes += n
                    rel = fpath.replace(scan_dir, '').replace('\\', '/')
                    print(f"  [{n:2d} fixes] {rel}")

print()
print("=" * 58)
print(f"  DONE  |  {total_files} files  |  {total_changes} total fixes")
print("=" * 58)
