import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Cpu,
  Server,
  ShieldCheck,
  Database,
  Boxes,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Architecture | Brixs Chain",
  description: "Brixs is an Ethereum-native Layer 2 that unifies execution, settlement, liquidity, and user experience into one scalable infrastructure stack.",
  openGraph: {
    images: [{ url: "/assets/og/solutions-architecture.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/solutions-architecture.png"]
  }
};

const layers: [string, string, typeof Layers][] = [
  ["01", "Application Layer — where products and users meet the network.", Boxes],
  ["02", "Execution Layer — parallel, conflict-aware transaction execution.", Cpu],
  ["03", "Liquidity Layer — unified vault and cross-chain routing.", Network],
  ["04", "Infrastructure Layer — sequencing, RPC, and the public surface.", Server],
  ["05", "Settlement Layer — every state transition finalized on Ethereum.", ShieldCheck],
];

export default function ArchitecturePage() {
  return (
    <main className="brx-page" style={{ "--accent": "#00d395" } as React.CSSProperties}>
      {/* HERO */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Layers size={14} /> Solutions · Architecture
          </span>
          <h1>
            The infrastructure layer beneath <em>on-chain systems.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs is an Ethereum-native Layer 2 built to unify execution,
            liquidity, and user experience into one scalable infrastructure
            stack — removing the complexity of fragmented networks.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read technical docs <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/">
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="brx-h-media-frame">
          <video src="/assets/official/model-3.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / ARCHITECTURE</span>
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-metrics">
          {[["10,000+", "TPS throughput"], ["~2s", "Finality"], ["$0.0001", "Gas cost"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE LAYERS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The stack</p>
          <h2>Five layers. One unified execution system.</h2>
          <p>Execution, settlement, data availability, wallet abstraction, and liquidity routing in one stack.</p>
        </div>
        <div className="brx-frows">
          {layers.map(([n, title, Ico]) => {
            const [head, ...rest] = title.split(" — ");
            return (
              <div className="brx-frow" key={n}>
                <small>{n}</small>
                <p>
                  {head}
                  <span style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#59606a", marginTop: 4, letterSpacing: 0 }}>{rest.join(" — ")}</span>
                </p>
                <span className="brx-frow-ico"><Ico size={20} /></span>
              </div>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Inside the engine</p>
          <h2>Parallel execution, optimized for cost.</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-5xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#0f1115]/10 bg-[rgba(255,255,255,.03)] p-8 rounded-[1.5rem] flex flex-col items-center text-center gap-4 transition hover:-translate-y-1 hover:bg-[#0f1115]/5">
              <span className="grid size-14 place-items-center rounded-full bg-[#0f1115]/5 text-[#00d395] border border-[#0f1115]/10"><Cpu size={24}/></span>
              <h3 className="text-lg text-[#0f1115] font-medium">Brixs Execution Engine</h3>
              <p className="text-sm leading-relaxed text-[#0f1115]/60">Core environment handling advanced smart contract logic and isolated state.</p>
            </div>
            <div className="border border-[#0f1115]/10 bg-[rgba(255,255,255,.03)] p-8 rounded-[1.5rem] flex flex-col items-center text-center gap-4 transition hover:-translate-y-1 hover:bg-[#0f1115]/5">
              <span className="grid size-14 place-items-center rounded-full bg-[#0f1115]/5 text-[#00d395] border border-[#0f1115]/10"><Layers size={24}/></span>
              <h3 className="text-lg text-[#0f1115] font-medium">Parallel Transaction Batching</h3>
              <p className="text-sm leading-relaxed text-[#0f1115]/60">Simultaneous processing of independent state transitions without conflict.</p>
            </div>
            <div className="border border-[#0f1115]/10 bg-[rgba(255,255,255,.03)] p-8 rounded-[1.5rem] flex flex-col items-center text-center gap-4 transition hover:-translate-y-1 hover:bg-[#0f1115]/5">
              <span className="grid size-14 place-items-center rounded-full bg-[#0f1115]/5 text-[#00d395] border border-[#0f1115]/10"><Network size={24}/></span>
              <h3 className="text-lg text-[#0f1115] font-medium">Optimized Gas Routing</h3>
              <p className="text-sm leading-relaxed text-[#0f1115]/60">Dynamic fee market routing ensuring near-zero costs for users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BAND */}
      <section className="brx-band dark">
        <p className="brx-kicker"><b /> Ethereum-secured</p>
        <h2>Ethereum secures everything.</h2>
        <p>
          Every state transition is finalized on Ethereum for maximum trust and
          decentralization — inheriting the most robust cryptographic security
          model in the world, with fast ordering and deterministic execution.
        </p>
      </section>

      {/* CTA */}
      <section className="brx-cta">
        <p className="brx-kicker" style={{ color: "rgba(255,255,255,.7)" }}><b /> Built for what comes next</p>
        <h2>
          Great products need <em>invisible infrastructure.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
            Build on Brixs <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="mailto:hello@brixs.space" style={{ background: "#fff", color: "#06121f" }}>
            Talk to the team <Database size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
