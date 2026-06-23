import os

file_path = r"e:\chain\codenest\src\components\Header.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the icon and text with the actual BRIXS logo
# Original: <Image src="/brixs-assets/icon_black_on_transparent.svg" alt="BRIXS Logo" width={36} height={36} /> Brixs
# We want to replace it with: <Image src="/brixs_logo_black.svg" alt="BRIXS Logo" width={140} height={40} className="h-7 w-auto" />

# It might be split across lines, let's just do a simple replace
content = content.replace(
    '<Image src="/brixs-assets/icon_black_on_transparent.svg" alt="BRIXS Logo" width={36} height={36} /> Brixs',
    '<Image src="/brixs_logo_black.svg" alt="BRIXS Logo" width={140} height={40} className="h-7 w-auto" />'
)

content = content.replace(
    '<Image src="/brixs-assets/icon_black_on_transparent.svg" alt="BRIXS Logo" width={36} height={36} />\n          Brixs',
    '<Image src="/brixs_logo_black.svg" alt="BRIXS Logo" width={140} height={40} className="h-7 w-auto" />'
)

# And if it is still there due to spaces:
content = content.replace(
    '/brixs-assets/icon_black_on_transparent.svg',
    '/brixs_logo_black.svg'
)

# Also let's format the file using prettier since it's apparently minified or just 1 line.

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
