import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Server,
  Network,
  Layers,
  CheckCircle2,
  Database,
  Globe,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Infrastructure | Brixs Chain",
  description: "Brixs combines global RPC, sequencer, validator, and data-availability layers with Ethereum-native settlement into one unified protocol architecture.",
  openGraph: {
    images: [{ url: "/assets/og/developers-infrastructure.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/developers-infrastructure.png"]
  }
};

const layers: [typeof Server, string, string][] = [
  [Network, "RPC layer", "High-throughput request handling with load balancing, failover, and request optimization at the network edge."],
  [Layers, "Sequencer layer", "Transaction intake, batch construction, and deterministic ordering before execution begins."],
  [CheckCircle2, "Validator layer", "Distributed validator coordination, signature verification, and consensus across the network."],
  [Database, "Data availability layer", "Compressed, distributed storage with fast retrieval and permanent availability."],
  [Server, "Settlement layer", "Ethereum-native settlement anchoring every batch to a trust-minimized base layer."],
  [Globe, "Network topology", "Multi-region, geographically distributed infrastructure with continuous synchronization and global redundancy."],
];

export default function InfrastructurePage() {
  return (
    <main className="brx-page" style={{ "--accent": "#8c5afc" } as React.CSSProperties}>
      {/* HERO — split-media */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Server size={14} /> Developers · Infrastructure
          </span>
          <h1>
            Infrastructure built to operate at <em>internet scale.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs combines global node infrastructure, validator coordination,
            distributed execution, and Ethereum-native settlement into one
            unified protocol architecture.
          </p>
          <div className="brx-ph-actions">
            <Link className="brx-btn accent" href="/developers/consensus">
              Explore consensus <ArrowRight size={16} />
            </Link>
            <a className="brx-btn-line" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Network architecture <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="brx-ph-stats">
            {[["500k+", "API requests / sec"], ["8ms", "RPC latency"], ["99.999%", "Infra uptime"]].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-h-media-frame">
          <video src="/assets/official/model-7.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / INFRA</span>
        </div>
      </section>

      {/* FEATURE — infra layers */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Infrastructure stack</p>
          <h2>One network. Multiple infrastructure layers.</h2>
          <p>Every request flows through the same modular, distributed architecture — from RPC intake to Ethereum settlement.</p>
        </div>
        <div className="brx-fmatrix">
          {layers.map(([Ico, title, desc]) => (
            <div className="brx-fcell" key={title}>
              <span className="brx-fcell-ico"><Ico size={22} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CODE — node config */}
      <section className="brx-section gray">
        <div className="brx-codewrap">
          <div>
            <p className="brx-eyebrow">Run a node</p>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,50px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 18px" }}>
              Configured for the live testnet.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#59606a", maxWidth: 460 }}>
              Point your node at the Brixs testnet (chain ID 51515), pick a role,
              and join the RPC, sequencer, or validator layer. Finality lands in
              roughly two seconds.
            </p>
          </div>
          <div className="brx-code">
            <div className="brx-code-bar">
              <i /><i /><i />
              <span>node.config.ts</span>
            </div>
            <pre>
{`export const node = {
  network: "brixs-testnet",
  `}<span className="k">chainId</span>{`: 51515,
  role: "validator",       `}<span className="c">// rpc | sequencer | validator</span>{`
  rpc: "https://rpc-testnet.brixs.space",
  settlement: "ethereum",
  targets: {
    throughput: "500_000/s",  `}<span className="c">// API requests per second</span>{`
    latency: "8ms",           `}<span className="c">// RPC request latency</span>{`
    finality: "~2s",
    uptime: "99.999%",
  },
};

`}<span className="c"># start the node</span>{`
$ brixs node up --config node.config.ts
`}<span className="c"># check sync + telemetry</span>{`
$ brixs node status --live`}
            </pre>
          </div>
        </div>
      </section>

      {/* METRICS — chart format */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Network telemetry</p>
          <h2>Real-time Infrastructure Load.</h2>
        </div>
        <div className="brx-chart-container" style={{ display: 'flex', gap: '2rem', marginTop: '3rem', alignItems: 'flex-end', height: '350px', padding: '2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { label: 'Mon', value: 40, traffic: '1.2M' },
            { label: 'Tue', value: 65, traffic: '1.8M' },
            { label: 'Wed', value: 45, traffic: '1.3M' },
            { label: 'Thu', value: 85, traffic: '2.5M' },
            { label: 'Fri', value: 70, traffic: '2.1M' },
            { label: 'Sat', value: 95, traffic: '2.9M' },
            { label: 'Sun', value: 60, traffic: '1.7M' }
          ].map((data, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>{data.traffic}</div>
              <div style={{ width: '100%', background: 'rgba(140, 90, 252, 0.1)', height: '200px', borderRadius: '6px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: `${data.value}%`, background: 'linear-gradient(to top, #8c5afc, #a881fc)', borderRadius: '6px', transition: 'height 1s ease-out' }} />
              </div>
              <span style={{ color: '#88909b', fontSize: '0.85rem' }}>{data.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BAND */}
      <section className="brx-band">
        <p className="brx-kicker"><b /> Enterprise infrastructure</p>
        <h2>Applications are only as strong as infrastructure.</h2>
        <p>
          The internet economy depends on systems that process millions of
          transactions securely and globally. Brixs is engineered for high
          availability, low latency, distributed execution, and continuous uptime.
        </p>
      </section>

      {/* CTA */}
      <section className="brx-cta" style={{ background: "#8c5afc", color: "#06121f" }}>
        <p className="brx-kicker" style={{ color: "rgba(6,18,31,.7)" }}><b /> The Brixs network</p>
        <h2>
          Great systems run on invisible <em>infrastructure.</em>
        </h2>
        <nav>
          <Link className="brx-btn" href="/developers/consensus" style={{ background: "#06121f", color: "#fff" }}>
            Explore consensus <ArrowRight size={16} />
          </Link>
          <a className="brx-btn" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#06121f" }}>
            Read the docs <Activity size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
