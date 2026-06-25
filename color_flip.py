import os

def process_file(filepath):
    # Don't touch the home page, we already did it!
    # Wait, the home page in `src/app/page.tsx` doesn't use hardcoded colors anymore, but just in case:
    if filepath.replace('\\', '/') == 'src/app/page.tsx' or filepath.replace('\\', '/') == 'src/app/layout.tsx':
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    replacements = {
        "bg-[#000000]/90": "@@@1@@@",
        "bg-[#000000]": "@@@2@@@",
        "bg-black/80": "@@@3@@@",
        "bg-black/60": "@@@4@@@",
        "bg-black": "@@@5@@@",
        "bg-[#FAFAFA]": "@@@6@@@",
        "bg-[#F4F4F5]": "@@@7@@@",
        "bg-white/5": "@@@8@@@",
        "bg-white/10": "@@@9@@@",
        "bg-white": "@@@10@@@",
        "#E84142": "@@@11@@@",
        "#005BFF": "@@@12@@@",
        "text-white": "@@@13@@@",
        "text-black": "@@@14@@@",
        "text-[#0D0D0D]": "@@@15@@@",
        "border-white/5": "@@@16@@@",
        "border-white/10": "@@@17@@@",
        "border-white/20": "@@@18@@@",
        "border-[#005BFF]/40": "@@@19@@@",
        "border-gray-200": "@@@20@@@",
        "bg-[#111111]": "@@@21@@@",
        "text-gray-400": "@@@22@@@",
    }

    placeholder_to_new = {
        "@@@1@@@": "bg-white/90",
        "@@@2@@@": "bg-[#FFFFFF]",
        "@@@3@@@": "bg-white/80",
        "@@@4@@@": "bg-white/60",
        "@@@5@@@": "bg-[#FFFFFF]",
        "@@@6@@@": "bg-[#F4F5F7]",
        "@@@7@@@": "bg-[#FFB800]", # Yellow accents
        "@@@8@@@": "bg-black/5",
        "@@@9@@@": "bg-black/10",
        "@@@10@@@": "bg-[#0F1115]", # Dark main sections
        "@@@11@@@": "#00D395", # Green accents
        "@@@12@@@": "#2B6AFF", # Sui blue
        "@@@13@@@": "text-[#0F1115]",
        "@@@14@@@": "text-[#FFFFFF]",
        "@@@15@@@": "text-[#FFFFFF]",
        "@@@16@@@": "border-black/5",
        "@@@17@@@": "border-black/10",
        "@@@18@@@": "border-black/20",
        "@@@19@@@": "border-[#2B6AFF]/40",
        "@@@20@@@": "border-[#22252A]",
        "@@@21@@@": "bg-[#F4F5F7]",
        "@@@22@@@": "text-gray-600",
    }

    for old, placeholder in replacements.items():
        content = content.replace(old, placeholder)
        
    for placeholder, new in placeholder_to_new.items():
        content = content.replace(placeholder, new)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src/app'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))

print("Done!")
