import os, re

pages_dir = r'E:\chain\codenest\src\app'
results = {}

for root, _, files in os.walk(pages_dir):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
            rel = path.replace(pages_dir, '').replace('\\', '/')

            placeholders = re.findall(r'---\s*\[([^\]]+)\]\s*---', content)
            images = list(set(re.findall(r'src="(/[^"]+)"', content)))
            videos = list(set(re.findall(r'src="(/[^"]+(\.mp4|\.webm|\.mov))"', content)))

            results[rel] = {
                'placeholders': placeholders,
                'images': [i for i in images if not i.endswith(('.mp4','.webm','.mov'))],
                'videos': [v[0] for v in videos]
            }

for page, data in sorted(results.items()):
    if data['placeholders'] or data['images'] or data['videos']:
        print(f'PAGE: {page}')
        for p in data['placeholders']:
            print(f'  [PLACEHOLDER] {p}')
        for img in data['images']:
            print(f'  [IMAGE SRC]   {img}')
        for vid in data['videos']:
            print(f'  [VIDEO SRC]   {vid}')
        print()
