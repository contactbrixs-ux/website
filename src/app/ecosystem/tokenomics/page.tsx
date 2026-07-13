import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrxFooter from "@/components/BrxFooter";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Box,
  Coins,
  Diamond,
  Landmark,
  Layers,
  Network,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tokenomics | Brixs Chain",
  description: "BRX is the economic layer of Brixs Chain — powering validators, governance, ecosystem incentives, and long-term protocol sustainability across the network.",
  openGraph: {
    images: [{ url: "/assets/og/ecosystem-tokenomics.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/ecosystem-tokenomics.png"]
  }
};

const utility: [typeof Zap, string, string][] = [
  [Zap, "Network gas abstraction", "BRX powers transaction execution systems across the network."],
  [ShieldCheck, "Validator staking", "Validators stake BRX to secure the underlying infrastructure."],
  [Landmark, "Governance participation", "Token holders vote directly on protocol decisions."],
  [Box, "Builder incentives", "Developers receive ecosystem incentives paid in BRX."],
  [Banknote, "Treasury participation", "BRX drives protocol treasury growth mechanisms."],
  [Activity, "Liquidity coordination", "Cross-chain liquidity is coordinated and powered by BRX."],
];

// Real BRX supply allocation — preserved from source
const allocation = [
  ["Validators", "30%", "Rewards and incentives for the validators securing the chain."],
  ["Ecosystem Growth", "25%", "Campaigns, onboarding, and expanding the builder network."],
  ["Treasury", "20%", "Protocol-owned capital directed by on-chain governance."],
  ["Developer Grants", "10%", "Funding teams building core products and tooling."],
  ["Community Incentives", "10%", "Rewards aligning the community with the network."],
  ["Research Fund", "5%", "Protocol research, cryptography, and scaling work."],
];

