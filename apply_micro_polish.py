import os
import re

base_dir = r"e:\chain\codenest\src\app"

def polish_typography(content):
    # Enforce text-balance and tight tracking on massive headings (H1, text-6xl, text-7xl, text-8xl)
    content = re.sub(r'(className="[^"]*?\b(text-6xl|text-7xl|text-8xl|text-\[.*?\])\b[^"]*?)(")', 
                     lambda m: m.group(1) + (" text-balance tracking-tighter" if "tracking" not in m.group(1) else "") + m.group(3), 
                     content)
    
    # Improve paragraph readability (text-gray-400, leading-relaxed)
    # Looking for <p className="...">
    content = re.sub(r'(<p className="[^"]*?)(")', 
                     lambda m: m.group(1) + (" leading-relaxed text-balance" if "leading" not in m.group(1) else "") + m.group(2), 
                     content)
                     
    return content

def polish_cards_and_shadows(content):
    # Replace generic shadow-xl / shadow-2xl / shadow-lg with ultra-premium inset and drop shadow combos
    # For dark mode, Apple/Linear style uses very subtle white inner top borders (inset) and deep black drops.
    premium_shadow = "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.05),0_12px_34px_rgba(0,0,0,0.5)]"
    
    content = re.sub(r'\bshadow-2xl\b', premium_shadow, content)
    content = re.sub(r'\bshadow-xl\b', premium_shadow, content)
    
    # Standardize border colors to be extremely subtle (white/5 or white/10) instead of gray-200 or gray-800
    content = re.sub(r'\bborder-gray-800\b', 'border-white/10', content)
    content = re.sub(r'\bborder-gray-900\b', 'border-white/5', content)
    
    return content

def polish_buttons(content):
    # Make buttons feel heavier and more premium.
    # We look for rounded-full bg-white text-black
    # This is a bit risky with pure regex, but we can target specific hover effects to ensure duration-500 and ease-out
    content = re.sub(r'\btransition-colors\b', 'transition-all duration-500 ease-out', content)
    content = re.sub(r'\btransition-all\b(?! duration)', 'transition-all duration-500 ease-out', content)
    
    return content

def polish_diagrams(content):
    # Clean up SVGs used as connection lines in diagrams
    # Make stroke-blue softer or replace bright red/green debug dots with subtle Apple-like UI dots
    content = re.sub(r'\bbg-red-500\b', 'bg-[#FF5F56]', content)
    content = re.sub(r'\bbg-yellow-500\b', 'bg-[#FFBD2E]', content)
    content = re.sub(r'\bbg-green-500\b', 'bg-[#27C93F]', content)
    
    # Make SVG paths more technical (stroke-white/20 instead of pure blue for pure background diagrams)
    content = re.sub(r'stroke="#1D4DFF"', 'stroke="rgba(29,77,255,0.4)"', content)
    
    return content

processed = 0
for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = polish_typography(content)
            new_content = polish_cards_and_shadows(new_content)
            new_content = polish_buttons(new_content)
            new_content = polish_diagrams(new_content)
            
            # Additional cleanup of duplicate classes that might have been injected
            new_content = new_content.replace('transition-all duration-500 ease-out duration-500', 'transition-all duration-500 ease-out')
            new_content = new_content.replace('text-balance tracking-tighter text-balance', 'text-balance tracking-tighter')
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                processed += 1

print(f"Applied micro-polish to {processed} pages.")
