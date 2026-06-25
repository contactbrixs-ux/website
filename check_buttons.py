import re

with open(r'E:\chain\codenest\src\app\products\brixsvm\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find every className with a solid dark background
matches = re.findall(r'className="([^"]*bg-(?:\[#0F1115\]|\[#1A1A1A\]|black(?!/\d))[^"]*?)"', content)

print('=== ALL DARK BG ELEMENTS IN brixsvm/page.tsx ===\n')
problems = []
for i, m in enumerate(matches, 1):
    has_white = 'text-[#FFFFFF]' in m or 'text-white' in m
    status = 'OK  ' if has_white else 'FAIL'
    if not has_white:
        problems.append(m)
    print(f'[{i}] [{status}] {m[:140]}')

print()
print(f'=== SUMMARY: {len(problems)} PROBLEM(S) FOUND ===')
for p in problems:
    print(f'  MISSING white text: ...{p[:100]}...')
