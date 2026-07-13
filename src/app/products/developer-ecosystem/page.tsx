import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Code2,
  Cpu,
  MonitorCheck,
  Wrench,
  Boxes,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Ecosystem | Brixs Chain",
  description: "Enterprise-grade SDKs, zero-config local networks, and deep IDE integration. Build on Brixs Chain without friction.",
  openGraph: {
    images: [{ url: "/assets/og/products-developer-ecosystem.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/products-developer-ecosystem.png"]
  }
};

const sdks: [typeof Code2, string, string][] = [
  [Code2, "brixs-js", "A comprehensive TypeScript library for frontend integration, React hooks, and wallet adapters."],
  [Cpu, "brixs-rs", "Native Rust bindings for high-performance backend systems, trading engines, and validators."],
  [MonitorCheck, "brixs-py", "Python SDK tailored for data scientists, indexers, and automated quant trading algorithms."],
];

const ide: [typeof Wrench, string, string][] = [
  [Wrench, "Real-time formal verification", "BrixsLang linting and verification checks straight in your editor."],
  [Cpu, "Gas profiling on hover", "See execution cost estimates inline as you write smart contracts."],
  [Boxes, "1-click testnet deployment", "Ship contracts to a live testnet without leaving VS Code or IntelliJ."],
];

const environments: [typeof Boxes, string, string][] = [
  [Boxes, "Devnet", "Bleeding-edge features, wiped weekly. Ideal for testing new Native EVM updates and unstable features."],
  [Globe2, "Testnet", "Stable pre-release environment mirroring mainnet. Used by dApps for final auditing before public launch."],
];

export default function DeveloperEcosystemPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#2b6aff" } as React.CSSProperties}>
      {/* HERO */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Terminal size={14} /> Products · Developer Ecosystem
          </span>
          <h1>
            Build without <em>friction.</em>
          </h1>
          <p className="brx-ph-lead">
            Enterprise-grade SDKs, zero-config local networks, and deep IDE
            integration. Start building on Brixs Chain in seconds — TypeScript,
            Rust, and Python, all first-class.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="/cli">
              Install CLI <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/">
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="brx-ph-stats">
            {[["3", "First-class SDKs"], ["1.84s", "Local node boot"], ["42", "CLI packages"]].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-h-media-frame">
          <video src="/assets/official/model-2.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / SDK</span>
        </div>
      </section>

      {/* FEATURE: SDKs */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">SDK ecosystem</p>
          <h2>Enterprise-grade client libraries.</h2>
          <p>One protocol, three first-class SDKs — pick the language your team already lives in.</p>
        </div>
        <div className="brx-pillars">
          {sdks.map(([Ico, title, desc]) => (
            <div className="brx-pillar" key={title}>
              <span className="brx-pillar-ico"><Ico size={24} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CODE */}
      <section className="brx-section gray">
        <div className="brx-codewrap">
          <div>
            <p className="brx-eyebrow">Zero-config local dev</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,46px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 18px" }}>
              A testnet on your machine in seconds.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#59606a", maxWidth: 460 }}>
              Install the CLI globally, boot a local node with a funded faucet,
              and start shipping. No accounts, no config files, no waiting.
            </p>
          </div>
          <div className="brx-code">
            <div className="brx-code-bar">
              <i /><i /><i />
              <span>install.sh</span>
            </div>
            <pre>
{`$ npm install -g @brixs/cli
`}<span className="c">{`# added 42 packages in 1.2s`}</span>{`

$ brixs local start
`}<span className="c">{`# ► Genesis block loaded`}</span>{`
`}<span className="c">{`# ► Faucet running at port 5001`}</span>{`
`}<span className="c">{`# ✔ Local node active in 1.84s`}</span>{`

$ brixs deploy --network testnet
`}<span className="c">{`# formal verification passed — 0 errors, 0 warnings`}</span>{`
`}<span className="c">{`# contract live on testnet`}</span>
            </pre>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Deep IDE integration</p>
          <h2>Tooling that ships with you.</h2>
          <p>Official extensions for VS Code and IntelliJ bring the chain into your editor.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-12 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1115] shadow-2xl">
          <div className="bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="size-3 rounded-full bg-red-500/80"></div>
            <div className="size-3 rounded-full bg-yellow-500/80"></div>
            <div className="size-3 rounded-full bg-green-500/80"></div>
            <span className="ml-4 text-xs font-mono text-white/30 tracking-wider">contract.sol — VS Code</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto relative">
            <div className="flex">
              <span className="text-white/20 w-8 select-none">1</span>
              <span className="text-[#2b6aff]">pragma</span>
              <span className="text-white ml-2">solidity ^0.8.20;</span>
            </div>
            <div className="flex">
              <span className="text-white/20 w-8 select-none">2</span>
            </div>
            <div className="flex">
              <span className="text-white/20 w-8 select-none">3</span>
              <span className="text-[#2b6aff]">contract</span>
              <span className="text-white ml-2">BrixsVault {'{'}</span>
            </div>
            <div className="flex">
              <span className="text-white/20 w-8 select-none">4</span>
              <span className="text-white ml-8 group relative cursor-pointer inline-block">
                <span className="text-[#00d395]">function</span> deposit() <span className="text-[#00d395]">external</span> <span className="text-[#00d395]">payable</span> {'{'}
                <div className="absolute -top-10 left-0 bg-[#2b6aff] text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none shadow-lg border border-white/20">
                  Gas Estimate: 21,400 (~$0.001)
                </div>
              </span>
            </div>
            <div className="flex">
              <span className="text-white/20 w-8 select-none">5</span>
              <span className="text-white/40 ml-16">// Logic executes in parallel on Brixs Native EVM</span>
            </div>
            <div className="flex">
              <span className="text-white/20 w-8 select-none">6</span>
              <span className="text-white ml-8">{'}'}</span>
            </div>
            <div className="flex">
              <span className="text-white/20 w-8 select-none">7</span>
              <span className="text-white">{'}'}</span>
            </div>
          </div>
        </div>
        <div className="brx-pillars" style={{ marginTop: 24 }}>
          {ide.map(([Ico, title, desc]) => (
            <div className="brx-pillar" key={title}>
              <span className="brx-pillar-ico"><Ico size={24} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BAND: environments */}
      <section className="brx-band-split">
        <div>
          <p className="brx-eyebrow">Faucets &amp; testnets</p>
          <h2>Reliable environments before mainnet.</h2>
        </div>
        <p>
          Two dedicated networks let you test with confidence. Devnet carries
          bleeding-edge features wiped weekly for trying new Native EVM updates;
          Testnet is a stable, mainnet-mirroring environment dApps use for final
          auditing before a public launch — each with its own faucet and explorer.
        </p>
      </section>

      {/* ENVIRONMENTS detail */}
      <section className="brx-section gray">
        <div className="brx-pillars" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {environments.map(([Ico, title, desc]) => (
            <div className="brx-pillar" key={title}>
              <span className="brx-pillar-ico"><Ico size={24} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta-split">
        <div>
          <p className="brx-eyebrow" style={{ color: "var(--accent)" }}>Join the ecosystem</p>
          <h2>
            Build the <em>future.</em>
          </h2>
        </div>
        <div>
          <a className="brx-btn accent" href="/cli" style={{ background: "#06121f", color: "#fff" }}>
            Install CLI <Terminal size={16} />
          </a>
          <a className="brx-btn" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#06121f" }}>
            Read the docs <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <BrxFooter />
    </main>
  );
}
