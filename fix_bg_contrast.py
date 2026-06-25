import os
import re

def fix_contrast(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. White containers (bg-[#FFFFFF] or bg-white) -> must have text-[#0F1115] or text-black
    def fix_white_bg(match):
        cls = match.group(0)
        # Check if any text color is explicitly set. If not, add text-[#0F1115]
        if 'text-' not in cls:
            # Add right after the bg- class
            cls = re.sub(r'(bg-\[#FFFFFF\](?:\/\d+)?|bg-white(?:\/\d+)?)', r'\1 text-[#0F1115]', cls)
        return cls

    content = re.sub(r'className="[^"]*(?:bg-\[#FFFFFF\](?:\/\d+)?|bg-white(?:\/\d+)?)[^"]*"', fix_white_bg, content)

    # 2. Black containers (bg-[#0F1115] or bg-black) -> must have text-[#FFFFFF] or text-white
    def fix_black_bg(match):
        cls = match.group(0)
        # Only add text-[#FFFFFF] if there is no text color specified at all
        if 'text-' not in cls:
            cls = re.sub(r'(bg-\[#0F1115\](?:\/\d+)?|bg-black(?:\/\d+)?)', r'\1 text-[#FFFFFF]', cls)
        return cls

    content = re.sub(r'className="[^"]*(?:bg-\[#0F1115\](?:\/\d+)?|bg-black(?:\/\d+)?)[^"]*"', fix_black_bg, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed background contrast in: {filepath}")

for root, _, files in os.walk('E:/chain/codenest/src/app'):
    for file in files:
        if file.endswith('.tsx'):
            fix_contrast(os.path.join(root, file))
