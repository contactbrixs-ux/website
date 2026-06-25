import os
import re

VIBRANT_COLORS = ['#FF3B30', '#8C5AFC', '#2B6AFF', '#00D395', '#FFB800']
TARGET_HEXES = ['#005BFF', '#E84142', '#00D395', '#FFB800', '#2B6AFF', '#FF3B30', '#8C5AFC']

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    color_idx = 0

    def replacer(match):
        nonlocal color_idx
        quote = match.group(1)
        classes = match.group(2)
        
        has_target = False
        for h in TARGET_HEXES:
            if h in classes:
                has_target = True
                break
                
        if has_target:
            new_color = VIBRANT_COLORS[color_idx]
            is_bg_target = any(f'bg-[{h}]' in classes for h in TARGET_HEXES)
            
            for h in TARGET_HEXES:
                classes = classes.replace(h, new_color)
                
            if new_color == '#FFB800' and is_bg_target:
                classes = classes.replace('text-white', 'text-black')
                classes = classes.replace('text-[#FFFFFF]', 'text-[#0F1115]')
                classes = classes.replace('hover:text-white', 'hover:text-black')
                classes = classes.replace('hover:text-[#FFFFFF]', 'hover:text-[#0F1115]')
                
            color_idx = (color_idx + 1) % len(VIBRANT_COLORS)
            
        return f'className={quote}{classes}{quote}'

    # Safely match className="..." or className='...'
    content = re.sub(r'className=(["\'])(.*?)\1', replacer, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    base_dir = 'e:/chain/codenest/src/app'
    for root, dirs, files in os.walk(base_dir):
        normalized_root = root.replace('\\', '/')
        if normalized_root == 'e:/chain/codenest/src/app':
            continue

        for file in files:
            if file.endswith('.tsx'):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