export default function TokenomicsPage() {
  return (
    <main className="brx-page" style={{ "--accent": "#ffb800" } as React.CSSProperties}>
      {/* HERO */}
      <section className="brx-ph-hero">
        <div className="brx-rise">
          <span className="brx-ph-eyebrow">
            <Diamond size={14} /> Ecosystem · Tokenomics
          </span>
          <h1>
            Meet <em>BRX.</em>
          </h1>
          <p className="brx-ph-lead">
            BRX powers validators, governance systems, ecosystem incentives,
            protocol security, and long-term network sustainability across the
            Brixs economy — a token built to coordinate systems, not speculation.
          </p>
          <div className="brx-ph-actions">
            <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
              Read token docs <ArrowRight size={16} />
            </a>
            <Link className="brx-btn-line" href="/">
              Back to overview <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="brx-ph-stats">
            {[["30%", "Validators"], ["25%", "Ecosystem growth"], ["6", "Allocation buckets"]].map(([v, l]) => (
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
            <video src="/assets/official/model-11.mp4" autoPlay muted loop playsInline />
          </div>
          <div className="brx-ph-chip c1"><Coins size={18} /></div>
          <div className="brx-ph-chip c2"><Landmark size={18} /></div>
          <div className="brx-ph-readout">
            <span>LIVE NETWORK</span>
            <strong>BRX / TOKEN</strong>
            <i />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">By the numbers</p>
          <h2>Capital, coordinated by design.</h2>
        </div>
        <div className="brx-metrics">
          {[["30%", "Validator allocation"], ["45%", "Ecosystem & community"], ["5%", "Research fund"]].map(([v, l]) => (
            <div className="brx-metric" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* UTILITY & MECHANICS */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Utility & mechanics</p>
          <h2>Utility defines value.</h2>
          <p>BRX earns its role through the work it does across the protocol.</p>
        </div>
        <div className="brx-pillars">
          {utility.map(([Ico, title, desc]) => (
            <div className="brx-pillar" key={title}>
              <span className="brx-pillar-ico"><Ico size={24} /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Visual surface</p>
          <h2>The BRX economy in the system.</h2>
        </div>
        <div className="max-w-5xl mx-auto mt-12 w-full px-4">
          <div className="flex h-16 w-full overflow-hidden rounded-2xl border border-[#0f1115]/10 bg-[#0f1115]/5 shadow-2xl">
            <div className="bg-[#ffb800] h-full transition hover:opacity-80" style={{width: "30%"}} title="Validators (30%)"></div>
            <div className="bg-white/90 h-full border-l border-black/20 transition hover:opacity-80" style={{width: "25%"}} title="Ecosystem Growth (25%)"></div>
            <div className="bg-white/70 h-full border-l border-black/20 transition hover:opacity-80" style={{width: "20%"}} title="Treasury (20%)"></div>
            <div className="bg-[#0f1115]/50 h-full border-l border-black/20 transition hover:opacity-80" style={{width: "10%"}} title="Developer Grants (10%)"></div>
            <div className="bg-white/30 h-full border-l border-black/20 transition hover:opacity-80" style={{width: "10%"}} title="Community Incentives (10%)"></div>
            <div className="bg-[#0f1115]/10 h-full border-l border-black/20 transition hover:opacity-80" style={{width: "5%"}} title="Research Fund (5%)"></div>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-[#ffb800] font-mono text-2xl font-medium">30%</span>
              <span className="text-[#0f1115]/60 text-[10px] uppercase tracking-[0.2em]">Validators</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#0f1115] font-mono text-2xl font-medium">25%</span>
              <span className="text-[#0f1115]/60 text-[10px] uppercase tracking-[0.2em]">Ecosystem</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#0f1115]/80 font-mono text-2xl font-medium">20%</span>
              <span className="text-[#0f1115]/60 text-[10px] uppercase tracking-[0.2em]">Treasury</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#0f1115]/60 font-mono text-2xl font-medium">10%</span>
              <span className="text-[#0f1115]/60 text-[10px] uppercase tracking-[0.2em]">Grants</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#0f1115]/30 font-mono text-2xl font-medium">10%</span>
              <span className="text-[#0f1115]/60 text-[10px] uppercase tracking-[0.2em]">Community</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#0f1115]/10 font-mono text-2xl font-medium">5%</span>
              <span className="text-[#0f1115]/60 text-[10px] uppercase tracking-[0.2em]">Research</span>
            </div>
          </div>
        </div>
      </section>

      {/* ALLOCATION BAND */}
      <section className="brx-band">
        <p className="brx-kicker"><b /> Infrastructure allocation</p>
        <h2>Supply, allocated across the network.</h2>
        <p>
          BRX supply is split across the systems that secure and expand Brixs:
          Validators 30%, Ecosystem Growth 25%, Treasury 20%, Developer Grants
          10%, Community Incentives 10%, and a Research Fund at 5% — capital
          directed toward the network, not speculation.
        </p>
      </section>

      {/* ALLOCATION BREAKDOWN */}
      <section className="brx-section gray">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Allocation breakdown</p>
          <h2>Every share has a job.</h2>
        </div>
        <div className="brx-frows">
          {allocation.map(([name, pct, desc], i) => {
            const Ico = [ShieldCheck, Network, Banknote, Box, Coins, TrendingUp][i];
            return (
              <div className="brx-frow" key={name}>
                <small>{pct}</small>
                <p>
                  {name}
                  <span style={{ display: "block", fontSize: 14, fontWeight: 400, color: "#59606a", marginTop: 4, letterSpacing: 0 }}>{desc}</span>
                </p>
                <span className="brx-frow-ico"><Ico size={20} /></span>
              </div>
            );
          })}
        </div>
      </section>

      {/* STAKING FLOW */}
      <section className="brx-section">
        <div className="brx-section-head">
          <p className="brx-eyebrow">Staking architecture</p>
          <h2>Staking secures infrastructure.</h2>
        </div>
        <div className="brx-timeline">
          {[
            ["Step 1", "User stakes BRX", "Holders delegate BRX toward the validator set."],
            ["Step 2", "Validator receives delegation", "Stake strengthens a validator's weight in consensus."],
            ["Step 3", "Consensus participation", "The validator participates in securing network state."],
            ["Step 4", "Rewards generated", "Block and consensus rewards accrue to stakers."],
            ["Step 5", "Security increases", "More stake means a more secure, aligned network."],
          ].map(([phase, title, text]) => (
            <div className="brx-tstep" key={phase}>
              <b>{phase}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="brx-cta">
        <p className="brx-kicker" style={{ color: "rgba(255,255,255,.7)" }}><b /> The Brixs network</p>
        <h2>
          BRX powers <em>the future.</em>
        </h2>
        <nav>
          <a className="brx-btn accent" href="https://docs.brixs.space/" target="_blank" rel="noopener noreferrer">
            Read token docs <ArrowRight size={16} />
          </a>
          <a className="brx-btn" href="mailto:hello@brixs.space" style={{ background: "#fff", color: "#06121f" }}>
            Talk to the team <Layers size={16} />
          </a>
        </nav>
      </section>

      <BrxFooter />
    </main>
  );
}
