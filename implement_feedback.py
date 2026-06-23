import os
import re

base_dir = r"e:\chain\codenest\src\app"
components_dir = r"e:\chain\codenest\src\components"

def remove_animations(content):
    # Remove spinning/pulsing utility classes
    content = re.sub(r'\banimate-\[spin[^\]]*\]\b', '', content)
    content = re.sub(r'\banimate-\[pulse[^\]]*\]\b', '', content)
    content = re.sub(r'\banimate-\[slide[^\]]*\]\b', '', content)
    # Clean up double spaces caused by removal
    content = re.sub(r'\s+', ' ', content).replace('className=" ', 'className="')
    return content

def fix_logo(content):
    # Replace any <Image src="/assets/icons/api.svg" ... /> or <Image src="/assets/icons/infrastructure.svg" ... /> in footers/headers with the actual logo
    # Find things like: <Image src="/assets/icons/api.svg" alt="BRIXS Logo" width={36} height={36} />
    # Or <div className="..."><Diamond size={12} ... /> BRIXS ...</div>
    # Actually, we can just replace the specific footer/header logo blocks.
    
    # Replace footer/header image imports
    content = re.sub(r'<Image src="/assets/icons/[^"]+" alt="BRIXS Logo" width=\{36\} height=\{36\} />\s*Brixs',
                     r'<Image src="/brixs_logo.svg" alt="BRIXS Logo" width={140} height={40} className="h-8 w-auto" />', content)
                     
    content = re.sub(r'<Image src="/brixs/brixs-icon.svg" alt="" width=\{22\} height=\{22\} priority />',
                     r'<Image src="/brixs_logo.svg" alt="BRIXS Logo" width={140} height={40} className="h-6 w-auto" priority />', content)

    # In page.tsx: <span className="brx-mark"><i/><i/><i/></span>Brixs
    content = re.sub(r'<span className="brx-mark"><i/><i/><i/></span>Brixs',
                     r'<Image src="/brixs_logo.svg" alt="BRIXS Logo" width={120} height={32} className="h-6 w-auto" />', content)
                     
    return content

def fix_videos(content):
    # Replace some static images with videos where it makes sense to "play the video somewhere you use the photos"
    # But only if it's currently an <Image src="/assets/3d-assets/..." />
    # For instance, if it's data-prism.png or execution-engine.png inside a big 16/9 aspect ratio container, maybe we can use validator-network.mp4
    # The user says "play the video somewhere you use the photos"
    # We will look for <Image src="/assets/3d-assets/execution-engine.png" ... /> and replace with video
    # Let's replace crystal-01.png with architecture-rotate.mp4
    content = re.sub(
        r'<Image src="/assets/3d-assets/crystal-01.png"[^>]+/>',
        r'<video src="/assets/videos/architecture-rotate.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover mix-blend-screen opacity-60" />',
        content
    )
    
    content = re.sub(
        r'<Image src="/assets/3d-assets/protocol-core.png"[^>]+/>',
        r'<video src="/assets/videos/validator-network.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover mix-blend-screen opacity-60" />',
        content
    )
    return content

def resize_photos(content):
    # The user said "you can small the photos you can small the icons which is visible to all and also high quality resolutions"
    # To make massive 3D assets smaller, we can scale them down using scale-75 or changing w-full to w-3/4
    # We will find `<Image ... className="... object-cover ..."` and change it to `object-contain scale-90`
    # Or just replace `w-full h-full object-cover` with `w-full h-full object-contain scale-90`
    content = content.replace('object-cover mix-blend-screen', 'object-contain mix-blend-screen scale-90')
    return content

for d in [base_dir, components_dir]:
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith('.tsx'):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = remove_animations(content)
                new_content = fix_logo(new_content)
                new_content = fix_videos(new_content)
                new_content = resize_photos(new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as file:
                        file.write(new_content)

print("Applied user feedback: removed animations, added logos, switched photos to videos, and resized visuals.")
