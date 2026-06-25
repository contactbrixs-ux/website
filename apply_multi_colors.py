import os

SECTION_COLORS = {
    'developers': '#2B6AFF',  # Sui Blue
    'solutions': '#FFB800',   # Warm Yellow
    'products': '#FF3B30',    # Bright Red
    'resources': '#8C5AFC',   # Purple
    # ecosystem remains Mint Green (#00D395) so we don't need to replace it there
}

OLD_GREEN = '#00D395'

def process_file(filepath, new_color):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    content = content.replace(OLD_GREEN, new_color)
    
    # If the new color is yellow, we might need to fix hover text colors.
    # Yellow is bright, so hover:bg-[#FFB800] should probably have hover:text-black
    if new_color == '#FFB800':
        content = content.replace('hover:text-white', 'hover:text-black')
        content = content.replace('hover:text-[#FFFFFF]', 'hover:text-[#0F1115]')

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath} with accent {new_color}")

def main():
    base_dir = 'e:/chain/codenest/src/app'
    for section, color in SECTION_COLORS.items():
        section_dir = os.path.join(base_dir, section)
        if not os.path.exists(section_dir):
            continue
            
        for root, _, files in os.walk(section_dir):
            for file in files:
                if file.endswith('.tsx'):
                    filepath = os.path.join(root, file)
                    process_file(filepath, color)

if __name__ == '__main__':
    main()
