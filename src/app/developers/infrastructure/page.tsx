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
  description:
    "Brixs combines global RPC, sequencer, validator, and data-availability layers with Ethereum-native settlement into one unified protocol architecture.",
};

const layers: [typeof Server, string, string][] = [
  [Network, "RPC layer", "High-throughput request handling with load balancing, failover, and request optimization at the network edge."],
  [Layers, "Sequencer layer", "Transaction intake, batch construction, and deterministic ordering before execution begins."],
  [CheckCircle2, "Validator layer", "Distributed validator coordination, signature verification, and consensus across the network."],
  [Database, "Data availability layer", "Compressed, distributed storage with fast retrieval and permanent availability."],
  [Server, "Settlement layer", "Ethereum-native settlement anchoring every batch to a trust-minimized base layer."],
  [Globe, "Network topology", "Multi-region, geographically distributed infrastructure with continuous synchronization and global redundancy."],
];

const gallery = [
  ["/assets/3d-assets/protocol-core.png", "Protocol core"],
  ["/assets/3d-assets/validator-mesh.png", "Validator mesh"],
  ["/assets/3d-assets/data-prism.png", "Data availability"],
];

export default function InfrastructurePage() {
  return (
    <main className="brx-page" style={{ "--accent": "#8c5afc" } as React.CSSProperties}>
      {/* HERO — mosaic */}
      <section className="brx-h-mosaic">
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

        <div className="brx-h-mosaic-grid">
          <figure>
            <video src="/assets/official/model-7.mp4" autoPlay muted loop playsInline />
          </figure>
          <figure>
            <Image src="/assets/3d-assets/secure-node.png" alt="Secure node" width={800} height={800} />
          </figure>
          <figure>
            <Image src="/assets/3d-assets/node-icon.png" alt="Network node" width={800} height={800} />
          </figure>
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

      {/* GALLERY — strip */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>The infrastructure, rendered.</h2>
        </div>
        <div className="brx-gstrip">
          {gallery.map(([src, cap]) => (
            <figure className="brx-shot" key={src}>
              <Image src={src} alt={cap} width={1200} height={900} />
              <figcaption>{cap}</figcaption>
            </figure>
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
