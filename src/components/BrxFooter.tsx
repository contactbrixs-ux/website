"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-[#8c93a2] hover:text-white transition-colors duration-200">
    {children}
  </Link>
);

export default function BrxFooter() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "light";

  return (
    <footer className="bg-[#0a0a0b] text-[#8c93a2] w-full text-sm font-sans border-t border-[#1e1e1e]">
      {/* Top Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#1e1e1e]">
        <div className="p-6 md:p-8 flex items-center justify-between border-b md:border-b-0 md:border-r border-[#1e1e1e] md:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/branding-kit/full_logo_white_on_black.png" alt="BRIXS" width={200} height={57} className="h-10 w-auto rounded" />
          </Link>
          <div className="flex bg-[#1e1e1e] p-1 rounded-md">
            <button 
              onClick={() => setTheme("dark")}
              className={`p-1.5 rounded transition ${currentTheme === 'dark' ? 'text-white bg-[#333]' : 'text-gray-500 hover:text-white'}`}
            >
              <Moon size={16} />
            </button>
            <button 
              onClick={() => setTheme("light")}
              className={`p-1.5 rounded transition ${currentTheme === 'light' ? 'text-white bg-[#333] shadow-sm' : 'text-gray-500 hover:text-white'}`}
            >
              <Sun size={16} />
            </button>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center items-center md:items-end md:col-span-3">
          <div className="flex gap-6">
            <SocialIcon href="https://x.com/BrixsChain"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></SocialIcon>
            <SocialIcon href="https://discord.gg/qZsHWtDnu"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.05.05 0 00-.032.027C.533 9.045-.32 13.579.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg></SocialIcon>
            <SocialIcon href="https://t.me/BrixsChain"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg></SocialIcon>
            <SocialIcon href="https://github.com/Brixs-Chain"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 8.21 23.36c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c.83.01 1.66.11 2.45.33 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 0z"/></svg></SocialIcon>
            <SocialIcon href="https://instagram.com/BrixsChain"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></SocialIcon>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {/* Column 1 */}
        <div className="p-6 md:p-8 md:border-r border-[#1e1e1e] flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Solutions</h3>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/solutions/architecture" className="hover:text-white transition-colors">Architecture</Link></li>
              <li><Link href="/solutions/data-model" className="hover:text-white transition-colors">Data Model</Link></li>
              <li><Link href="/solutions/interoperability" className="hover:text-white transition-colors">Interoperability</Link></li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Products</h3>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/products/native-evm" className="hover:text-white transition-colors">Native EVM</Link></li>
              <li><a href="https://testnet.brixs.space" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Brixs Scan</a></li>
                <li><Link href="/use-brixs/wallet" className="hover:text-white transition-colors">Brixs Wallet</Link></li>
                <li><Link href="/use-brixs/portal" className="hover:text-white transition-colors">Portal</Link></li>
              <li><Link href="/products/developer-ecosystem" className="hover:text-white transition-colors">Developer Ecosystem</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="p-6 md:p-8 md:border-r border-[#1e1e1e] flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Developers</h3>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/developers/consensus" className="hover:text-white transition-colors">Consensus</Link></li>
              <li><Link href="/developers/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/developers/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/cli" className="hover:text-white transition-colors">Brixs CLI</Link></li>
              <li><a href="https://testnet.brixs.space/api-keys" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API Keys</a></li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Resources</h3>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/resources/executive-summary" className="hover:text-white transition-colors">Executive Summary</Link></li>
              <li><Link href="/resources/vision" className="hover:text-white transition-colors">Vision</Link></li>
              <li><Link href="/resources/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/company/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/company/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/branding-kit" className="hover:text-white transition-colors">Branding Kit</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="p-6 md:p-8 md:border-r border-[#1e1e1e] flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Ecosystem</h3>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/ecosystem/governance" className="hover:text-white transition-colors">Governance</Link></li>
              <li><Link href="/ecosystem/scalability" className="hover:text-white transition-colors">Scalability</Link></li>
              <li><Link href="/ecosystem/tokenomics" className="hover:text-white transition-colors">Tokenomics</Link></li>
            </ul>
          </div>
          <div className="mt-10 pt-8 border-t border-[#1e1e1e]/50">
            <h3 className="font-bold text-[#ffb800] mb-5 text-[11px] uppercase tracking-wider">Testnet RPC Details</h3>
            <div className="bg-[#111317] p-5 rounded-md border border-[#22252a] flex flex-col gap-3 text-xs">
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-1 xl:gap-0">
                <span className="text-[#8c93a2]">Status</span>
                <span className="text-[#ffb800] font-bold">LIVE (TESTNET ONLY)</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mt-3 border-t border-[#22252a] pt-3 gap-1 xl:gap-0">
                <span className="text-[#8c93a2]">Testnet RPC</span>
                <span className="font-mono text-white select-all break-all">https://rpc-testnet.brixs.space</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-1 xl:gap-0">
                <span className="text-[#8c93a2]">Chain ID</span>
                <span className="font-mono text-[#00d395] select-all">51515</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mt-3 border-t border-[#22252a] pt-3 gap-1 xl:gap-0">
                <span className="text-[#8c93a2]">Mainnet</span>
                <span className="text-[#59606a] italic">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#22252a 1px, transparent 1px), linear-gradient(90deg, #22252a 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          
          <div className="relative z-10">
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Community & Docs</h3>
            <ul className="flex flex-col gap-3.5">
              <li><a href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://docs.brixs.space/platform/overview" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Platform Docs</a></li>
                <li><a href="https://docs.brixs.space/smart-contracts/overview" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Smart Contracts</a></li>
                <li><a href="https://docs.brixs.space/wallets/overview" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Wallets</a></li>
                <li><a href="https://docs.brixs.space/api/overview" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="https://faucet.brixs.space/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Testnet Faucet</a></li>
              <li><a href="https://github.com/Brixs-Chain" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><Link href="/resources/roadmap" className="hover:text-white transition-colors">Development Updates</Link></li>
              <li><Link href="/company/contact" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          <div className="mt-8 relative z-10">
            <h3 className="font-bold text-white mb-5 text-[11px] uppercase tracking-wider">Legal & Contact</h3>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/company/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/company/vision" className="hover:text-white transition-colors">Vision</Link></li>
                <li><Link href="/company/whitepaper" className="hover:text-white transition-colors">Whitepaper</Link></li>
                <li><Link href="/branding-kit" className="hover:text-white transition-colors">Branding Kit</Link></li>
                <li><Link href="/company/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="mt-auto relative z-10 pt-10">
            <button className="bg-gradient-to-r from-[#6b31ff] to-[#8c5afc] text-white px-5 py-2.5 rounded font-bold hover:opacity-90 transition-opacity text-sm shadow-lg shadow-[#6b31ff]/20">
              Consent Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
