import os
import re

base_dir = r"e:\chain\codenest\src\app"

asset_map = {
    # Homepage
    "/brixs-assets/agent-node-sphere.jpeg": "/assets/3d-assets/execution-engine.png",
    "/brixs-assets/architecture-motion.mp4": "/assets/videos/hero-loop.mp4",
    "/brixs-assets/hexagonal-ring-station.jpeg": "/assets/3d-assets/orbital-ring.png",
    "/brixs-assets/stacked-data-cubes-terminal.jpeg": "/assets/3d-assets/data-prism.png",
    "/brixs-assets/zero-gas-portal.jpeg": "/assets/3d-assets/protocol-core.png",
    
    # Consensus
    "/brixs-assets/Brix_Hexagonal_Ring_Station.jpeg": "/assets/3d-assets/orbital-ring.png",
    "/brixs-assets/Brix_Secure_Node_Block.jpeg": "/assets/3d-assets/secure-node.png",
    "/brixs-assets/Brix_Wireframe_Intersecting_Cubes.jpeg": "/assets/3d-assets/validator-mesh.png",
    "/brixs-assets/Floating_Polygonal_Rings.jpeg": "/assets/backgrounds/protocol-grid.png",
    "/brixs-assets/Floating_Rings_Data_Column.jpeg": "/assets/3d-assets/crystal-01.png",
    "/brixs-assets/Geometric_Wireframe_Knot.jpeg": "/assets/backgrounds/network-lines.png",
    "/brixs-assets/Industrial_Data_Gear.jpeg": "/assets/icons/validator.svg",
    "/brixs-assets/Orbiting_Cubes_Network.jpeg": "/assets/videos/validator-network.mp4",
    
    # Infrastructure
    "/brixs-assets/Brix_Tech_Pillar_Grid.jpeg": "/assets/backgrounds/infrastructure-bg.png",
    "/brixs-assets/White_Polygon_Swarm.jpeg": "/assets/backgrounds/blueprint-bg.png",
    "/brixs-assets/icon_white_on_transparent.svg": "/assets/icons/infrastructure.svg",
    
    # Security
    "/brixs-assets/Brix_Data_Prism_Core.jpeg": "/assets/3d-assets/data-prism.png",
    
    # Governance
    "/brixs-assets/Brix_Core_Data_Crystal.jpeg": "/assets/3d-assets/crystal-01.png",
    "/brixs-assets/Glowing_Hexagonal_Starburst.jpeg": "/assets/3d-assets/orbital-ring.png",
    
    # Scalability
    "/brixs-assets/Layered_Octagonal_Tower.jpeg": "/assets/3d-assets/protocol-core.png",
    
    # Brixs VM
    "/brixs-assets/Brix_Cubic_Architecture_Complex.jpeg": "/assets/3d-assets/execution-engine.png",
    
    # Exec Summary / Vision
    "/brixs-assets/Crystalline_Obelisk.jpeg": "/assets/3d-assets/crystal-01.png",
    "/brixs-assets/Fragmented_Prism_Core.jpeg": "/assets/3d-assets/data-prism.png",
    "/brixs-assets/Interlocking_Cuboid_Structure.jpeg": "/assets/3d-assets/cube-01.png",
    
    # Data Model
    "/brixs-assets/Brix_Stacked_Data_Cubes_Terminal.jpeg": "/assets/3d-assets/data-prism.png",
    
    # Interoperability
    "/brixs-assets/Brix_Orbital_Satellite_Station.jpeg": "/assets/3d-assets/orbital-ring.png",
    "/brixs-assets/Brix_Zero_Gas_Portal.jpeg": "/assets/3d-assets/protocol-core.png"
}

