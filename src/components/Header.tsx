'use client'; 
import React, { useState, cloneElement } from 'react'; 
import Link from 'next/link'; 
import Image from 'next/image'; 
import { Menu, ArrowUpRight, ArrowRight, Network, Cpu, Database, Activity, Shield, Server, Coins, Landmark, Zap, Map, FileText, BookOpen, SquareSquare, GitMerge, Wallet, Boxes, Sparkles, Repeat, Rocket, Gift, Terminal, Layers, CreditCard, Bot, Globe2 } from 'lucide-react'; 

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
    { title: "Native EVM", subtitle: "High-performance smart contract engine.", icon: <Cpu size={20} strokeWidth={1.5} />, href: "/products/native-evm", badge: "Core" },
    { title: "Brixs Scan", subtitle: "Testnet Block Explorer.", icon: <Globe2 size={20} strokeWidth={1.5} />, href: "https://testnet.brixs.space", external: true },
    { title: "Brixs CLI & SDKs", subtitle: "Tools for the developer ecosystem.", icon: <SquareSquare size={20} strokeWidth={1.5} />, href: "/products/developer-ecosystem" },
    { title: "Brixs Wallet", subtitle: "Send, receive, and hold assets.", icon: <Wallet size={20} strokeWidth={1.5} />, href: "/use-brixs/wallet" },
    { title: "Portal", subtitle: "Bridge, swap, and manage assets.", icon: <Layers size={20} strokeWidth={1.5} />, href: "/use-brixs/portal" },
  ],
  Solutions: [
    { title: "Core Architecture", subtitle: "Modular and parallel execution.", icon: <Network size={20} strokeWidth={1.5} />, href: "/solutions/architecture" },
    { title: "Interoperability", subtitle: "Native cross-chain and bridges.", icon: <GitMerge size={20} strokeWidth={1.5} />, href: "/solutions/interoperability" },
    { title: "Data Model", subtitle: "Object-centric state and storage.", icon: <Database size={20} strokeWidth={1.5} />, href: "/solutions/data-model" },
    { title: "ZK-Rollup", subtitle: "Sub-second block times.", icon: <Boxes size={20} strokeWidth={1.5} />, href: "/solutions/l2-chain" },
    { title: "Future-Proof Security", subtitle: "Lattice-based security.", icon: <Shield size={20} strokeWidth={1.5} />, href: "/solutions/brixs-agglayer" },
    { title: "Sequencer Mempool", subtitle: "MEV Protection.", icon: <Shield size={20} strokeWidth={1.5} />, href: "/solutions/vaultbridge" },
    { title: "Brixs CDK", subtitle: "Launch your own app-chain.", icon: <Rocket size={20} strokeWidth={1.5} />, href: "/solutions/brixs-cdk" },
  ],
  "Use Cases": [
    { title: "Payments", subtitle: "Gasless micro-payments and settlement.", icon: <CreditCard size={20} strokeWidth={1.5} />, href: "/use-cases/payments" },
    { title: "Stablecoins", subtitle: "Stable value and liquidity rails.", icon: <Coins size={20} strokeWidth={1.5} />, href: "/use-cases/stablecoins" },
    { title: "RWAs", subtitle: "Tokenized real-world assets.", icon: <Boxes size={20} strokeWidth={1.5} />, href: "/use-cases/rwas" },
    { title: "Smart Contract Automation", subtitle: "Protocol-level automation.", icon: <Bot size={20} strokeWidth={1.5} />, href: "/use-cases/agentic-ai" },
    { title: "On / Off Ramps", subtitle: "Fiat to stablecoin entry points.", icon: <Repeat size={20} strokeWidth={1.5} />, href: "/solutions/on-off-ramps" },
  ],
  Developers: [
    { title: "Consensus", subtitle: "BrixsBFT and network topology.", icon: <Activity size={20} strokeWidth={1.5} />, href: "/developers/consensus" },
    { title: "Security", subtitle: "Future-Proof Securitygraphy.", icon: <Shield size={20} strokeWidth={1.5} />, href: "/developers/security" },
    { title: "Infrastructure", subtitle: "Nodes, RPC, and implementation.", icon: <Server size={20} strokeWidth={1.5} />, href: "/developers/infrastructure" },
    { title: "Brixs CLI", subtitle: "Command-line for builders.", icon: <Terminal size={20} strokeWidth={1.5} />, href: "/cli" },
    { title: "Developer CLI", subtitle: "Global NPM package.", icon: <Terminal size={20} strokeWidth={1.5} />, href: "/use-brixs/agent-cli" },
    { title: "API Keys", subtitle: "Manage your RPC API keys.", icon: <Terminal size={20} strokeWidth={1.5} />, href: "https://testnet.brixs.space/api-keys", external: true },
  ],
  Ecosystem: [
    { title: "Tokenomics", subtitle: "Deflationary mechanics & utility.", icon: <Coins size={20} strokeWidth={1.5} />, href: "/ecosystem/tokenomics" },
    { title: "Governance", subtitle: "Brixs DAO and protocol voting.", icon: <Landmark size={20} strokeWidth={1.5} />, href: "/ecosystem/governance" },
    { title: "Scalability", subtitle: "High throughput performance.", icon: <Zap size={20} strokeWidth={1.5} />, href: "/ecosystem/scalability" },
    { title: "Staking", subtitle: "Secure the network, earn rewards.", icon: <Sparkles size={20} strokeWidth={1.5} />, href: "/use-brixs/staking" },
    { title: "Airdrops", subtitle: "Quests, rewards, and campaigns.", icon: <Gift size={20} strokeWidth={1.5} />, href: "/use-brixs/airdrops" },
  ],
  Resources: [
    { title: "Blog", subtitle: "Insights, updates, and articles.", icon: <FileText size={20} strokeWidth={1.5} />, href: "/blog", badge: "New" },
    { title: "Roadmap", subtitle: "Future milestones and phases.", icon: <Map size={20} strokeWidth={1.5} />, href: "/resources/roadmap" },
    { title: "Executive Summary", subtitle: "The Brixs vision and mission.", icon: <FileText size={20} strokeWidth={1.5} />, href: "/resources/executive-summary" },
    { title: "Vision", subtitle: "The long-term thesis.", icon: <BookOpen size={20} strokeWidth={1.5} />, href: "/resources/vision" },
  ],
  Company: [
    { title: "About Us", subtitle: "Our mission, team, and story.", icon: <Globe2 size={20} strokeWidth={1.5} />, href: "/company/about" },
    { title: "Contact", subtitle: "Get in touch with us.", icon: <FileText size={20} strokeWidth={1.5} />, href: "/company/contact" },
    { title: "Branding Kit", subtitle: "Logos, assets, and guidelines.", icon: <Sparkles size={20} strokeWidth={1.5} />, href: "/branding-kit" },
  ],
  Docs: [
    { title: "Platform Overview", subtitle: "Architecture, consensus, data model.", icon: <BookOpen size={20} strokeWidth={1.5} />, href: "https://docs.brixs.space/platform/overview", external: true },
    { title: "Smart Contracts", subtitle: "Build and deploy on Brixs.", icon: <FileText size={20} strokeWidth={1.5} />, href: "https://docs.brixs.space/smart-contracts/overview", external: true },
    { title: "Wallets", subtitle: "Custodial & non-custodial SDKs.", icon: <Shield size={20} strokeWidth={1.5} />, href: "https://docs.brixs.space/wallets/overview", external: true },
    { title: "Cross-Chain", subtitle: "Bridges and interoperability.", icon: <GitMerge size={20} strokeWidth={1.5} />, href: "https://docs.brixs.space/cross-chain/overview", external: true },
    { title: "Infrastructure", subtitle: "Nodes, RPC, and topology.", icon: <Server size={20} strokeWidth={1.5} />, href: "https://docs.brixs.space/infrastructure/overview", external: true },
    { title: "API Reference", subtitle: "RPC endpoints and methods.", icon: <Database size={20} strokeWidth={1.5} />, href: "https://docs.brixs.space/api/overview", external: true },
  ],
}; 

