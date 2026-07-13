import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Brain,
  CheckCircle2,
  Coins,
  GitBranch,
  Network,
  RefreshCw,
  ScrollText,
  ShieldCheck,
  Users,
  Vote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Governance | Brixs Chain",
  description: "Brixs governance turns proposals, validator review, and community votes into a transparent, on-chain process for evolving the network.",
  openGraph: {
    images: [{ url: "/assets/og/ecosystem-governance.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/ecosystem-governance.png"]
  }
};

const pipeline = [
  ["01", "Proposal creation", "Anyone in the network can submit a structured improvement proposal."],
  ["02", "Community review", "Open discussion and feedback from builders, validators, and holders."],
  ["03", "Protocol discussion", "Technical review of the change against the chain architecture."],
  ["04", "Validator verification", "Validators verify feasibility, safety, and network impact."],
  ["05", "Vote execution", "On-chain voting with transparent, verifiable tallies."],
  ["06", "Protocol upgrade", "Approved changes ship to the network without a disruptive fork."],
];

const principles: [typeof ShieldCheck, string, string][] = [
  [ScrollText, "Transparency", "Every proposal, vote, and tally is recorded and visible on-chain."],
  [ShieldCheck, "Security", "Changes pass validator verification before they can execute."],
  [Brain, "Collective intelligence", "Decisions reflect the whole network, not a single team."],
  [Network, "Decentralization", "No central party can force a protocol change through."],
  [RefreshCw, "Upgradeability", "The protocol evolves continuously without hard forks."],
  [Users, "Community ownership", "Holders and builders steer the roadmap together."],
];

const cycle = [
  ["Phase A", "Infrastructure proposal", "A change is proposed with clear scope and rationale."],
  ["Phase B", "Validator review", "Validators assess technical feasibility and risk."],
  ["Phase C", "Community approval", "The network votes on-chain and the result is final."],
  ["Phase D", "Implementation", "The upgrade is staged, tested, and prepared for release."],
  ["Phase E", "Protocol evolution", "The network adopts the change and the cycle repeats."],
];

const treasury: [typeof Coins, string, string][] = [
  [Coins, "Developer grants", "Funding teams building core products and tooling."],
  [Boxes, "Infrastructure funding", "Nodes, RPC, and the public network surface."],
  [Brain, "Research funding", "Protocol research, cryptography, and scaling work."],
  [ShieldCheck, "Validator rewards", "Incentives for the validators securing the chain."],
  [Network, "Ecosystem growth", "Campaigns, events, and onboarding new builders."],
];

const related = [
  ["Tokenomics", "Deflationary mechanics & utility", "/ecosystem/tokenomics"],
  ["Scalability", "High-throughput performance", "/ecosystem/scalability"],
  ["Vision", "The long-term thesis", "/resources/vision"],
  ["Consensus", "BrixsBFT & network topology", "/developers/consensus"],
];

