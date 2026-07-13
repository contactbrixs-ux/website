import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Rocket,
  Server,
  ShieldCheck,
  Network,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Brixs CLI | Brixs Chain",
  description: "The Brixs CLI takes you from local testing to global deployment — start a local node, deploy contracts, bridge assets, and manage validators from one command.",
  openGraph: {
    images: [{ url: "/assets/og/cli.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/cli.png"]
  }
};

const capabilities: [typeof Rocket, string, string][] = [
  [Rocket, "Instant deployment", "Ship smart contracts to testnet or mainnet with a single command."],
  [Server, "Local blockchain simulation", "Launch a complete local Brixs environment with zero external dependencies."],
  [ShieldCheck, "Validator management", "Stand up, verify, and operate validators directly from the terminal."],
  [Network, "RPC generation", "Generate ready-to-use RPC endpoints for any network you target."],
];

export default function DeveloperCLIPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#ff3b30" } as React.CSSProperties}>
      {/* HERO — split-media flip */}
      <section className="brx-h-media flip">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Terminal size={14} /> Developers · CLI
          </span>
          <h1>
            Deploy in <em>one command.</em>
          </h1>
          <p className="brx-ph-lead">
            The Brixs CLI takes you from local testing to global deployment.
            Start a local node, deploy contracts, bridge assets, and manage
            validators — all from the fastest path between code and production.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read CLI docs <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/">
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="brx-ph-stats">
            {[["30s", "Setup time"], ["1", "Command to deploy"], ["0", "External dependencies"]].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-h-media-frame">
          <video src="/assets/official/model-15.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / CLI</span>
        </div>
      </section>

      {/* CODE — terminal panel */}
      <section className="brx-section">
        <div className="brx-codewrap">
          <div>
            <p className="brx-eyebrow">The command line</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,46px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 28px" }}>
              One tool, the whole chain.
            </h2>
            <div className="brx-fsplit-list">
              <div className="brx-fsplit-item">
                <b>Install &amp; init</b>
                <p>Add the SDK and scaffold a project in seconds — <code>npm install @brixs/sdk</code>, then <code>brixs init project</code>.</p>
              </div>
              <div className="brx-fsplit-item">
                <b>Local to mainnet</b>
                <p>Spin up a local node, deploy contracts, and bridge assets across networks without leaving the terminal.</p>
              </div>
            </div>
          </div>
          <div className="brx-code">
            <div className="brx-code-bar">
              <i /><i /><i />
              <span>brixs.sh</span>
            </div>
            <pre>
              <div className="c"># Install the SDK</div>
              <div>npm install @brixs/sdk</div>
              <div className="c"># Scaffold a new project</div>
              <div>brixs init project</div>
              <div className="c"># Start a local node instantly</div>
              <div>brixs start localnet</div>
              <div className="c"># Deploy a smart contract to production</div>
              <div>brixs deploy contract --network mainnet</div>
              <div className="c"># Bridge assets cross-chain</div>
              <div>brixs bridge asset</div>
              <div className="c"># Deploy to testnet</div>
              <div>brixs deploy testnet</div>
            </pre>
          </div>
        </div>
      </section>

      {/* FEATURE — capabilities matrix */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Capabilities</p>
          <h2>Everything the terminal can ship.</h2>
        </div>
        <div className="brx-fmatrix">
          {capabilities.map(([Ico, title, desc]) => (
            <div className="brx-fcell" key={title}>
              <span className="brx-fcell-ico"><Ico size={22} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — strip */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>The stack behind the command.</h2>
        </div>
        <div className="max-w-4xl mx-auto mt-12 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1115] shadow-2xl">
          <div className="bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="size-3 rounded-full bg-red-500/80"></div>
            <div className="size-3 rounded-full bg-yellow-500/80"></div>
            <div className="size-3 rounded-full bg-green-500/80"></div>
            <span className="ml-4 text-xs font-mono text-white/30 tracking-wider">Terminal</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto relative">
            <div className="flex flex-col gap-1">
              <div><span className="text-[#ff3b30]">$</span> <span className="text-white">brixs local start</span></div>
              <div className="text-white/40">Initializing local node...</div>
              <div className="text-[#00d395]">✓ Genesis block loaded [42ms]</div>
              <div className="text-[#00d395]">✓ Core contracts deployed [112ms]</div>
              <div className="text-[#00d395]">✓ Faucet running at http://127.0.0.1:5001</div>
              <div className="mt-2 text-white/80">Network ready. Listening on http://127.0.0.1:8545</div>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <div><span className="text-[#ff3b30]">$</span> <span className="text-white">brixs deploy src/Vault.sol --network localnet</span></div>
              <div className="text-white/40">Compiling 1 contract...</div>
              <div className="text-white/40">Deploying Vault.sol...</div>
              <div className="text-[#00d395]">✓ Transaction successful</div>
              <div className="text-white/80 mt-1">Contract Address: <span className="text-[#2b6aff]">0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta">
        <p className="brx-kicker" style={{ color: "rgba(255,255,255,.7)" }}><b /> The Brixs developer stack</p>
        <h2>
          Your infrastructure should <em>disappear.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
            Read CLI docs <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="mailto:hello@brixs.space" style={{ background: "#fff", color: "#06121f" }}>
            Talk to the team <Boxes size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