export default function Header() { 
  const [activeMenu, setActiveMenu] = useState<string | null>(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return ( 
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-0 h-[72px] text-[#0F1115]" onMouseLeave={() => setActiveMenu(null)}> 
      <div className="flex items-center gap-8"> 
        <Link href="/" className="flex items-center gap-3 text-[22px] font-bold tracking-tight text-black" onClick={() => setMobileMenuOpen(false)}> 
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
        <Link className="hidden md:flex bg-[#0052FF] text-white hover:bg-blue-700 px-5 py-2.5 rounded-none text-[15px] font-semibold items-center gap-2 transition-colors" href="https://faucet.brixs.space/"> Launch Faucet </Link> 
        <button aria-label="Open navigation" className="lg:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : <Menu size={24} />}
        </button> 
      </div> 

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white overflow-y-auto lg:hidden flex flex-col">
          <div className="flex-1 p-4 flex flex-col pb-32">
            {Object.entries(menus).map(([name, items]) => (
              <div key={name} className="flex flex-col border-b border-gray-100 last:border-0">
                <button 
                  className="flex items-center justify-between py-4 text-[18px] font-bold text-black w-full text-left"
                  onClick={() => setActiveMenu(activeMenu === name ? null : name)}
                >
                  {name}
                  <svg width="12" height="12" viewBox="0 0 10 6" fill="none" className={`transition-transform text-gray-400 ${activeMenu === name ? 'rotate-180' : ''}`}><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> 
                </button>
                
                {activeMenu === name && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-4">
                    {items.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={item.href} 
                        className="flex flex-col gap-2 p-3 bg-gray-50 border border-gray-100 rounded-none text-black hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveMenu(null);
                        }}
                      >
                        <div className="text-gray-500 bg-white border border-gray-200 p-2 w-fit">
                          {cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                        </div>
                        <div className="text-[13px] font-semibold leading-tight flex items-center gap-1">
                          {item.title}
                          {item.external && <ArrowUpRight size={12} className="text-gray-400" />}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex gap-3 z-50">
            <Link className="flex-1 text-[15px] font-bold text-center py-3 border border-gray-200 rounded-none text-black bg-gray-50" href="/cli" onClick={() => setMobileMenuOpen(false)}>Start building</Link>
            <Link className="flex-1 bg-[#0052FF] text-white text-[15px] font-bold text-center py-3 rounded-none" href="https://faucet.brixs.space/" onClick={() => setMobileMenuOpen(false)}>Launch Faucet</Link>
          </div>
        </div>
      )}
    </header> 
  ); 
}