export default function GovernancePage() {
  return (
    <main className="brx-page" style={{ "--accent": "#2b6aff" } as React.CSSProperties}>
      {/* HERO */}
      <section className="brx-ph-hero">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Vote size={14} /> Ecosystem · Governance
          </span>
          <h1>
            Govern the <em>protocol.</em>
          </h1>
          <p className="brx-ph-lead">
            Brixs governance turns proposals, validator review, and community
            votes into one transparent, on-chain process for evolving the
            network — no central party, no hidden decisions.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read governance docs <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/">
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="brx-ph-stats">
            {[["24", "Active proposals"], ["1.2M", "Community votes"], ["8,405", "Validator approvals"]].map(([v, l]) => (
              <div className="brx-stat" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brx-ph-art" aria-hidden="true">
          <div className="brx-ph-grid" />
          <div className="brx-ph-orbit o1" />
          <div className="brx-ph-orbit o2" />
          <div className="brx-ph-orbit o3" />
          <div className="brx-ph-disc">
            <video src="/assets/official/model-9.mp4" autoPlay muted loop playsInline />
          </div>
          <div className="brx-ph-chip c1"><Vote size={18} /></div>
          <div className="brx-ph-chip c2"><Network size={18} /></div>
          <div className="brx-ph-readout">
            <span>LIVE NETWORK</span>
            <strong>BRX / GOVERNANCE</strong>
            <i />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="brx-marquee" aria-hidden="true">
        <div className="brx-marquee-track">
          {Array.from({ length: 3 }).flatMap((_, k) =>
            ["Transparency", "Decentralization", "Collective intelligence", "Upgradeable", "Community owned"].map((w, i) => (
              <span key={`${k}-${i}`}>{w} <i>/</i></span>
            )),
          )}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="brx-band">
        <p className="brx-kicker"><b /> On-chain by default</p>
        <h2>Protocols should govern themselves.</h2>
        <p>
          Traditional companies decide centrally. Brixs makes protocol evolution
          a collective, transparent, and verifiable process owned by the network.
        </p>
      </section>

      {/* DECISION PIPELINE */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Decision pipeline</p>
          <h2>From proposal to protocol upgrade.</h2>
          <p>Every change moves through the same six transparent, on-chain stages.</p>
        </div>
        <div className="brx-frows">
          {pipeline.map(([n, title, desc], i) => {
            const Ico = [ScrollText, Users, GitBranch, ShieldCheck, Vote, CheckCircle2][i];
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

      {/* PRINCIPLES */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Governance principles</p>
          <h2>What the system protects.</h2>
        </div>
        <div className="brx-pillars">
          {principles.map(([Ico, title, desc]) => (
            <div className="brx-pillar" key={title}>
              <span className="brx-pillar-ico"><Ico size={24} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">By the numbers</p>
          <h2>A treasury directed by votes.</h2>
        </div>
        <div className="brx-metrics">
          {[["$42M", "Treasury directed"], ["15", "Network upgrades shipped"], ["51515", "Testnet chain ID"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* EVOLUTION CYCLE */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">The evolution cycle</p>
          <h2>How an upgrade comes together.</h2>
        </div>
        <div className="brx-timeline">
          {cycle.map(([phase, title, text]) => (
            <div className="brx-tstep" key={phase}>
              <b>{phase}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TREASURY */}
      <section className="brx-section">
        <div className="brx-fsplit">
          <div className="brx-fsplit-title">
            <p className="brx-eyebrow">Treasury</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,46px)", lineHeight: 0.95, letterSpacing: "-0.05em", margin: "16px 0 0" }}>
              Capital, allocated by the network.
            </h2>
          </div>
          <div className="brx-fsplit-list">
            {treasury.map(([Ico, title, desc]) => (
              <div className="brx-fsplit-item" key={title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: 40, height: 40, display: "grid", placeItems: "center", border: "2px solid #0f1115", color: "var(--accent)" }}>
                  <Ico size={18} />
                </span>
                <div>
                  <b>{title}</b>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>Governance in the system.</h2>
        </div>
        <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-4 px-5">
          {["Proposal Drafted", "Validator Review", "Community Vote", "On-Chain Upgrade"].map((step, i, arr) => (
            <div key={step} className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex-1 w-full border border-[#0f1115]/10 bg-[rgba(15,17,21,.02)] p-6 rounded-2xl text-center flex flex-col gap-3 transition hover:bg-[#0f1115]/5 hover:-translate-y-1">
                <span className="text-[#2b6aff] font-mono text-[10px] uppercase tracking-[0.2em] bg-[#2b6aff]/10 px-2 py-1 rounded-full w-fit mx-auto">Phase 0{i + 1}</span>
                <span className="text-[#0f1115] font-medium text-lg">{step}</span>
              </div>
              {i < arr.length - 1 && (
                <div className="text-[#0f1115]/20 rotate-90 md:rotate-0 flex-shrink-0">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Keep exploring</p>
          <h2>More in the ecosystem.</h2>
        </div>
        <div className="brx-related-grid">
          {related.map(([title, sub, href]) => (
            <Link className="brx-related" key={href} href={href}>
              <div>
                <b>{title}</b>
                <span>{sub}</span>
              </div>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta">
        <p className="brx-kicker" style={{ color: "rgba(255,255,255,.7)" }}><b /> The Brixs network</p>
        <h2>
          Brixs governs <em>itself.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
            Read governance docs <ArrowRight size={16} />
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
