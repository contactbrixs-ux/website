import os
import re

def fix_footer_contrast(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix the footer link lists: text-gray-300 is too light (1.47 contrast). 
    # Change it to text-gray-600 which passes WCAG AA.
    content = re.sub(
        r'className="flex flex-col gap-4 font-medium text-gray-300"', 
        'className="flex flex-col gap-4 font-medium text-gray-600"', 
        content
    )
    
    # Fix the copyright text: text-[#7B7B7B] is slightly too light (4.23 contrast).
    # Change it to text-gray-600 which passes WCAG AA (>4.5).
    content = re.sub(
        r'text-\[#7B7B7B\]', 
        'text-gray-600', 
        content
    )

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed footer WCAG contrast in: {filepath}")

for root, _, files in os.walk('E:/chain/codenest/src/app'):
    for file in files:
        if file.endswith('.tsx'):
            fix_footer_contrast(os.path.join(root, file))
