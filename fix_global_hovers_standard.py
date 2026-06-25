import os
import re

def apply_standard_tailwind_hovers(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Replace arbitrary hover hex codes with standard Tailwind colors for Black buttons turning White
    content = re.sub(
        r'hover:bg-gray-200\s+hover:text-\[#0F1115\]', 
        'hover:bg-white hover:text-black', 
        content
    )
    content = re.sub(
        r'hover:bg-\[#FFFFFF\]\s+hover:text-\[#0F1115\]', 
        'hover:bg-white hover:text-black', 
        content
    )
    
    # Replace arbitrary hover hex codes for White buttons turning Black
    content = re.sub(
        r'hover:bg-\[#0F1115\]\s+hover:text-\[#FFFFFF\]', 
        'hover:bg-black hover:text-white', 
        content
    )
    content = re.sub(
        r'hover:bg-black\s+hover:text-\[#FFFFFF\]', 
        'hover:bg-black hover:text-white', 
        content
    )

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Applied standard hover utility classes in: {filepath}")

for root, _, files in os.walk('E:/chain/codenest/src/app'):
    for file in files:
        if file.endswith('.tsx'):
            apply_standard_tailwind_hovers(os.path.join(root, file))
