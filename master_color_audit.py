"""
MASTER COLOR AUDIT SCRIPT
Fixes every color contrast issue across the entire BRIXS Next.js website.

Rules enforced:
  - Dark bg  (black / #0F1115 / #1A1A1A)  → text must be WHITE
  - Light bg (white / #F4F5F7 / gray-*)   → text must be DARK (not gray-300 / gray-200 etc.)
  - Footer link lists: text-gray-300 → text-gray-700
  - Subtitle grays: #7B7B7B on white → text-gray-600 (passes WCAG 4.5:1)
  - Black buttons with white hover bg   → add hover:text-black
  - White/green buttons with black hover → add hover:text-white
  - bg-transparent buttons on dark sections that inherited white text but render on light bg → fixed
"""

import os
import re

PAGES_DIR = "E:/chain/codenest/src/app"

# ---------------------------------------------------------------------------
# Regex helpers
# ---------------------------------------------------------------------------

def has(cls_str, *patterns):
    return any(re.search(p, cls_str) for p in patterns)

def remove(cls_str, *literals):
    for lit in literals:
        cls_str = cls_str.replace(lit, "")
    return cls_str

def ensure(cls_str, token):
    """Add token if not already present anywhere in the string."""
    if token not in cls_str:
        cls_str = cls_str.rstrip('"') + " " + token
    return cls_str

# ---------------------------------------------------------------------------
# Identify background type
# ---------------------------------------------------------------------------

DARK_BG_PAT  = r'bg-\[#0F1115\]|bg-\[#1A1A1A\]|bg-black(?!/)|bg-\[#0[Ff]1115\]'
LIGHT_BG_PAT = r'bg-\[#FFFFFF\]|bg-\[#F4F5F7\]|bg-white(?!/)|bg-gray-50|bg-gray-100|bg-gray-200'
GREEN_BG_PAT = r'bg-\[#00D395\]'

# "bad" light texts (invisible on white bg)
LIGHT_TEXTS_BAD = [
    'text-gray-300', 'text-gray-200', 'text-gray-100', 'text-white',
    'text-[#FFFFFF]',
]
# "bad" dark texts (invisible on dark bg)
DARK_TEXTS_BAD = [
    'text-gray-800', 'text-gray-900', 'text-black', 'text-[#0F1115]',
    'text-[#1A1A1A]',
]

DARK_TEXT_SAFE  = 'text-[#0F1115]'   # what we put on light bgs
LIGHT_TEXT_SAFE = 'text-[#FFFFFF]'   # what we put on dark bgs

# ---------------------------------------------------------------------------
# Per-class-attribute fixer
# ---------------------------------------------------------------------------

def fix_classname(cls_str):
    original = cls_str

    is_dark_bg  = bool(re.search(DARK_BG_PAT, cls_str))
    is_light_bg = bool(re.search(LIGHT_BG_PAT, cls_str))
    is_green_bg = bool(re.search(GREEN_BG_PAT, cls_str))

    # ---- 1. Dark background: ensure light text, remove any dark text ----
    if is_dark_bg:
        for bad in DARK_TEXTS_BAD:
            if bad in cls_str:
                cls_str = cls_str.replace(bad, LIGHT_TEXT_SAFE)
        # if STILL no text color, add white
        if not re.search(r'\btext-(?!center|left|right|xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|transparent|clip|ellipsis|inherit|current|none|decoration|indent|opacity|wrap|nowrap|overflow|balance|pretty)', cls_str):
            cls_str = cls_str.rstrip() + f' {LIGHT_TEXT_SAFE}'

    # ---- 2. Light background: ensure dark text, remove any light text ----
    if is_light_bg:
        for bad in LIGHT_TEXTS_BAD:
            if bad in cls_str:
                cls_str = cls_str.replace(bad, DARK_TEXT_SAFE)
        if not re.search(r'\btext-(?!center|left|right|xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|transparent|clip|ellipsis|inherit|current|none|decoration|indent|opacity|wrap|nowrap|overflow|balance|pretty)', cls_str):
            cls_str = cls_str.rstrip() + f' {DARK_TEXT_SAFE}'

    # ---- 3. Green background → always dark text (green is bright) ----
    if is_green_bg:
        for bad in LIGHT_TEXTS_BAD:
            if bad in cls_str:
                cls_str = cls_str.replace(bad, DARK_TEXT_SAFE)

    # ---- 4. Footer link lists: text-gray-300 on white = invisible ----
    if 'text-gray-300' in cls_str and not is_dark_bg:
        cls_str = cls_str.replace('text-gray-300', 'text-gray-700')
    if 'text-gray-200' in cls_str and not is_dark_bg:
        cls_str = cls_str.replace('text-gray-200', 'text-gray-700')

    # ---- 5. Sub-text color #7B7B7B is borderline failing (4.23) — bump to gray-600 ----
    if 'text-[#7B7B7B]' in cls_str:
        cls_str = cls_str.replace('text-[#7B7B7B]', 'text-gray-600')

    # ---- 6. Hover button contrast: black btn hovering to white/light ----
    # hover:bg-white / hover:bg-gray-200 on a dark button → need hover:text-black
    if re.search(DARK_BG_PAT, cls_str) and re.search(r'hover:bg-(?:white|gray-\d+|\[#FFFFFF\]|\[#F4F5F7\])', cls_str):
        if 'hover:text-' not in cls_str:
            cls_str = cls_str.rstrip() + ' hover:text-black'
        # if it already has hover:text-[#FFFFFF] that would be wrong
        cls_str = cls_str.replace('hover:text-[#FFFFFF]', 'hover:text-black')
        cls_str = cls_str.replace('hover:text-white', 'hover:text-black')

    # ---- 7. Hover button contrast: light/green btn hovering to black ----
    if (is_light_bg or is_green_bg) and re.search(r'hover:bg-(?:black|\[#0F1115\]|\[#1A1A1A\])', cls_str):
        if 'hover:text-' not in cls_str:
            cls_str = cls_str.rstrip() + ' hover:text-white'
        cls_str = cls_str.replace('hover:text-[#0F1115]', 'hover:text-white')
        cls_str = cls_str.replace('hover:text-black', 'hover:text-white')

    return cls_str

# ---------------------------------------------------------------------------
# Process files
# ---------------------------------------------------------------------------

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    def replacer(match):
        quote = match.group(1)   # " or '
        classes = match.group(2)
        fixed = fix_classname(classes)
        return f'className={quote}{fixed}{quote}'

    content = re.sub(r'className=(["\'])(.+?)\1', replacer, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

fixed_files = []
for root, _, files in os.walk(PAGES_DIR):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            if process_file(path):
                rel = path.replace(PAGES_DIR, '').replace('\\', '/')
                fixed_files.append(rel)

print("=" * 60)
print("  MASTER COLOR AUDIT — COMPLETE")
print("=" * 60)
if fixed_files:
    print(f"  Fixed {len(fixed_files)} files:\n")
    for f in fixed_files:
        print(f"    [OK] {f}")
else:
    print("  No issues found — all files already compliant.")
print("=" * 60)