text_replacements = {
    "Powering the future of blockchain": "Instant settlement. Millisecond latency. Object-centric state.",
    "The next generation of applications will not be built on old infrastructure.": "Deploy in seconds. Scalable by default.",
    "The future of blockchain depends on better state architecture.": "Object-centric State Representation.",
    "The future of blockchain will be defined by execution speed.": "BRIXS VM: Object-centric state. Millisecond execution.",
    "next generation": "institutional-grade",
    "future of blockchain": "high-performance infrastructure",
    "revolutionizing": "optimizing",
    "powering tomorrow": "executing deterministically",
    "Security is our top priority": "Formally verified execution. Hardware enclave support.",
    "A fair and transparent token distribution": "BRIX Supply Curve & Genesis Allocation.",
    "Building the next generation of blockchain": "Protocol Development Timeline.",
    "We believe in a decentralized future": "Institutional-grade infrastructure requires determinism."
}

def fix_content(content, path):
    # 1. Assets
    for old_asset, new_asset in asset_map.items():
        content = content.replace(old_asset, new_asset)
        
    # Some specific video swaps based on the page context
    if "infrastructure" in path:
        content = content.replace("/assets/videos/hero-loop.mp4", "/assets/videos/infrastructure-loop.mp4")
    elif "security" in path or "brixs-vm" in path or "brixsvm" in path:
        content = content.replace("/assets/videos/hero-loop.mp4", "/assets/videos/protocol-background.mp4")
    elif "governance" in path:
        content = content.replace("/assets/videos/hero-loop.mp4", "/assets/videos/governance-flow.mp4")
    elif "scalability" in path or "roadmap" in path:
        content = content.replace("/assets/videos/hero-loop.mp4", "/assets/videos/architecture-rotate.mp4")
    elif "interoperability" in path:
        content = content.replace("/assets/videos/hero-loop.mp4", "/assets/videos/liquidity-engine.mp4")
        
    # Page specific icon swaps from the generic icon
    if "security" in path:
        content = content.replace("/assets/icons/infrastructure.svg", "/assets/icons/security.svg")
    elif "governance" in path:
        content = content.replace("/assets/icons/infrastructure.svg", "/assets/icons/governance.svg")
    elif "scalability" in path:
        content = content.replace("/assets/icons/infrastructure.svg", "/assets/icons/scaling.svg")
    elif "tokenomics" in path:
        content = content.replace("/assets/icons/infrastructure.svg", "/assets/icons/liquidity.svg")
    elif "roadmap" in path:
        content = content.replace("/assets/icons/infrastructure.svg", "/assets/icons/protocol.svg")
    elif "data-model" in path:
        content = content.replace("/assets/icons/infrastructure.svg", "/assets/icons/api.svg")
        
    # 2. Text Replacements
    for old_text, new_text in text_replacements.items():
        content = content.replace(old_text, new_text)

    # 3. Global UI Consistency (Regex replacements for classes)
    
    # Fix padding (py-16, py-24, py-40 -> py-32)
    content = re.sub(r'\bpy-(16|20|24|40)\b', 'py-32', content)
    
    # Fix rounded for cards (rounded-xl, rounded-[3rem], rounded-2xl -> rounded-3xl)
    # Be careful not to replace button rounded-full
    content = re.sub(r'\brounded-(xl|2xl|lg|\[3rem\]|\[2rem\])\b', 'rounded-3xl', content)
    
    # Ensure buttons have rounded-full (assuming buttons often have px-6 py-3 or similar, but harder to regex perfectly. We'll leave buttons if they use rounded-full, or change specific button classes)
    content = content.replace('rounded-lg', 'rounded-full') # For CLI page buttons
    
    # Animations
    content = content.replace('animate-pulse', '')
    content = content.replace('hover:scale-105', 'hover:scale-[1.02]')
    content = content.replace('duration-700', 'duration-500')
    content = content.replace('hover:-translate-y-2', '') # remove bouncy hovers
    
    return content

processed = 0
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
                processed += 1
                print(f"Updated {path}")

print(f"Applied fixes to {processed} pages.")
