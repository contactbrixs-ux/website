import os
import re

def audit_and_fix_colors(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    fixes_applied = 0

    # Define our backgrounds and conflicting text classes
    dark_bgs = [r'bg-\[#0F1115\]', r'bg-black', r'bg-\[#1A1A1A\]']
    light_bgs = [r'bg-\[#FFFFFF\]', r'bg-\[#F4F5F7\]', r'bg-white', r'bg-gray-50', r'bg-gray-100']

    dark_texts = ['text-[#0F1115]', 'text-black', 'text-gray-800', 'text-gray-900', 'text-[#1A1A1A]']
    light_texts = ['text-[#FFFFFF]', 'text-white', 'text-gray-100', 'text-gray-200']

    # We need to find className="..." blocks
    def fix_class_string(match):
        nonlocal fixes_applied
        cls_str = match.group(0)
        original_cls = cls_str

        # 1. Check if it's a Dark Background
        is_dark_bg = any(re.search(bg, cls_str) for bg in dark_bgs)
        if is_dark_bg:
            # Check for bad dark texts
            for dt in dark_texts:
                if dt in cls_str:
                    cls_str = cls_str.replace(dt, 'text-[#FFFFFF]')
            # Also, if there is NO text color defined, let's just make sure it's white to be safe
            if not any(t in cls_str for t in ['text-'] + light_texts):
                # insert text-[#FFFFFF] after the background class
                cls_str = re.sub(r'(' + '|'.join(dark_bgs) + r')(?:\/[0-9]+)?', r'\1 text-[#FFFFFF]', cls_str, count=1)

        # 2. Check if it's a Light Background
        is_light_bg = any(re.search(bg, cls_str) for bg in light_bgs)
        if is_light_bg:
            # Check for bad light texts
            for lt in light_texts:
                if lt in cls_str:
                    cls_str = cls_str.replace(lt, 'text-[#0F1115]')
            # Also, if there is NO text color defined, let's just make sure it's black
            if not any(t in cls_str for t in ['text-'] + dark_texts):
                cls_str = re.sub(r'(' + '|'.join(light_bgs) + r')(?:\/[0-9]+)?', r'\1 text-[#0F1115]', cls_str, count=1)
        
        if cls_str != original_cls:
            fixes_applied += 1
            
        return cls_str

    # Process all classNames
    content = re.sub(r'className="([^"]+)"', fix_class_string, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return fixes_applied
    return 0

total_fixes = 0
for root, _, files in os.walk('E:/chain/codenest/src/app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            fixes = audit_and_fix_colors(path)
            if fixes > 0:
                print(f"Fixed {fixes} color contrast issues in: {path}")
                total_fixes += fixes

print(f"\n--- AUDIT COMPLETE ---")
print(f"Total contrast issues fixed globally: {total_fixes}")
