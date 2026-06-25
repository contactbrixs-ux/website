import os

def process_file(filepath):
    # Skip home page and layout
    if filepath.replace('\\', '/') in ['src/app/page.tsx', 'src/app/layout.tsx']:
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Selectively add Red (#FF3B30) back where Green (#00D395) was overly applied
    replacements = {
        "bg-[#00D395]": "bg-[#FF3B30]",
        "border-l-[#00D395]": "border-l-[#FF3B30]",
        "from-[#00D395]": "from-[#FF3B30]",
        "hover:text-[#00D395]": "hover:text-[#FF3B30]",
        "fill-[#00D395]": "fill-[#FF3B30]",
        # Let's also sprinkle some yellow accents just in case text-[#2B6AFF] is overused
        # Actually, let's keep it simple and just restore Red as requested.
    }

    for old, new in replacements.items():
        content = content.replace(old, new)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src/app'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))

print("Done!")
