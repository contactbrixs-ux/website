'use client'; 
import { useState } from 'react'; 
import Link from 'next/link'; 
import Image from 'next/image'; 
import { Menu, ArrowUpRight, ArrowRight, Network, Cpu, Database, Activity, Shield, Server, Coins, Landmark, Zap, Map, FileText, BookOpen, SquareSquare, GitMerge } from 'lucide-react'; 

interface MenuItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
  external?: boolean;
}

const menus: Record<string, MenuItem[]> = { 
  Products: [ 
    { title: "BrixsVM", subtitle: "High-performance smart contract engine.", icon: <Cpu size={20} strokeWidth={1.5} />, href: "/products/brixsvm", badge: "Core" }, 
    { title: "Brixs CLI & SDKs", subtitle: "Tools for the developer ecosystem.", icon: <SquareSquare size={20} strokeWidth={1.5} />, href: "/products/developer-ecosystem" }, 
  ], 
  Solutions: [ 
    { title: "Core Architecture", subtitle: "Modular and parallel execution.", icon: <Network size={20} strokeWidth={1.5} />, href: "/solutions/architecture" }, 
    { title: "Cross-Chain", subtitle: "Native interoperability and bridges.", icon: <GitMerge size={20} strokeWidth={1.5} />, href: "/solutions/interoperability" }, 
    { title: "Data Model", subtitle: "Object-centric state and storage.", icon: <Database size={20} strokeWidth={1.5} />, href: "/solutions/data-model" }, 
  ], 
  Developers: [ 
    { title: "Consensus", subtitle: "BrixsBFT and network topology.", icon: <Activity size={20} strokeWidth={1.5} />, href: "/developers/consensus" }, 
    { title: "Security", subtitle: "Post-quantum cryptography.", icon: <Shield size={20} strokeWidth={1.5} />, href: "/developers/security" }, 
    { title: "Backend", subtitle: "Infrastructure and implementation.", icon: <Server size={20} strokeWidth={1.5} />, href: "/developers/infrastructure" }, 
  ], 
  Ecosystem: [ 
    { title: "Tokenomics", subtitle: "Deflationary mechanics & utility.", icon: <Coins size={20} strokeWidth={1.5} />, href: "/ecosystem/tokenomics" }, 
    { title: "Governance", subtitle: "Brixs DAO and protocol voting.", icon: <Landmark size={20} strokeWidth={1.5} />, href: "/ecosystem/governance" }, 
    { title: "Scalability", subtitle: "High throughput performance.", icon: <Zap size={20} strokeWidth={1.5} />, href: "/ecosystem/scalability" }, 
  ], 
  Resources: [ 
    { title: "Roadmap", subtitle: "Future milestones and phases.", icon: <Map size={20} strokeWidth={1.5} />, href: "/resources/roadmap" }, 
    { title: "Executive Summary", subtitle: "The Brixs vision and mission.", icon: <FileText size={20} strokeWidth={1.5} />, href: "/resources/vision" }, 
    { title: "Documentation", subtitle: "Read the full technical docs.", icon: <BookOpen size={20} strokeWidth={1.5} />, href: "https://docs.brixs.space/", external: true }, 
  ] 
}; 

export default function Header() { 
  const [activeMenu, setActiveMenu] = useState<string | null>(null); 
  return ( 
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-0 h-[72px] text-[#0F1115]" onMouseLeave={() => setActiveMenu(null)}> 
      <div className="flex items-center gap-8"> 
        <Link href="/" className="flex items-center gap-3 text-[22px] font-bold tracking-tight text-black"> 
          <Image src="/full_logo_black_on_white.png" alt="BRIXS Logo" width={200} height={57} className="h-10 w-auto" /> 
        </Link> 
        <nav className="hidden lg:flex items-center gap-1"> 
          {Object.entries(menus).map(([name, items]) => ( 
            <div key={name} className="relative" onMouseEnter={() => setActiveMenu(name)} > 
              <button className={`px-4 py-2 text-[15px] font-medium rounded-none transition-colors flex items-center gap-1.5 ${activeMenu === name ? 'bg-gray-100 text-black' : 'text-gray-700 hover:text-black'}`}> 
                {name} 
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform text-gray-400 ${activeMenu === name ? 'rotate-180' : ''}`}><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> 
              </button> 
              {activeMenu === name && ( 
                <div className="absolute top-[calc(100%+4px)] left-0 min-w-[360px] bg-white border border-gray-100 rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-3 animate-in fade-in slide-in-from-top-2 text-[#0F1115]"> 
                  {items.map((item, idx) => ( 
                    <Link key={idx} href={item.href} className="flex items-start gap-4 p-3 rounded-none hover:bg-gray-50 transition-colors group text-[#0F1115]"> 
                      <div className="flex-shrink-0 mt-0.5 w-11 h-11 rounded-none border border-gray-200 bg-white flex items-center justify-center text-gray-500 group-hover:text-black transition-colors shadow-sm"> 
                        {item.icon} 
                      </div> 
                      <div className="flex-1"> 
                        <div className="flex items-center gap-2"> 
                          <h4 className="text-[15px] font-semibold text-black">{item.title}</h4> 
                          {item.external && <ArrowUpRight size={14} className="text-gray-400 -ml-1" />} 
                          {item.badge && <span className="px-2 py-0.5 rounded-none border border-gray-200 text-[11px] font-medium text-gray-500">{item.badge}</span>} 
                        </div> 
                        <p className="text-[14px] text-gray-500 mt-0.5 leading-snug">{item.subtitle}</p> 
                      </div> 
                    </Link> 
                  ))} 
                </div> 
              )} 
            </div> 
          ))} 
        </nav> 
      </div> 
      <div className="flex items-center gap-4"> 
        <Link className="hidden md:flex text-[15px] font-medium text-gray-700 hover:text-black transition-colors" href="/cli"> Start building </Link> 
        <Link className="hidden md:flex bg-[#0052FF] text-white hover:bg-blue-700 px-5 py-2.5 rounded-none text-[15px] font-semibold items-center gap-2 transition-colors" href="/explorer"> Enter Brixs </Link> 
        <button aria-label="Open navigation" className="lg:hidden text-black"><Menu size={24} /></button> 
      </div> 
    </header> 
  ); 
}