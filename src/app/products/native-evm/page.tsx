import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Cpu,
  MemoryStick,
  Server,
  Shield,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Native EVM | Brixs Chain",
  description: "Native EVM is an object-centric, multi-threaded execution environment engineered to eliminate the state bottlenecks limiting modern infrastructure.",
  openGraph: {
    images: [{ url: "/assets/og/products-native-evm.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/products-native-evm.png"]
  }
};

const features: [typeof Zap, string, string][] = [
  [Zap, "Parallel execution", "Transactions touching independent objects execute concurrently without locks."],
  [Shield, "Hardware enclaves", "Formally verified opcode execution ensuring deterministic security."],
  [Server, "Optimized memory", "Predictable resource allocation bypassing traditional cache bottlenecks."],
  [Code, "EVM compatible", "Deploy existing Ethereum contracts natively with zero migration friction."],
];

export default function NativeEVMPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#2b6aff" } as React.CSSProperties}>
      {/* HERO — split-media */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Cpu size={14} /> Products · Native EVM
          </span>
          <h1>
            Compute built for global <em>scale.</em>
          </h1>
          <p className="brx-ph-lead">
            Native EVM is an object-centric, multi-threaded execution environment
            engineered to eliminate the state bottlenecks limiting modern
            infrastructure.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="/cli">
              Initialize project <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/">
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="brx-ph-stats">
            {[["~2,500", "Native EVM TPS"], ["0", "Migration friction"], ["100%", "Solidity support"]].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-h-media-frame">
          <video src="/assets/official/model-1.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / EVM</span>
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Performance</p>
          <h2>Performance beyond sequential machines.</h2>
          <p>
            Throughput scales linearly with node hardware. No artificial gas
            limits. No shared state congestion.
          </p>
        </div>
        <div className="brx-metrics">
          {[["~2,500 TPS", "Native EVM throughput"], ["15 TPS", "Ethereum EVM baseline"], ["Zero", "Migration friction"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* FEATURES — matrix */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Technical architecture</p>
          <h2>Object-centric state.</h2>
        </div>
        <div className="brx-fmatrix">
          {features.map(([Ico, title, desc]) => (
            <div className="brx-fcell" key={title}>
              <span className="brx-fcell-ico"><Ico size={22} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CODE */}
      <section className="brx-section">
        <div className="brx-codewrap">
          <div>
            <p className="brx-eyebrow">Execution engine</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,46px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 24px" }}>
              Transactions, resolved in parallel.
            </h2>
            <div className="brx-fsplit-list">
              <div className="brx-fsplit-item">
                <b>Parallel state locking</b>
                <p>Independent objects are resolved and locked so unrelated transactions never contend.</p>
              </div>
              <div className="brx-fsplit-item">
                <b>Deterministic commitment</b>
                <p>Mutations commit through a verified path, keeping execution safe and reproducible.</p>
              </div>
            </div>
          </div>
          <div className="brx-code">
            <div className="brx-code-bar">
              <i /><i /><i /><span>execution_engine.rs</span>
            </div>
            <pre>
              <div>pub fn execute_transaction(</div>
              <div>{"    ctx: &mut ExecutionContext,"}</div>
              <div>{"    tx: Transaction"}</div>
              <div>{") -> Result<ExecutionResult> {"}</div>
              <div className="c">    // 1. Resolve objects</div>
              <div>{"    let objects = ctx.resolve_dependencies(&tx.inputs)?;"}</div>
              <div className="c">    // 2. Parallel state locking</div>
              <div>{"    let _locks = StateManager::lock_objects(&objects);"}</div>
              <div className="c">    // 3. VM Execution</div>
              <div>{"    let result = native-evm::run(&tx.payload, &objects)?;"}</div>
              <div className="c">    // 4. State commitment</div>
              <div>{"    ctx.commit_mutations(result.mutations);"}</div>
              <div>{"    Ok(result)"}</div>
              <div>{"}"}</div>
            </pre>
          </div>
        </div>
      </section>

      {/* GALLERY — mosaic */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>Native EVM in the system.</h2>
        </div>
        <div className="max-w-5xl mx-auto mt-12 overflow-x-auto rounded-2xl border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] shadow-2xl">
          <table className="w-full text-left min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-[#0f1115]/10 bg-[#0f1115]/5 text-xs uppercase tracking-[0.2em] text-[#0f1115]/60">
                <th className="p-6 font-medium">Metric</th>
                <th className="p-6 font-medium">Standard EVM</th>
                <th className="p-6 font-medium text-[#2b6aff]">Brixs Native EVM</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-[#0f1115]/10 transition hover:bg-[#0f1115]/5">
                <td className="p-6 text-[#0f1115]/60 font-medium">Execution Model</td>
                <td className="p-6 text-[#0f1115]">Single-threaded / Sequential</td>
                <td className="p-6 text-[#0f1115] font-medium">Multi-threaded / Parallel</td>
              </tr>
              <tr className="border-b border-[#0f1115]/10 transition hover:bg-[#0f1115]/5">
                <td className="p-6 text-[#0f1115]/60 font-medium">State Locks</td>
                <td className="p-6 text-[#0f1115]">Global lock per block</td>
                <td className="p-6 text-[#0f1115] font-medium">Localized per-object locks</td>
              </tr>
              <tr className="border-b border-[#0f1115]/10 transition hover:bg-[#0f1115]/5">
                <td className="p-6 text-[#0f1115]/60 font-medium">Throughput Limit</td>
                <td className="p-6 text-[#0f1115]">~15-30 TPS</td>
                <td className="p-6 text-[#0f1115] font-medium">Hardware-bound (~2,500+ TPS)</td>
              </tr>
              <tr className="transition hover:bg-[#0f1115]/5">
                <td className="p-6 text-[#0f1115]/60 font-medium">Contract Compatibility</td>
                <td className="p-6 text-[#0f1115]">Native Solidity</td>
                <td className="p-6 text-[#0f1115] font-medium">100% Native Solidity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta" style={{ background: "#2b6aff", color: "#06121f" }}>
        <p className="brx-kicker"><b /> The Brixs network</p>
        <h2>
          Deploy on <em>Native EVM.</em>
        </h2>
        <nav>
          <a className="brx-btn" href="/cli">
            Initialize project <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#06121f" }}>
            Read documentation <MemoryStick size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
