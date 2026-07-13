import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Network,
  Server,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consensus | Brixs Chain",
  description: "BrixsBFT coordinates validators, aggregates signatures, and delivers deterministic ~2s finality across the Brixs network topology.",
  openGraph: {
    images: [{ url: "/assets/og/developers-consensus.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/developers-consensus.png"]
  }
};

const features: [typeof Server, string, string][] = [
  [Network, "Validator communication", "Validators exchange messages continuously over a P2P mesh to stay synchronized."],
  [Layers, "Signature aggregation", "2/3+ threshold signatures are collected and aggregated into each block."],
  [Activity, "Consensus rounds", "Deterministic rounds order transactions and reach agreement fast."],
  [Server, "Block proposal system", "The sequencer proposes ordered batches for validator verification."],
  [Zap, "Finality engine", "Confirmed blocks reach permanent finality without long wait times."],
  [ShieldCheck, "Byzantine fault tolerance", "The network keeps agreement even when validators misbehave."],
];

const rounds = [
  ["Proposal", "Batch enters", "A transaction batch is deterministically ordered and proposed by the sequencer."],
  ["Validation", "Validators receive", "Validators receive the batch and verify execution outputs against state."],
  ["Signature", "Signatures aggregated", "Each validator signs; 2/3+ threshold signatures are aggregated together."],
  ["Finalization", "Block finalized", "The block is committed to the chain with permanent, deterministic finality."],
  ["Settlement", "Anchored to Ethereum", "Finalized state is submitted to Ethereum for a durable trust layer."],
];

export default function ConsensusPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#8c5afc" } as React.CSSProperties}>
      {/* HERO — split-media */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Activity size={14} /> Developers · Consensus
          </span>
          <h1>
            Trust begins with <em>consensus.</em>
          </h1>
          <p className="brx-ph-lead">
            BrixsBFT coordinates validators, secures execution, and guarantees
            deterministic finality across the network topology — batches are
            ordered, verified, signed, and finalized in a continuous round.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read validator docs <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/developers/security">
              Explore security <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="brx-ph-stats">
            {[["~2s", "Deterministic finality"], ["67/67", "Validator signatures"], ["~2,500", "Network TPS"]].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-h-media-frame">
          <video src="/assets/official/model-6.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / BFT</span>
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">By the numbers</p>
          <h2>Engineered for agreement.</h2>
          <p>Speed means nothing without agreement — BrixsBFT delivers both.</p>
        </div>
        <div className="brx-metrics">
          {[["~2s", "Consensus round & finality"], ["~20ms", "Validator communication"], ["2/3+", "Signature threshold"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Consensus engine</p>
          <h2>Distributed trust across validators.</h2>
          <p>Every block moves through the same deterministic, verifiable machinery.</p>
        </div>
        <div className="brx-frows">
          {features.map(([Ico, title, desc], i) => (
            <div className="brx-frow" key={title}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <p>
                {title}
                <span style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#59606a", marginTop: 4, letterSpacing: 0 }}>{desc}</span>
              </p>
              <span className="brx-frow-ico"><Ico size={20} /></span>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE — consensus round stages */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The consensus round</p>
          <h2>From batch to final block.</h2>
        </div>
        <div className="brx-timeline">
          {rounds.map(([phase, title, text]) => (
            <div className="brx-tstep" key={phase}>
              <b>{phase}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — trio */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>Consensus in the system.</h2>
        </div>
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] text-center relative group transition hover:border-white/30">
            <div className="size-16 rounded-full border border-[#0f1115]/20 bg-[#0f1115]/5 flex items-center justify-center text-[#8c5afc] group-hover:scale-110 transition-transform">
              <Network size={28} />
            </div>
            <h3 className="text-[#0f1115] font-medium">Validator Mesh</h3>
            <p className="text-[#0f1115]/60 text-sm">Highly interconnected nodes coordinating rounds.</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] text-center relative group transition hover:border-white/30">
            <div className="size-16 rounded-full border border-[#0f1115]/20 bg-[#0f1115]/5 flex items-center justify-center text-[#8c5afc] group-hover:scale-110 transition-transform">
              <Server size={28} />
            </div>
            <h3 className="text-[#0f1115] font-medium">Consensus Node</h3>
            <p className="text-[#0f1115]/60 text-sm">Participates in state validation.</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] text-center relative group transition hover:border-white/30">
            <div className="size-16 rounded-full border border-[#0f1115]/20 bg-[#0f1115]/5 flex items-center justify-center text-[#8c5afc] group-hover:scale-110 transition-transform">
              <Shield size={28} />
            </div>
            <h3 className="text-[#0f1115] font-medium">Secure Finality</h3>
            <p className="text-[#0f1115]/60 text-sm">Deterministic execution locks and settlement.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta">
        <p className="brx-kicker" style={{ color: "rgba(255,255,255,.7)" }}><b /> The Brixs network</p>
        <h2>
          Every block depends on <em>consensus.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
            Read validator docs <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="/developers/security" style={{ background: "#fff", color: "#06121f" }}>
            Explore security <Shield size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
