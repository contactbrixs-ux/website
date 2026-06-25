import os
import re

def fix_hovers(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Black buttons hovering to light gray/white -> need hover:text-black
    def fix_black_btn_hover(match):
        cls = match.group(0)
        if 'hover:text-' not in cls:
            # Insert hover:text-[#0F1115] before hover:bg-
            cls = cls.replace('hover:bg-gray-200', 'hover:bg-gray-200 hover:text-[#0F1115]')
            cls = cls.replace('hover:bg-[#FFFFFF]', 'hover:bg-[#FFFFFF] hover:text-[#0F1115]')
            cls = cls.replace('hover:bg-white', 'hover:bg-white hover:text-[#0F1115]')
        return cls

    content = re.sub(r'className="[^"]*bg-\[#0F1115\][^"]*hover:bg-(?:gray-200|\[#FFFFFF\]|white)[^"]*"', fix_black_btn_hover, content)

    # 2. White buttons hovering to black -> need hover:text-white
    def fix_white_btn_hover(match):
        cls = match.group(0)
        if 'hover:text-' not in cls:
            cls = cls.replace('hover:bg-[#0F1115]', 'hover:bg-[#0F1115] hover:text-[#FFFFFF]')
            cls = cls.replace('hover:bg-black', 'hover:bg-black hover:text-[#FFFFFF]')
        return cls

    content = re.sub(r'className="[^"]*bg-\[#FFFFFF\][^"]*hover:bg-(?:\[#0F1115\]|black)[^"]*"', fix_white_btn_hover, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed button hovers in: {filepath}")

for root, _, files in os.walk('E:/chain/codenest/src/app'):
    for file in files:
        if file.endswith('.tsx'):
            fix_hovers(os.path.join(root, file))
