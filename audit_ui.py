import os
import re
from collections import defaultdict

base_dir = r"e:\chain\codenest\src\app"
spacing_classes = defaultdict(int)
rounded_classes = defaultdict(int)
text_classes = defaultdict(int)
gap_classes = defaultdict(int)

pages_data = {}

for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                
                # Extract all classes
                classes = re.findall(r'className=["\']([^"\']+)["\']', content)
                all_classes = []
                for c in classes:
                    all_classes.extend(c.split())
                
                pages_data[path] = all_classes
                
                for c in all_classes:
                    if c.startswith(('p-', 'pt-', 'pb-', 'py-', 'px-', 'm-', 'mt-', 'mb-', 'my-', 'mx-')):
                        spacing_classes[c] += 1
                    elif c.startswith('rounded-'):
                        rounded_classes[c] += 1
                    elif c.startswith('text-') and c not in ['text-center', 'text-left', 'text-right', 'text-transparent', 'text-white']:
                        text_classes[c] += 1
                    elif c.startswith('gap-'):
                        gap_classes[c] += 1

print("--- GLOBAL VARIANTS ---")
print("Top rounded:", sorted(rounded_classes.items(), key=lambda x: -x[1])[:10])
print("Top gaps:", sorted(gap_classes.items(), key=lambda x: -x[1])[:10])
print("Top padding/margins:", sorted(spacing_classes.items(), key=lambda x: -x[1])[:15])

# Print per-page inconsistencies logic can be added or we can just analyze it.
for path, classes in pages_data.items():
    rel_path = path.replace(base_dir, '').replace('\\', '/')
    print(f"PAGE: {rel_path}")
    print(f"  Classes count: {len(classes)}")
