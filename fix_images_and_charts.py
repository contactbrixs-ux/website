import os
import re

base_dir = r"e:\chain\codenest\src\app"

def fix_content(content, path):
    # Fix <Image src="...mp4" />
    def replacer(match):
        src = match.group(1)
        classes = match.group(2)
        return f'<video src="{src}" autoPlay muted loop playsInline className="{classes}" />'
    
    # We want to catch <Image src="/assets/videos/validator-network.mp4" alt="..." fill className="..." />
    content = re.sub(r'<Image\s+src="([^"]+\.mp4)"[^>]*className="([^"]+)"[^>]*/>', replacer, content)
    
    # Let's just do a simpler replace because of arbitrary order of attributes:
    # If there is an Image tag with .mp4
    if '<Image src="/assets/videos/' in content:
        content = content.replace('<Image src="/assets/videos/validator-network.mp4"', '<video src="/assets/videos/validator-network.mp4" autoPlay muted loop playsInline')
        content = content.replace('<Image src="/assets/videos/hero-loop.mp4"', '<video src="/assets/videos/hero-loop.mp4" autoPlay muted loop playsInline')
        content = content.replace('<Image src="/assets/videos/architecture-rotate.mp4"', '<video src="/assets/videos/architecture-rotate.mp4" autoPlay muted loop playsInline')
        content = content.replace('alt="Orbiting Cubes Network"', '')
        content = content.replace('fill className=', 'className=')
        content = content.replace('/>', '/>') # handled naturally
        
    # Inject Pie Chart in tokenomics
    if 'tokenomics' in path.lower() and 'pie-chart' not in content:
        # We will look for <video src="/assets/videos/validator-network.mp4" autoPlay muted loop playsInline alt=""  className="object-contain mix-blend-screen scale-90 " />
        # and replace it with <Image src="/assets/3d-assets/pie-chart.png" alt="Tokenomics Pie Chart" fill className="object-contain scale-90 mix-blend-screen drop-shadow-2xl" />
        content = re.sub(r'<video src="/assets/videos/validator-network\.mp4"[^>]+>', 
                         r'<Image src="/assets/3d-assets/pie-chart.png" alt="Pie Chart" fill className="object-contain scale-90" />', content, count=1)
                         
    # Inject Graph Chart in data-model
    if 'data-model' in path.lower() and 'graph-chart' not in content:
        content = re.sub(r'<video src="/assets/videos/validator-network\.mp4"[^>]+>', 
                         r'<Image src="/assets/3d-assets/graph-chart.png" alt="Graph Chart" fill className="object-contain scale-90" />', content, count=1)
                         
    # Strip any leftover animate-[spin...] classes that might have been skipped
    content = re.sub(r'\banimate-\[spin[^\]]*\]', '', content)
    
    # Fix contrast: some buttons might be bg-white text-white
    content = content.replace('bg-white text-white', 'bg-white text-black font-bold')
    content = content.replace('text-white bg-white', 'bg-white text-black font-bold')
    content = content.replace('bg-black text-black', 'bg-black text-white font-bold')
    
    return content

for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = fix_content(content, path)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(new_content)

print("Charts implemented and syntax fixed.")
