const fs = require('fs');
const path = require('path');

const baseDir = 'e:\\chain\\codenest\\src\\app';
const docsDir = 'e:\\chain\\brixs chain main mwebsite\\brixs_docs';

// Cleanup old incorrect folders
const foldersToClean = ['products', 'solutions', 'developers', 'ecosystem', 'resources'];
foldersToClean.forEach(f => {
  const dir = path.join(baseDir, f);
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
});

const pageMap = [
  { doc: '05_Smart_Contract_Engine.md', path: 'products/brixsvm', title: 'BrixsVM', kicker: 'Execution Engine', image: '1526374965328-7f61d4dc18c5', icon: 'Code' },
  { doc: '13_Developer_Ecosystem.md', path: 'products/developer-ecosystem', title: 'Brixs CLI & SDKs', kicker: 'Tooling', image: '1558494949-ef010cbdcc31', icon: 'Terminal' },
  { doc: '02_Core_Architecture.md', path: 'solutions/architecture', title: 'Core Architecture', kicker: 'Modular Design', image: '1518770660439-4636190af475', icon: 'Layers' },
  { doc: '09_Cross_Chain_Interoperability.md', path: 'solutions/interoperability', title: 'Cross-Chain', kicker: 'Native Bridges', image: '1618005182384-a83a8bd57fbe', icon: 'Network' },
  { doc: '04_Data_Model_and_Storage.md', path: 'solutions/data-model', title: 'Data Model', kicker: 'Object-Centric State', image: '1639762681485-074b7f938ba0', icon: 'Database' },
  { doc: '03_Consensus_Mechanism.md', path: 'developers/consensus', title: 'Consensus', kicker: 'BrixsBFT', image: '1518770660439-4636190af475', icon: 'Cpu' },
  { doc: '08_Security_and_Cryptography.md', path: 'developers/security', title: 'Security', kicker: 'Post-Quantum Crypto', image: '1558494949-ef010cbdcc31', icon: 'ShieldCheck' },
  { doc: '10_Backend_Infrastructure.md', path: 'developers/infrastructure', title: 'Backend', kicker: 'Infrastructure', image: '1526374965328-7f61d4dc18c5', icon: 'Server' },
  { doc: '06_Tokenomics.md', path: 'ecosystem/tokenomics', title: 'Tokenomics', kicker: 'Deflationary Utility', image: '1639762681485-074b7f938ba0', icon: 'Coins' },
  { doc: '12_Governance_Model.md', path: 'ecosystem/governance', title: 'Governance', kicker: 'Brixs DAO', image: '1618005182384-a83a8bd57fbe', icon: 'Landmark' },
  { doc: '11_Scalability_and_Performance.md', path: 'ecosystem/scalability', title: 'Scalability', kicker: 'High Throughput', image: '1518770660439-4636190af475', icon: 'Zap' },
  { doc: '15_Roadmap_and_Future_Milestones.md', path: 'resources/roadmap', title: 'Roadmap', kicker: 'Future Milestones', image: '1558494949-ef010cbdcc31', icon: 'Map' },
  { doc: '01_Executive_Summary.md', path: 'resources/vision', title: 'Executive Summary', kicker: 'Vision & Mission', image: '1639762681485-074b7f938ba0', icon: 'Eye' },
];

