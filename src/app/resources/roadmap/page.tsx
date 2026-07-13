import type { Metadata } from "next";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Map,
  Layers,
  Server,
  Code,
  Rocket,
  Globe,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap | Brixs Chain",
  description: "The Brixs roadmap: a multi-stage plan spanning protocol foundation, testnet development, developer ecosystem, infrastructure scaling, mainnet launch, and global adoption.",
  openGraph: {
    images: [{ url: "/assets/og/resources-roadmap.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/resources-roadmap.png"]
  }
};

// Every roadmap phase — timeframe, milestone, description. Preserved from the source.
const phases: [string, string, string][] = [
  [
    "Stage 1 · 2026",
    "Phase 1 — Protocol Foundation",
    "Initial protocol architecture development and blockchain infrastructure engineering: architecture design, smart contract deployment, Ethereum Layer 2 integration, core validator architecture, and the initial execution engine.",
  ],
  [
    "Stage 2",
    "Phase 2 — Internal Testnet Development",
    "Live internal testing across the stack: smart contract testing (92%), validator simulation (87%), RPC infrastructure (90%), and bridge testing (80%).",
  ],
  [
    "Stage 3",
    "Phase 3 — Developer Ecosystem",
    "Building for developers with SDK development, a CLI tool release, a documentation system, and a dedicated developer testing environment.",
  ],
  [
    "Stage 4",
    "Phase 4 — Infrastructure Expansion",
    "Scaling protocol infrastructure globally: RPC network deployment, global node infrastructure, bridge infrastructure, monitoring systems, validator expansion, and cross-chain architecture.",
  ],
  [
    "Stage 5 · 2027",
    "Phase 5 — Public Testnet",
    "Opening Brixs to builders worldwide: developers invited, ~2,500 contracts deployed, live testnet transactions, and a validator set of 15+.",
  ],
  [
    "Stage 6",
    "Phase 6 — Ecosystem Growth",
    "Building the ecosystem around Brixs: developer grants, startup funding, hackathons, community programs, builder incentives, and educational programs.",
  ],
  [
    "Stage 7",
    "Phase 7 — Mainnet Launch",
    "Mainnet infrastructure deployment with security audits, validator finalization, bridge deployment, token infrastructure, governance activation, and liquidity infrastructure.",
  ],
  [
    "2028",
    "Cross-chain liquidity infrastructure",
    "Cross-chain liquidity infrastructure connecting Brixs to the wider on-chain economy.",
  ],
  [
    "2029",
    "Global validator network",
    "A globally distributed validator network securing the chain at scale.",
  ],
  [
    "2030",
    "Autonomous AI-native infrastructure",
    "Autonomous, AI-native blockchain infrastructure as the long-term vision for the network.",
  ],
];

const marqueeWords = [
  "Foundation",
  "Testnet",
  "Developer ecosystem",
  "Infrastructure",
  "Mainnet",
  "Global scale",
];

const themes: [string, string, string][] = [
  ["01", "Protocol development", "Core architecture, execution engine, and consensus engineered from the ground up."],
  ["02", "Infrastructure scaling", "RPC network, global nodes, bridges, and monitoring for worldwide reach."],
  ["03", "Developer ecosystem", "SDK, CLI, documentation, and testing environments for builders."],
  ["04", "Security & audits", "Security audits and validator finalization ahead of mainnet."],
  ["05", "Governance activation", "On-chain governance and community-directed network evolution."],
  ["06", "Global adoption", "Grants, hackathons, and programs driving long-term ecosystem growth."],
];

export default function RoadmapPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#ff3b30" } as React.CSSProperties}>
      {/* HERO — media */}
      <section className="brx-h-media">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Map size={14} /> Resources · Roadmap
          </span>
          <h1>
            Building it, <em>stage by stage.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs is executing a multi-stage roadmap focused on protocol
            development, infrastructure scaling, ecosystem growth, and global
            adoption — the institutional-grade infrastructure layer for
            blockchain.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              View development plan <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/">
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="brx-h-media-frame">
          <video src="/assets/official/model-13.mp4" autoPlay muted loop playsInline />
          <span className="brx-tag">BRX / ROADMAP</span>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="brx-marquee" aria-hidden="true">
        <div className="brx-marquee-track">
          {Array.from({ length: 3 }).flatMap((_, k) =>
            marqueeWords.map((w, i) => (
              <span key={`${k}-${i}`}>{w} <i>/</i></span>
            )),
          )}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The plan</p>
          <h2>Protocol development in carefully planned stages.</h2>
          <p>Every phase, from foundation to an autonomous AI-native network.</p>
        </div>
        <div className="brx-timeline">
          {phases.map(([timeframe, milestone, desc]) => (
            <div className="brx-tstep" key={milestone}>
              <b>{timeframe}</b>
              <h3>{milestone}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THEMES */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Roadmap themes</p>
          <h2>What every stage advances.</h2>
        </div>
        <div className="brx-frows">
          {themes.map(([n, title, desc], i) => {
            const Ico = [Cpu, Server, Code, ShieldCheck, Layers, Globe][i];
            return (
              <div className="brx-frow" key={n}>
                <small>{n}</small>
                <p>
                  {title}
                  <span style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#59606a", marginTop: 4, letterSpacing: 0 }}>{desc}</span>
                </p>
                <span className="brx-frow-ico"><Ico size={20} /></span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta">
        <p className="brx-kicker" style={{ color: "rgba(255,255,255,.7)" }}><b /> The Brixs network</p>
        <h2>
          Brixs is <em>building it now.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
            Read the docs <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="mailto:hello@brixs.space" style={{ background: "#fff", color: "#06121f" }}>
            Talk to the team <Rocket size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
