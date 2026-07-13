/* import Link from "next/link"; import { ArrowRight, BookOpen, Boxes, ChevronRight, Cpu, ExternalLink, Fingerprint, Globe2, Layers3, LockKeyhole, ShieldCheck, Sparkles, WalletCards, Zap, } from "lucide-react"; const sections = [ { label: "About", href: "#about" }, { label: "Platform", href: "#platform" }, { label: "Motion", href: "#motion" }, { label: "Explore", href: "#explore" }, { label: "Contact", href: "#contact" }, ]; const pillars = [ { icon: Layers3, title: "Chain infrastructure", copy: "A serious execution layer for payments, apps, and on-chain products that need a calmer, faster base.", }, { icon: WalletCards, title: "Wallet and onboarding", copy: "Gas sponsorship, account abstraction, and smoother user paths so the product feels premium, not technical.", }, { icon: Boxes, title: "Liquidity and bridging", copy: "Bridge-first flows that keep the ecosystem connected and make cross-chain movement legible at a glance.", }, { icon: Cpu, title: "Developer rails", copy: "RPC, docs, CLI, and explorer surfaces shaped for builders who want the architecture before the hype.", }, ]; const exploreCards = [ { icon: Globe2, title: "Network surface", copy: "The public chain story, explorer feel, and the high-level identity users see first.", media: "/assets/videos/hero-loop.mp4", type: "video" as const, }, { icon: Fingerprint, title: "Zero-gas UX", copy: "A cleaner entry point for onboarding and app-driven transaction flows.", media: "/assets/3d-assets/protocol-core.png", type: "image" as const, }, { icon: Sparkles, title: "Agentic systems", copy: "A stronger visual identity for autonomous workflows and smart execution.", media: "/assets/3d-assets/execution-engine.png", type: "image" as const, }, { icon: ShieldCheck, title: "Protocol trust", copy: "A composition that feels institutional and durable, not noisy or promotional.", media: "/assets/3d-assets/orbital-ring.png", type: "image" as const, }, { icon: BookOpen, title: "Docs-first build", copy: "A terminal-style visual for technical pages, architecture notes, and protocol writing.", media: "/assets/3d-assets/data-prism.png", type: "image" as const, }, { icon: Zap, title: "High-velocity rails", copy: "Fast-feeling systems with direct paths for apps, users, and liquidity.", media: "/assets/videos/hero-loop.mp4", type: "video" as const, }, ]; const stats = [ ["2s", "target settlement"], ["AA", "native onboarding"], ["0.01x", "gas feel"], ["24/7", "network surface"], ]; const trustRows = [ "Branding that reads like a platform, not a poster.", "A single long-form homepage with dedicated visual moments.", "Different sections use different assets and layouts on purpose.", "Professional color grading: dark slate, soft ivory, steel highlights.", ]; export default function Home() { return ( <main className="min-h-screen text-white"> <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,7,10,.72)] backdrop-blur-2xl"> <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"> <Link href="/" className="flex items-center gap-3"> <span className="grid size-11 place-items-center rounded-none border border-white/10 bg-white/6 text-[#0F1115] shadow-[0_18px_50px_rgba(0,0,0,.45)]"> <Image src="/full_logo_black_on_white.png" alt="BRIXS Logo" width={140} height={40} className="h-6 w-auto" priority /> </span> <div> <p className="text-[10px] uppercase tracking-[0.38em] text-white/40 leading-relaxed text-balance">Brixs</p> <p className="text-sm font-medium text-white/88 leading-relaxed text-balance">Chain platform</p> </div> </Link> <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary"> {sections.map((item) => ( <a key={item.label} href={item.href} className="rounded-none px-4 py-2 text-sm text-[#0F1115]/68 transition hover:bg-white/6 hover:text-[#0F1115]" > {item.label} </a> ))} </nav> <div className="flex items-center gap-3"> <a href="#contact" className="inline-flex items-center gap-2 rounded-none border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/92" > Start building <ArrowRight size={15} /> </a> </div> </div> </header> <section className="relative overflow-hidden"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,255,255,.08),transparent_22%),radial-gradient(circle_at_80%_15%,rgba(173,193,218,.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,.02),transparent_35%)]" /> <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:pb-24 lg:pt-16"> <div className="max-w-4xl"> <div className="inline-flex items-center gap-2 rounded-none border border-white/10 bg-white/5 ava-cut border-l-4 border-l-[#E84142] px-4 py-2 text-xs uppercase tracking-[0.34em] text-[#0F1115]/55"> <Sparkles size={14} /> Premium blockchain platform </div> <h1 className="mt-7 max-w-5xl text-5xl uppercase font-semibold leading-[0.9] tracking-[-0.07em] text-white sm:text-7xl uppercase lg:text-[6.4rem]"> Big platform energy. <span className="block text-white/72">One landing page. Many identities.</span> </h1> <p className="mt-7 max-w-2xl text-base leading-8 text-white/66 sm:text-lg"> Brixs is designed like a flagship chain website: professional color grading, a strong header and footer, and distinct visual sections for the chain, the docs, the wallet, the bridge, and the ecosystem around them. </p> <div className="mt-8 flex flex-col gap-3 sm:flex-row"> <a href="#platform" className="inline-flex items-center justify-center gap-2 rounded-none bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/92" > Explore the platform <ArrowRight size={16} /> </a> <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-none border border-white/15 px-5 py-3.5 text-sm font-semibold text-[#0F1115] transition hover:border-white hover:bg-white hover:text-black" > About the stack <ExternalLink size={16} /> </a> </div> <div className="mt-10 grid gap-3 sm:grid-cols-4"> {stats.map(([value, label]) => ( <div key={label} className="rounded-none border border-white/10 bg-white/5 text-[#0F1115] ava-cut border-l-4 border-l-[#E84142] p-4 shadow-[0_24px_80px_rgba(0,0,0,.3)]"> <div className="font-mono text-2xl text-white">{value}</div> <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/42">{label}</div> </div> ))} </div> </div> <div className="relative"> <div className="absolute -left-8 -top-8 h-36 w-36 rounded-none bg-white/10 text-[#0F1115] ava-cut border-l-4 border-l-[#005BFF] blur-3xl" /> <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(255,255,255,.04)] p-3 shadow-[0_40px_120px_rgba(0,0,0,.55)]"> <div className="grid gap-3 lg:grid-cols-[1.18fr_.82fr]"> <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black text-[#FFFFFF]"> <video className="h-full min-h-[460px] w-full object-cover opacity-92" src="/assets/videos/hero-loop.mp4" autoPlay muted loop playsInline aria-hidden="true" /> </div> <div className="grid gap-3"> <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black text-[#FFFFFF]"> <video src="/assets/videos/validator-network.mp4" autoPlay muted loop playsInline className="w-full h-full object-contain mix-blend-screen scale-90 opacity-60" /> </div> <div className="rounded-[1.75rem] border border-white/10 bg-white/5 text-[#0F1115] ava-cut border-l-4 border-l-[#E84142] p-5"> <p className="text-[10px] uppercase tracking-[0.32em] text-white/40 leading-relaxed text-balance">First impression</p> <p className="mt-3 text-sm leading-7 text-white/76"> A platform that feels closer to a serious infrastructure brand than a small landing page. </p> </div> </div> </div> <div className="mt-3 grid gap-3 sm:grid-cols-2"> <div className="rounded-none border border-white/10 bg-white/5 text-[#0F1115] ava-cut border-l-4 border-l-[#E84142] p-4"> <p className="text-[10px] uppercase tracking-[0.32em] text-white/40 leading-relaxed text-balance">Motion quality</p> <p className="mt-3 text-sm leading-6 text-white/78"> Architecture footage, precise crop, and a premium dark frame. </p> </div> <div className="rounded-none border border-white/10 bg-white/5 text-[#0F1115] ava-cut border-l-4 border-l-[#E84142] p-4"> <p className="text-[10px] uppercase tracking-[0.32em] text-white/40 leading-relaxed text-balance">Color grade</p> <p className="mt-3 text-sm leading-6 text-white/78"> Dark slate background, warm ivory text, cool steel highlights. </p> </div> </div> </div> </div> </div> </section> <section id="about" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-32"> <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center"> <div> <p className="text-[10px] uppercase tracking-[0.34em] text-white/40 leading-relaxed text-balance">About</p> <h2 className="mt-4 text-4xl uppercase font-semibold tracking-[-0.05em] text-white sm:text-6xl uppercase"> A calmer chain story, built like a bigger platform. </h2> </div> <div className="rounded-[2rem] border border-white/10 bg-white text-[#0F1115]/[0.04] p-6 sm:p-8"> <p className="text-lg leading-8 text-white/66 sm:text-xl"> This version is intentionally one single long landing page. Instead of feeling like a small demo, it behaves like a full platform: a large hero, meaningful sections, distinct motion blocks, and a footer that feels complete. </p> <div className="mt-8 grid gap-3 sm:grid-cols-3"> {[ ["Platform", "One page with deep sections"], ["Motion", "Different visual moments per section"], ["Identity", "Professional, high-end color grading"], ].map(([title, copy]) => ( <div key={title} className="rounded-none border border-white/10 bg-black/25 text-[#FFFFFF] p-4"> <div className="text-sm font-medium text-white">{title}</div> <p className="mt-3 text-sm leading-7 text-white/58">{copy}</p> </div> ))} </div> </div> </div> </section> <section id="platform" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-32"> <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"> <div className="max-w-3xl"> <p className="text-[10px] uppercase tracking-[0.34em] text-white/40 leading-relaxed text-balance">Platform</p> <h2 className="mt-4 text-4xl uppercase font-semibold tracking-[-0.05em] text-white sm:text-6xl uppercase"> Different systems, one polished identity. </h2> <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg"> Each card below is its own visual chapter: execution, UX, liquidity, docs, and institutional trust. </p> </div> <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-none border border-white/15 px-4 py-2 text-sm text-[#0F1115]/78 transition hover:border-white hover:bg-white hover:text-black" > Build with Brixs <ArrowRight size={14} /> </a> </div> <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"> {pillars.map((item, index) => { const Icon = item.icon; return ( <article key={item.title} className={`rounded-[2rem] border border-white/10 p-6 transition hover:-translate-y-1 hover:border-white/20 ${ index % 2 === 0 ? "bg-white/[0.05]" : "bg-black/30" }`} > <div className="flex items-start justify-between gap-4"> <span className="grid size-12 place-items-center rounded-none border border-white/10 bg-white/5 ava-cut border-l-4 border-l-[#E84142] text-[#0F1115] shadow-[0_18px_50px_rgba(0,0,0,.35)]"> <Icon size={20} /> </span> <span className="text-[10px] uppercase tracking-[0.32em] text-white/34">0{index + 1}</span> </div> <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3> <p className="mt-4 text-sm leading-7 text-white/62">{item.copy}</p> </article> ); })} </div> </section> <section id="motion" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-32"> <div className="grid gap-6 lg:grid-cols-[.88fr_1.12fr] lg:items-stretch"> <div className="rounded-[2.1rem] border border-white/10 bg-white text-[#0F1115]/[0.04] p-6 sm:p-8"> <p className="text-[10px] uppercase tracking-[0.34em] text-white/40 leading-relaxed text-balance">Motion</p> <h2 className="mt-4 text-4xl uppercase font-semibold tracking-[-0.05em] text-white sm:text-6xl uppercase"> Every section should feel distinct. </h2> <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg"> Different crops, different compositions, and different media treatments keep the website from feeling repetitive. </p> <div className="mt-8 grid gap-3"> {trustRows.map((row, index) => ( <div key={row} className="flex items-center gap-4 rounded-none border border-white/10 bg-black/25 text-[#FFFFFF] p-4"> <span className="font-mono text-sm text-white/42">{String(index + 1).padStart(2, "0")}</span> <p className="text-sm leading-7 text-white/70">{row}</p> </div> ))} </div> </div> <div className="grid gap-4 sm:grid-cols-2"> <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black text-[#FFFFFF]"> <video className="h-full w-full object-cover" src="/assets/videos/hero-loop.mp4" autoPlay muted loop playsInline /> </div> <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black text-[#FFFFFF]"> <Image src="/assets/3d-assets/execution-engine.png" alt="Agent sphere" width={1200} height={900} className="h-full w-full object-cover" /> </div> <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black text-[#FFFFFF]"> <Image src="/assets/3d-assets/orbital-ring.png" alt="Hexagonal ring station" width={1200} height={900} className="h-full w-full object-cover" /> </div> <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black text-[#FFFFFF]"> <Image src="/assets/3d-assets/data-prism.png" alt="Data terminal" width={1200} height={900} className="h-full w-full object-cover" /> </div> </div> </div> </section> <section id="explore" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-32"> <div className="max-w-3xl"> <p className="text-[10px] uppercase tracking-[0.34em] text-white/40 leading-relaxed text-balance">Explore</p> <h2 className="mt-4 text-4xl uppercase font-semibold tracking-[-0.05em] text-white sm:text-6xl uppercase"> The whole website still feels connected. </h2> <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg"> We’re keeping one cohesive platform, but the sections still look different enough to feel like separate chapters inside a bigger ecosystem. </p> </div> <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"> {exploreCards.map((card) => { const Icon = card.icon; return ( <article key={card.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white text-[#0F1115]/[0.04]"> <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"> <div className="flex items-center gap-3"> <span className="grid size-11 place-items-center rounded-none border border-white/10 bg-white/5 ava-cut border-l-4 border-l-[#E84142] text-[#0F1115]"> <Icon size={18} /> </span> <div> <div className="text-sm font-medium text-white">{card.title}</div> <div className="text-[10px] uppercase tracking-[0.28em] text-white/38">{card.type}</div> </div> </div> <ChevronRight size={16} className="text-white/35" /> </div> <div className="relative aspect-[16/10] bg-black text-[#FFFFFF]"> {card.type === "video" ? ( <video className="h-full w-full object-cover opacity-90" src={card.media} autoPlay muted loop playsInline /> ) : ( <Image src={card.media} alt={card.title} width={1200} height={900} className="h-full w-full object-cover" /> )} </div> <div className="p-5"> <p className="text-sm leading-7 text-white/62">{card.copy}</p> </div> </article> ); })} </div> </section> <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-32"> <div className="grid gap-6 lg:grid-cols-[1.02fr_.98fr] lg:items-stretch"> <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03))] p-6 sm:p-8"> <p className="text-[10px] uppercase tracking-[0.34em] text-white/40 leading-relaxed text-balance">Identity</p> <h2 className="mt-4 text-4xl uppercase font-semibold tracking-[-0.05em] text-white sm:text-6xl uppercase"> Professional grading. Strong hierarchy. Clean trust. </h2> <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg"> The color system keeps things restrained: deep blacks, soft whites, cool steel highlights, and a touch of warm neutral in the surface layers. </p> <div className="mt-8 grid gap-3 sm:grid-cols-2"> {[ "High-quality header with a strong brand lockup.", "Footer built like a real platform instead of a tiny afterthought.", "Sections separated by composition, not just spacing.", "Different visual identities across the same website.", ].map((item) => ( <div key={item} className="rounded-none border border-white/10 bg-black/25 p-4 text-sm leading-7 text-white/68"> {item} </div> ))} </div> </div> <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black text-[#FFFFFF]"> <video src="/assets/videos/validator-network.mp4" autoPlay muted loop playsInline className="w-full h-full object-contain mix-blend-screen scale-90 opacity-60" /> </div> </div> </section> <section id="contact" className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:pb-20"> <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white text-[#0F1115]/[0.04]"> <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:p-10"> <div> <p className="text-[10px] uppercase tracking-[0.34em] text-white/40 leading-relaxed text-balance">Contact</p> <h2 className="mt-4 text-4xl uppercase font-semibold tracking-[-0.05em] text-white sm:text-6xl uppercase"> Ready for a bigger launch moment. </h2> <p className="mt-5 max-w-2xl text-base leading-8 text-white/64 sm:text-lg"> The website now reads like one coherent product platform. If you want, we can next turn each major section into even more dramatic sub-blocks without losing the single page feel. </p> <div className="mt-8 flex flex-col gap-3 sm:flex-row"> <a href="#top" className="inline-flex items-center justify-center gap-2 rounded-none bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/92" > Back to top <ArrowRight size={16} /> </a> <a href="mailto:hello@brixs.space" className="inline-flex items-center justify-center gap-2 rounded-none border border-white/15 px-5 py-3.5 text-sm font-semibold text-[#0F1115] transition hover:border-white hover:bg-white hover:text-black" > hello@brixs.space <ExternalLink size={16} /> </a> </div> </div> <div className="rounded-[2rem] border border-white/10 bg-black/30 text-[#FFFFFF] p-6"> <div className="flex items-center gap-3"> <span className="grid size-12 place-items-center rounded-none border border-white/10 bg-white/5 text-[#0F1115] ava-cut border-l-4 border-l-[#E84142]"> <LockKeyhole size={18} /> </span> <div> <p className="text-[10px] uppercase tracking-[0.32em] text-white/40 leading-relaxed text-balance">Footer</p> <p className="mt-1 text-sm text-white/72 leading-relaxed text-balance">High-end platform footer with trust cues.</p> </div> </div> <div className="mt-8 grid gap-3 sm:grid-cols-2"> {[ "Solutions", "About", "Docs", "Use cases", "Wallet", "Legal", ].map((item) => ( <div key={item} className="rounded-none border border-white/10 bg-white/5 ava-cut border-l-4 border-l-[#E84142] px-4 py-3 text-sm text-[#0F1115]/72"> {item} </div> ))} </div> </div> </div> <div className="border-t border-white/10 px-6 py-5 text-sm text-white/46 sm:px-8"> Brixs Chain — built as a single premium landing page with multiple identities inside one platform. </div> </div> </section> </main> ); } */ import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  Code2,
  Globe2,
  Hexagon,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import LatestReleasesCarousel from "@/components/LatestReleasesCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brixs Chain | Zero-Gas Layer 2 Blockchain for the Next Billion Users",
  description: "Brixs Chain is an institutional-grade, zero-gas ZK-Rollup Layer 2 blockchain built for mass adoption. Native Account Abstraction, instant finality, and seamless EVM compatibility. Build the future of Web3.",
  openGraph: {
    images: [{ url: "/assets/og/home.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/home.png"]
  }
};