function extractDoc(docFilename) {
  const p = path.join(docsDir, docFilename);
  if (!fs.existsSync(p)) return { intro: 'Detailed overview of the architecture and systems.', sections: [] };
  const content = fs.readFileSync(p, 'utf-8');
  const lines = content.split('\n');
  
  let intro = '';
  let sections = [];
  let currentSection = null;
  
  lines.forEach(line => {
    const tLine = line.trim();
    if (tLine.startsWith('# ')) return;
    if (tLine.startsWith('## ') || tLine.startsWith('### ')) {
      if (currentSection) sections.push(currentSection);
      currentSection = { 
        heading: tLine.replace(/#+ /, '').replace(/\*\*/g, ''), 
        id: tLine.replace(/#+ /, '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        paragraphs: [], 
        items: [] 
      };
    } else if (tLine.startsWith('- ') || tLine.startsWith('* ')) {
      const item = tLine.replace(/^[-*]\s*/, '').replace(/\*\*/g, '');
      if (item.length > 5) {
        if (currentSection) currentSection.items.push(item);
      }
    } else if (tLine.length > 30) {
      const pText = tLine.replace(/\*\*/g, '');
      if (currentSection) {
        currentSection.paragraphs.push(pText);
      } else {
        if (!intro) intro = pText;
      }
    }
  });
  if (currentSection) sections.push(currentSection);
  return { intro: intro || 'Detailed overview of the architecture and systems.', sections };
}

function generatePage(page, data) {
  // We need to collect all icons used
  const allIcons = new Set(['ArrowRight', 'CheckCircle2', 'ChevronRight', page.icon]);
  
  return `import Link from 'next/link';
import { ${Array.from(allIcons).join(', ')} } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white selection:bg-[#304aff] selection:text-white pb-24">
      {/* Advanced Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-${page.image}?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/50 via-[#05070a]/80 to-[#05070a]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-[#b8ff8d] mb-8 font-mono shadow-[0_0_20px_rgba(184,255,141,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#b8ff8d] animate-pulse" />
              {/* Using kicker text */}
              ${page.kicker}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              ${page.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl lg:mx-0 mx-auto">
              ${data.intro}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
               <Link href="/docs" className="bg-[#304aff] hover:bg-[#304aff]/90 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(48,74,255,0.3)] hover:scale-105">
                 Start Building <ArrowRight size={18} />
               </Link>
               <a href="#deep-dive" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md">
                 Explore Architecture
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Content Container */}
      <div id="deep-dive" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Sticky Navigation */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">On this page</p>
              <nav className="space-y-3">
                ${data.sections.map(s => `<a href="#${s.id}" className="block text-sm text-gray-400 hover:text-[#b8ff8d] hover:translate-x-1 transition-all">${s.heading}</a>`).join('\n                ')}
              </nav>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="lg:col-span-9 space-y-32">
            ${data.sections.map((section, idx) => `
               <section id="${section.id}" className="scroll-mt-32">
                 <div className="flex items-center gap-5 mb-10">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#304aff]/20 to-[#b8ff8d]/10 border border-white/10 flex items-center justify-center text-[#b8ff8d] shadow-[0_0_30px_rgba(184,255,141,0.05)]">
                     <${page.icon} size={32} />
                   </div>
                   <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">${section.heading}</h2>
                 </div>
                 
                 <div className="prose prose-invert prose-lg max-w-none mb-12">
                    ${section.paragraphs.map(p => `<p className="text-gray-300 leading-relaxed text-lg mb-6">${p}</p>`).join('\n                    ')}
                 </div>

                 ${section.items.length > 0 ? `
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                   ${section.items.map(item => `
                     <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-[#304aff] shrink-0 mt-1" size={24} />
                       <p className="text-gray-300 font-medium leading-relaxed">${item}</p>
                     </div>
                   `).join('\n                   ')}
                 </div>
                 ` : ''}
               </section>
            `).join('\n            ')}
          </div>
        </div>
      </div>
      
      {/* Advanced Footer CTA */}
      <section className="relative py-32 mt-12 overflow-hidden border-y border-white/10 bg-[#0a0d14] rounded-[3rem] mx-4 lg:mx-12">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-screen" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/80 to-transparent" />
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">Ready to leverage <span className="text-[#b8ff8d]">${page.title}</span>?</h2>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">Join thousands of developers building the future of decentralized applications on our highly optimized institutional-grade infrastructure.</p>
            <Link href="/docs" className="inline-flex items-center gap-3 bg-[#b8ff8d] text-[#05070a] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(184,255,141,0.3)]">
              Start Building Now <ChevronRight size={24} />
            </Link>
         </div>
      </section>
    </main>
  );
}`;
}

pageMap.forEach(p => {
  const data = extractDoc(p.doc);
  const content = generatePage(p, data);
  const dir = path.join(baseDir, p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log('Generated deeply expanded page:', p.path);
});
