import re

files_to_fix = [
    r'E:\chain\codenest\src\app\products\brixsvm\page.tsx',
]

# Also scan ALL tsx files for the same bug pattern
import os
for root, _, files in os.walk(r'E:\chain\codenest\src'):
    for f in files:
        if f.endswith('.tsx'):
            files_to_fix.append(os.path.join(root, f))

files_to_fix = list(set(files_to_fix))

total = 0
for path in files_to_fix:
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    original = content

    # Pattern: className has both bg-[#0F1115] AND text-[#0F1115] — the dark text must go
    # Replace every className where dark bg + dark text coexist
    def fix_class(m):
        cls = m.group(1)
        is_dark_bg = bool(re.search(r'\bbg-(?:\[#0F1115\]|\[#1A1A1A\]|black)(?!/\d)', cls))
        if is_dark_bg:
            # Remove all text-[#0F1115] and text-black occurrences
            cls = re.sub(r'\btext-\[#0F1115\]\b', '', cls)
            cls = re.sub(r'\btext-\[#0f1115\]\b', '', cls)
            cls = re.sub(r'\btext-black\b', '', cls)
            cls = re.sub(r'\btext-gray-[6789]\d*\b', '', cls)
            # Ensure text-[#FFFFFF] is present exactly once
            cls = re.sub(r'(\btext-\[#FFFFFF\]\s*)+', 'text-[#FFFFFF] ', cls)
            if 'text-[#FFFFFF]' not in cls and 'text-white' not in cls:
                cls += ' text-[#FFFFFF]'
            # Clean up double spaces
            cls = re.sub(r'  +', ' ', cls).strip()
        return f'className="{cls}"'

    content = re.sub(r'className="([^"]+)"', fix_class, content)

    if content != original:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(content)
        rel = path.replace(r'E:\chain\codenest\src', '')
        n = len(re.findall(r'className="[^"]*bg-(?:\[#0F1115\])[^"]*"', original)) 
        print(f'Fixed: {rel}')
        total += 1

print(f'\nDone. Fixed {total} files.')
