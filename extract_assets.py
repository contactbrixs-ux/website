import os
import re

base_dir = r"e:\chain\codenest\src\app"
files_with_assets = []

for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                # Find all images, videos, svgs
                matches = re.findall(r'src=["\']([^"\']+\.(?:png|jpg|jpeg|mp4|svg))["\']', content)
                matches += re.findall(r'media:\s*["\']([^"\']+\.(?:png|jpg|jpeg|mp4|svg))["\']', content)
                if matches:
                    # try to get section context. Not perfect but gives us what's there
                    files_with_assets.append((path.replace(base_dir, '').replace('\\', '/'), matches))

for p, m in files_with_assets:
    print(f"PAGE: {p}")
    for asset in sorted(list(set(m))):
        print(f"  ASSET: {asset}")
    print()
