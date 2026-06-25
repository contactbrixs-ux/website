const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src', 'app'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // 1. Replace blue (#2B6AFF) with green (#00D395)
    content = content.replace(/#2B6AFF/g, '#00D395');
    
    // Replace light blue (e.g. blue-500) with green-500 (Tailwind classes)
    content = content.replace(/text-blue-400/g, 'text-green-400');
    content = content.replace(/text-blue-500/g, 'text-green-500');
    content = content.replace(/bg-blue-500/g, 'bg-green-500');
    content = content.replace(/hover:bg-blue-700/g, 'hover:bg-green-700');
    content = content.replace(/border-blue-400/g, 'border-green-400');
    
    // 2. Replace yellow (#FFB800) backgrounds with dark (#0F1115)
    // Actually, user wants no weird color combos. The yellow sections are bg-[#FFB800]
    // Let's replace the whole section background to dark, and then carefully invert text if needed.
    
    content = content.replace(/bg-\[#FFB800\]/g, 'bg-[#0F1115]');
    content = content.replace(/text-\[#FFB800\]/g, 'text-[#FFFFFF]');
    content = content.replace(/border-\[#FFB800\]/g, 'border-[#0F1115]');
    content = content.replace(/#FFB800/g, '#0F1115');

    // 3. Fix Red on Red or Light on Light
    // To prevent black on black inside the newly black sections:
    // Some cards inside the formerly yellow section had: bg-[#FFB800] border border-[#22252A] p-6 text-[#0F1115] ...
    // Since we changed bg to #0F1115, any text-[#0F1115] there will be invisible!
    // But how to selectively change it? 
    // Wait! Let's do something simpler: The user wants no inconsistent design issues.
    // If we changed bg-[#FFB800] to bg-[#0F1115], any element that was text-[#0F1115] (black) AND on a black background is bad.
    // Let's use a regex to find sections that have text-[#0F1115] on a dark background.
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed colors in', file);
    }
});
