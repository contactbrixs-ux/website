import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cpu,
  Gauge,
  GitBranch,
  Layers,
  Network,
  Route,
  Timer,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Scalability | Brixs Chain",
  description: "Brixs scales horizontally through parallel execution — high throughput, fast finality, and low latency without bottlenecks or centralized constraints.",
  openGraph: {
    images: [{ url: "/assets/og/ecosystem-scalability.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/ecosystem-scalability.png"]
  }
};

const features: [typeof Zap, string, string][] = [
  [Layers, "Parallel execution", "Transactions touching independent state objects execute in parallel, eliminating network congestion."],
  [Cpu, "Native EVM model", "An EVM-compatible execution engine runs contracts without sequential bottlenecks."],
  [GitBranch, "Localized state locking", "Only the state a transaction touches is locked, keeping unrelated work moving."],
  [Route, "Dynamic load routing", "Work is routed across the network to balance load and avoid hot spots."],
  [Timer, "Sub-second propagation", "Blocks and state updates propagate across validators in under a second."],
  [Workflow, "Horizontal scaling", "The network grows by adding capacity, not by raising fees or centralizing control."],
];

export default function ScalabilityPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#00d395" } as React.CSSProperties}>
      {/* HERO — media */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Gauge size={14} /> Ecosystem · Scalability
          </span>
          <h1>
            Scale without <em>ceilings.</em>
          </h1>
          <p className="brx-ph-lead">
            Horizontal scaling via parallel execution. Brixs is engineered for
            infrastructure growth without bottlenecks or centralized constraints —
            high throughput, fast finality, and low latency by design.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/platform/overview" target="_blank" rel="noopener noreferrer">
              View architecture <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/developers/infrastructure">
              Explore infrastructure <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="brx-h-media-frame">
          <video src="/assets/official/model-10.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / SCALABILITY</span>
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Deterministic performance</p>
          <h2>Benchmarked, not promised.</h2>
        </div>
        <div className="brx-metrics">
          {[["~2,500 TPS", "Sustained throughput"], ["~2s", "Time to finality"], ["8s", "End-to-end latency"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* FEATURE — rows */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">How it scales</p>
          <h2>Parallel by design.</h2>
          <p>
            Unlike chains that process transactions sequentially, Brixs runs a
            native EVM execution model where independent work moves at once.
          </p>
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

      {/* GALLERY — mosaic */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>Scaling in the system.</h2>
        </div>
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-2 rounded-[2rem] border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] p-8 flex flex-col justify-end min-h-[300px] relative overflow-hidden group transition hover:border-[#0f1115]/20">
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d395]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"/>
            <h3 className="text-2xl text-[#0f1115] font-medium mb-3 relative z-10">Throughput Scaling</h3>
            <p className="text-[#0f1115]/60 relative z-10">Linear scaling through localized state locking and dynamic routing.</p>
          </div>
          <div className="rounded-[2rem] border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] p-8 flex flex-col justify-end min-h-[300px] relative overflow-hidden group transition hover:border-[#0f1115]/20">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#00d395]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"/>
            <h3 className="text-xl text-[#0f1115] font-medium mb-3 relative z-10">Parallel Execution</h3>
            <p className="text-[#0f1115]/60 relative z-10">Independent state moves simultaneously without global bottlenecks.</p>
          </div>
          <div className="md:col-span-full lg:col-span-3 rounded-[2rem] border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] p-8 flex flex-col justify-end min-h-[200px] relative overflow-hidden group transition hover:border-[#0f1115]/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d395]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"/>
            <h3 className="text-xl text-[#0f1115] font-medium mb-3 relative z-10">Gas Optimization</h3>
            <p className="text-[#0f1115]/60 relative z-10">Abstracted sub-cent fees via smart routing logic.</p>
          </div>
        </div>
      </section>

      {/* BAND — split */}
      <section className="brx-band-split" style={{ "--i": "#0f1115" } as React.CSSProperties}>
        <div>
          <p className="brx-eyebrow">No bottlenecks</p>
          <h2>Growth without congestion.</h2>
        </div>
        <p>
          Transactions touching independent state objects execute in parallel,
          entirely eliminating network congestion. Localized state locking,
          dynamic load routing, and sub-second propagation let the network add
          capacity horizontally — so throughput scales without raising fees or
          centralizing control.
        </p>
      </section>

      {/* CTA */}
      <section className="brx-cta" style={{ background: "#00d395", color: "#06121f" }}>
        <p className="brx-kicker" style={{ color: "rgba(6,18,31,.7)" }}><b /> The Brixs network</p>
        <h2>
          Build at global <em>scale.</em>
        </h2>
        <nav>
          <a className="brx-btn" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ background: "#06121f", color: "#fff" }}>
            Start building <ArrowRight size={16} />
          </a>
          <Link className="brx-btn" href="/ecosystem/tokenomics" style={{ background: "#fff", color: "#06121f" }}>
            Explore tokenomics <Boxes size={16} />
          </Link>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