const nav = [
  { name: "Solutions", href: "/solutions" },
  { name: "CLI", href: "/cli" },
  { name: "Explorer", href: "https://testnet.brixs.space" },
  { name: "Resources", href: "/resources" },
];
const paths = [
  {
    icon: WalletCards,
    title: "Use Brixs",
    text: "An inviting place to start: discover the network, move value, and explore new applications.",
    action: "Explore the Network",
    image: "/assets/use-brixs-v2.png",
    href: "https://testnet.brixs.space",
  },
  {
    icon: Code2,
    title: "Build on Brixs",
    text: "A focused path for teams building the next onchain product, protocol, or experience.",
    action: "Open Builder Kit",
    image: "/assets/build-brixs-v2.png",
    href: "/cli",
  },
  {
    icon: Layers3,
    title: "Open Source",
    text: "Open source contributions are open. Partner, create, and bring a more useful network experience into the real world.",
    action: "Contribute Now",
    image: "/assets/open-source-v2.png",
    href: "#",
  },
];
const principles = [
  [
    "01",
    "Open by design",
    "A network experience made to be explored, extended, and used by anyone.",
  ],
  [
    "02",
    "Built for motion",
    "Products, communities, and capital move best when the rails disappear.",
  ],
  [
    "03",
    "Serious by default",
    "A visual and technical standard that earns trust without performing for attention.",
  ],
];
export default function Home() {
  return (
    <main id="top" className="brx">
      {" "}
      <section className="brx-hero">
        {" "}
        <div className="brx-hero-copy">
          {" "}
          <p className="brx-kicker leading-relaxed text-balance">
            <b /> Brixs Chain
          </p>{" "}
          <h1>
            Infrastructure
            <br />
            that feels like
            <br />
            <em>momentum.</em>
          </h1>{" "}
          <p>
            Brixs is a new network surface for moving value, creating
            experiences, and building the next internet economy.
          </p>{" "}
          <div className="brx-buttons">
            {" "}
            <Link className="brx-dark-btn" href="/use-brixs/portal">
              Explore Brixs <ArrowDownRight size={17} />
            </Link>{" "}
            <Link className="brx-line-btn" href="/solutions/architecture">
              For builders <ArrowRight size={16} />
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="brx-hero-art" aria-label="Brixs network motion graphic" style={{ width: '100%', minWidth: '100%' }}>
          {" "}
          <div className="brx-art-grid" /> <div className="brx-orbit one" />{" "}
          <div className="brx-orbit two" /> <div className="brx-orbit three" />{" "}
          <div className="brx-video-disc">
            {" "}
            <video
              src="/assets/videos/hero-loop.mp4"
              autoPlay
              muted
              loop
              playsInline
            />{" "}
          </div>{" "}
          <div className="brx-float floata">
            <Hexagon size={17} />
          </div>{" "}
          <div className="brx-float floatb">
            <Network size={18} />
          </div>{" "}
          <div className="brx-readout">
            <span>LIVE NETWORK</span>
            <strong>BRX / 01</strong>
            <i />
          </div>{" "}
          <p>
            Designed for real participation.
            <br />
            Built to keep moving.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <section className="brx-statement">
        {" "}
        <p className="brx-kicker light leading-relaxed text-balance">
          <b /> A public network with a private-quality experience
        </p>{" "}
        <h2>
          Good infrastructure makes
          <br />
          <em>possibility</em> feel obvious.
        </h2>{" "}
        <p>
          From the first wallet interaction to a global product launch, Brixs
          brings clarity to the things that power onchain participation.
        </p>{" "}
      </section>{" "}
      <section id="explore" className="brx-explore">
        {" "}
        <div className="brx-heading">
          {" "}
          <p className="brx-kicker leading-relaxed text-balance">
            <b /> Find your way in
          </p>{" "}
          <h2>
            One network.
            <br />
            Many starting points.
          </h2>{" "}
          <Link href="/solutions/architecture">
            Explore the Ecosystem <ArrowRight size={17} />
          </Link>{" "}
        </div>{" "}
        <div className="brx-card-grid">
          {" "}
          {paths.map(({ icon: Icon, title, text, action, image, href }) => (
            <article className="brx-path-card" key={title}>
              {" "}
              <div className="brx-path-image">
                {" "}
                <Image src={image} alt="" width={1200} height={900} />{" "}
                <span>
                  <Icon size={19} />
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3>{title}</h3> <p>{text}</p>{" "}
                <Link href={href}>
                  {action} <ArrowRight size={16} />
                </Link>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <section className="brx-network">
        {" "}
        <div className="brx-network-video">
          {" "}
          <video
            src="/assets/videos/hero-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
          />{" "}
        </div>{" "}
        <div className="brx-network-copy">
          {" "}
          <p className="brx-kicker light leading-relaxed text-balance">
            <b /> A network, not an island
          </p>{" "}
          <h2>
            Move with the
            <br />
            <em>whole picture</em>
            <br />
            in view.
          </h2>{" "}
          <p>
            Use a network identity that welcomes users in, gives builders a
            clear route forward, and makes every connection part of a bigger
            system.
          </p>{" "}
          <Link className="brx-light-btn" href="/solutions/architecture">
            See what Brixs can unlock <ArrowRight size={17} />
          </Link>{" "}
        </div>{" "}
      </section>{" "}
      <LatestReleasesCarousel />
      <section id="build" className="brx-build">
        {" "}
        <div className="brx-build-title">
          {" "}
          <p className="brx-kicker leading-relaxed text-balance">
            <b /> The Brixs standard
          </p>{" "}
          <h2>
            Made for the
            <br />
            next <em>chapter.</em>
          </h2>{" "}
          <p>
            Clear principles create better products. Brixs starts with the
            infrastructure, then keeps the human experience in view.
          </p>{" "}
        </div>{" "}
        <div className="brx-principles">
          {" "}
          {principles.map(([no, title, text], i) => (
            <article key={title}>
              {" "}
              <small>{no}</small>{" "}
              <span>
                {i === 0 ? (
                  <Globe2 />
                ) : i === 1 ? (
                  <Sparkles />
                ) : (
                  <ShieldCheck />
                )}
              </span>{" "}
              <h3>{title}</h3> <p>{text}</p>{" "}
              <Link href="/resources/vision">
                Learn more <ArrowRight size={15} />
              </Link>{" "}
            </article>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <section className="brx-builder-banner">
        {" "}
        <div className="brx-banner-image">
          {" "}
          <Image
            src="/assets/3d-assets/orbital-ring.png"
            alt="Brixs protocol architecture"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />{" "}
        </div>{" "}
        <div>
          {" "}
          <p className="brx-kicker leading-relaxed text-balance">
            <b /> For builders
          </p>{" "}
          <h2>
            Make the internet
            <br />
            <em>more usable.</em>
          </h2>{" "}
          <p>
            Bring your product, protocol, or community to a chain designed to
            feel fluent from the first click.
          </p>{" "}
          <Link className="brx-dark-btn" href="/cli">
            Build with Brixs <ArrowRight size={17} />
          </Link>{" "}
        </div>{" "}
      </section>{" "}
      <section id="contact" className="brx-final">
        {" "}
        <div>
          <Blocks size={27} />
        </div>{" "}
        <p className="brx-kicker light leading-relaxed text-balance">
          <b /> The Brixs network
        </p>{" "}
        <h2>
          The next move is
          <br />
          <em>yours.</em>
        </h2>{" "}
        <nav>
          {" "}
          <a href="mailto:hello@brixs.space">
            Talk to the team <ArrowRight size={17} />
          </a>{" "}
          <Link href="#top">
            Back to top <ArrowDownRight size={17} />
          </Link>{" "}
        </nav>{" "}
      </section>{" "}
      <BrxFooter />{" "}
    </main>
  );
}
