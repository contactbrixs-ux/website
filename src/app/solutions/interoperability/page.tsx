import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Network,
  Activity,
  Layers,
  Database,
  Workflow,
  ShieldCheck,
  Globe2,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Interoperability | Brixs Chain",
  description: "Brixs connects fragmented blockchain ecosystems into one seamless execution and liquidity environment — cross-chain messaging, bridge abstraction, unified liquidity, and instant routing.",
  openGraph: {
    images: [{ url: "/assets/og/solutions-interoperability.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/solutions-interoperability.png"]
  }
};

const features: [typeof Network, string, string][] = [
  [Network, "Cross-chain messaging", "Chains exchange state proofs and instructions natively, so networks communicate instead of staying isolated."],
  [Workflow, "Bridge abstraction", "Auto bridge routing and smart path optimization mean users never think about bridges or manual chain switching."],
  [Database, "Unified liquidity", "One liquidity engine aggregates fragmented pools into a single infrastructure layer accessible across every chain."],
  [Activity, "Instant routing", "The routing layer selects the optimal chain path with minimal slippage and a single execution flow."],
  [Layers, "Shared execution", "Cross-chain liquidity, unified settlement, and a shared execution layer deliver capital efficiency across ecosystems."],
  [ShieldCheck, "Interoperability without compromise", "Proof verification, validator security, and double-execution prevention secure every cross-chain transfer."],
];

export default function InteroperabilityPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#00d395" } as React.CSSProperties}>
      {/* HERO — media */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Network size={14} /> Solutions · Interoperability
          </span>
          <h1>
            Liquidity should move like <em>information.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs connects fragmented blockchain ecosystems into one seamless
            execution and liquidity environment — cross-chain messaging, bridge
            abstraction, and instant routing, with no manual chain switching.
          </p>
          <div className="brx-ph-actions">
            <Link className="brx-btn accent" href="/solutions/architecture">
              Explore architecture <ArrowRight size={16} />
            </Link>
            <a className="brx-btn-line" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Build cross-chain apps <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="brx-h-media-frame">
          <video src="/assets/official/model-5.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / INTEROPERABILITY</span>
        </div>
      </section>

      {/* BAND — split */}
      <section className="brx-band-split" style={{ "--i": "#0f1115" } as React.CSSProperties}>
        <div>
          <p className="brx-eyebrow">The fragmentation problem</p>
          <h2>Blockchains were never designed to work together.</h2>
        </div>
        <p>
          Users manually bridge assets, switch wallets, pay multiple gas fees,
          and move capital inefficiently across ecosystems. Brixs replaces that
          fragmentation with unified liquidity, one execution path, gas
          abstraction, and instant routing across a single infrastructure layer.
        </p>
      </section>

      {/* FEATURES — pillars */}
      <section className="brx-section" style={{ "--i": "#0f1115" } as React.CSSProperties}>
        <div className="brx-section-head">
          <p className="brx-eyebrow">Interoperability layer</p>
          <h2>One network connected everywhere.</h2>
          <p>Native messaging, secure settlement, unified routing, and protocol communication in a single layer.</p>
        </div>
        <div className="brx-pillars">
          {features.map(([Ico, title, desc]) => (
            <div className="brx-pillar" key={title}>
              <span className="brx-pillar-ico"><Ico size={24} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — trio */}
      <section className="brx-section gray" style={{ "--i": "#0f1115" } as React.CSSProperties}>
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>Cross-chain, in the system.</h2>
        </div>
        <div className="max-w-4xl mx-auto mt-12 w-full overflow-hidden rounded-2xl border border-[#0f1115]/10 bg-[#0f1115]/5">
          <div className="grid grid-cols-3 border-b border-[#0f1115]/10 bg-[#0f1115]/5 text-sm font-medium text-[#0f1115] p-5">
            <div>Cross-Chain Feature</div>
            <div className="text-[#0f1115]/60">Traditional Bridges</div>
            <div className="text-[#00d395]">Brixs Interoperability</div>
          </div>
          {[
            ["Liquidity", "Fragmented across isolated pools", "Unified native liquidity layer"],
            ["Execution", "Multiple smart contract approvals", "Single unified transaction"],
            ["Security", "Third-party multi-sig validators", "Ethereum-backed finality proofs"],
            ["User Experience", "Manual network switching required", "Completely abstracted chain selection"]
          ].map(([feat, trad, brix], i) => (
            <div key={i} className="grid grid-cols-3 border-b border-white/5 p-5 text-sm hover:bg-white/[0.02] transition items-center">
              <div className="text-[#0f1115] font-medium">{feat}</div>
              <div className="text-[#0f1115]/50">{trad}</div>
              <div className="text-[#0f1115]">{brix}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section" style={{ "--i": "#0f1115" } as React.CSSProperties}>
        <div className="brx-section-head">
          <p className="brx-eyebrow">By the numbers</p>
          <h2>A single layer across every chain.</h2>
        </div>
        <div className="brx-metrics">
          {[["8", "Ecosystems connected"], ["5", "Steps to cross-chain execution"], ["51515", "Testnet chain ID"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* CTA — split */}
      <section className="brx-cta-split" style={{ "--i": "#0f1115" } as React.CSSProperties}>
        <div>
          <p className="brx-eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>The internet of value</p>
          <h2>
            Value needs <em>connected infrastructure.</em>
          </h2>
        </div>
        <div>
          <Link className="brx-btn" href="/solutions/architecture" style={{ background: "#fff", color: "#06121f" }}>
            See cross-chain architecture <Boxes size={16} />
          </Link>
          <a className="brx-btn-line" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ borderColor: "#06121f", color: "#06121f" }}>
            Read developer docs <Globe2 size={16} />
          </a>
        </div>
      </section>

      <BrxFooter />
    </main>
  );
}
