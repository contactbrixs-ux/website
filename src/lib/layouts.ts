// Per-page section recipes. Each page composes a DIFFERENT ordered set of
// blocks/variants so no two of the 31 pages share the same structure, while
// every block still pulls real content from lib/site.ts.

export type Block =
  | { type: "hero"; variant: "split-art" | "split-media" | "centered" | "stage" | "mosaic"; flip?: boolean }
  | { type: "band"; variant: "accent" | "dark" | "split" | "split-accent" | "marquee" }
  | { type: "feature"; variant: "cards" | "rows" | "matrix" | "split" | "pillars" }
  | { type: "gallery"; variant: "trio" | "feature" | "mosaic" | "band" | "strip" }
  | { type: "metrics" }
  | { type: "code"; file?: string; lines: string[] }
  | { type: "timeline"; steps: { phase: string; title: string; text: string }[] }
  | { type: "related" }
  | { type: "cta"; variant: "dark" | "accent" | "split" };

const code = (file: string, lines: string[]): Block => ({ type: "code", file, lines });

export const layouts: Record<string, Block[]> = {
  // ---------------- SOLUTIONS ----------------
  "solutions/l2-chain": [
    { type: "hero", variant: "split-art" },
    { type: "band", variant: "marquee" },
    { type: "feature", variant: "rows" },
    { type: "metrics" },
    { type: "gallery", variant: "feature" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "solutions/crosschain-interop": [
    { type: "hero", variant: "split-media", flip: true },
    { type: "band", variant: "split" },
    { type: "feature", variant: "matrix" },
    { type: "gallery", variant: "mosaic" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "solutions/wallet-infrastructure": [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "dark" },
    { type: "feature", variant: "pillars" },
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],
  "solutions/on-off-ramps": [
    { type: "hero", variant: "centered" },
    { type: "band", variant: "accent" },
    { type: "feature", variant: "cards" },
    { type: "metrics" },
    { type: "gallery", variant: "strip" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "solutions/brixs-cdk": [
    { type: "hero", variant: "stage" },
    { type: "feature", variant: "split" },
    { type: "band", variant: "split-accent" },
    { type: "gallery", variant: "feature" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "solutions/brixs-agglayer": [
    { type: "hero", variant: "split-art", flip: true },
    { type: "band", variant: "marquee" },
    { type: "feature", variant: "matrix" },
    { type: "metrics" },
    { type: "gallery", variant: "mosaic" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "solutions/vaultbridge": [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "dark" },
    { type: "feature", variant: "rows" },
    { type: "gallery", variant: "band" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],

  // ---------------- USE CASES ----------------
  "use-cases/payments": [
    { type: "hero", variant: "centered" },
    { type: "metrics" },
    { type: "band", variant: "accent" },
    { type: "feature", variant: "pillars" },
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "use-cases/rwas": [
    { type: "hero", variant: "split-media", flip: true },
    { type: "band", variant: "split" },
    { type: "feature", variant: "cards" },
    { type: "gallery", variant: "mosaic" },
    { type: "metrics" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "use-cases/stablecoins": [
    { type: "hero", variant: "stage" },
    { type: "band", variant: "marquee" },
    { type: "feature", variant: "rows" },
    { type: "gallery", variant: "feature" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "use-cases/agentic-ai": [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "dark" },
    { type: "feature", variant: "matrix" },
    { type: "gallery", variant: "strip" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],

  // ---------------- DOCS ----------------
  "docs/core-brixs-chain": [
    { type: "hero", variant: "split-art" },
    code("brixs-chain.ts", [
      "import { BrixsClient } from \"@brixs/sdk\";",
      "",
      "const client = new BrixsClient({",
      "  rpc: \"https://testnet.brixs.space\",",
      "  chainId: 51515,",
      "});",
      "",
      "// read the latest settled block",
      "const block = await client.getBlock(\"latest\");",
      "console.log(block.number, block.finalizedAt);",
    ]),
    { type: "band", variant: "split" },
    { type: "feature", variant: "split" },
    { type: "timeline", steps: [
      { phase: "Layer 0", title: "Network & nodes", text: "RPC, validators, and the public chain surface builders connect to first." },
      { phase: "Layer 1", title: "Execution", text: "Parallel, object-centric execution that keeps fees predictable under load." },
      { phase: "Layer 2", title: "Settlement", text: "Fast finality and a clean settlement story for payments and DeFi." },
      { phase: "Layer 3", title: "Product surface", text: "Wallets, bridge, and explorer built on the same primitives." },
    ] },
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "docs/crosschain-interoperability": [
    { type: "hero", variant: "split-media" },
    code("interop.ts", [
      "// quote a cross-chain route",
      "const route = await client.interop.quote({",
      "  from: \"ethereum\",",
      "  to: \"brixs\",",
      "  asset: \"USDC\",",
      "  amount: 1_000n,",
      "});",
      "",
      "await client.interop.execute(route);",
    ]),
    { type: "band", variant: "dark" },
    { type: "feature", variant: "rows" },
    { type: "gallery", variant: "mosaic" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "docs/wallet-infrastructure": [
    { type: "hero", variant: "mosaic", flip: true },
    code("wallet.ts", [
      "// sponsor gas + open a scoped session key",
      "const session = await wallet.createSession({",
      "  paymaster: \"brixs.sponsor\",",
      "  scope: [\"transfer\", \"swap\"],",
      "  ttl: 3600,",
      "});",
      "",
      "await session.send({ to, value });",
    ]),
    { type: "feature", variant: "matrix" },
    { type: "band", variant: "split-accent" },
    { type: "gallery", variant: "feature" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],
  "docs/agglayer-vaultbridge-cdk": [
    { type: "hero", variant: "stage" },
    { type: "band", variant: "marquee" },
    code("cdk.config.ts", [
      "export default defineChain({",
      "  name: \"my-app-chain\",",
      "  settlement: \"brixs-l2\",",
      "  bridge: \"vaultbridge\",",
      "  liquidity: \"agglayer\",",
      "});",
    ]),
    { type: "feature", variant: "pillars" },
    { type: "gallery", variant: "strip" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "docs/agentic-wallet-cli": [
    { type: "hero", variant: "centered" },
    code("brixs.sh", [
      "# install the Brixs CLI",
      "npm i -g @brixs/cli",
      "",
      "# sign in and bridge from the terminal",
      "brixs login",
      "brixs bridge --from eth --to brixs --asset USDC 250",
      "brixs watch --address $WALLET",
    ]),
    { type: "band", variant: "split" },
    { type: "feature", variant: "cards" },
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],

  // ---------------- COMMUNITY ----------------
  "community/docs": [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "accent" },
    { type: "feature", variant: "rows" },
    { type: "gallery", variant: "mosaic" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "community/events": [
    { type: "hero", variant: "stage" },
    { type: "band", variant: "marquee" },
    { type: "feature", variant: "pillars" },
    { type: "timeline", steps: [
      { phase: "Q1", title: "Builder sprints", text: "Hackathons and live workshops to onboard the first wave of teams." },
      { phase: "Q2", title: "Ecosystem meetups", text: "City meetups and partner sessions around the testnet." },
      { phase: "Q3", title: "Launch moments", text: "Public launches, livestreams, and campaign milestones." },
      { phase: "Q4", title: "Mainnet build-up", text: "Community-led events leading into the mainnet window." },
    ] },
    { type: "gallery", variant: "feature" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "community/support": [
    { type: "hero", variant: "centered" },
    { type: "band", variant: "split" },
    { type: "feature", variant: "matrix" },
    { type: "gallery", variant: "trio" },
    { type: "metrics" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],
  "community/forum": [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "dark" },
    { type: "feature", variant: "cards" },
    { type: "gallery", variant: "strip" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "community/governance": [
    { type: "hero", variant: "split-art", flip: true },
    { type: "metrics" },
    { type: "band", variant: "split-accent" },
    { type: "feature", variant: "rows" },
    { type: "gallery", variant: "mosaic" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],

  // ---------------- USE BRIXS ----------------
  "use-brixs/agent-cli": [
    { type: "hero", variant: "split-media", flip: true },
    code("agent.sh", [
      "# scope an agent to safe, automated actions",
      "brixs agent create --name ops-bot \\",
      "  --scope transfer,stake \\",
      "  --max-value 500",
      "",
      "brixs agent run ops-bot --watch",
    ]),
    { type: "band", variant: "dark" },
    { type: "feature", variant: "split" },
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],
  "use-brixs/staking": [
    { type: "hero", variant: "centered" },
    { type: "metrics" },
    { type: "band", variant: "accent" },
    { type: "feature", variant: "pillars" },
    { type: "gallery", variant: "feature" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "use-brixs/airdrops": [
    { type: "hero", variant: "stage" },
    { type: "band", variant: "marquee" },
    { type: "feature", variant: "cards" },
    { type: "gallery", variant: "strip" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "use-brixs/portal": [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "split" },
    { type: "feature", variant: "matrix" },
    { type: "gallery", variant: "mosaic" },
    { type: "metrics" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],
  "use-brixs/wallet": [
    { type: "hero", variant: "split-art" },
    { type: "band", variant: "dark" },
    { type: "feature", variant: "rows" },
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],

  // ---------------- COMPANY ----------------
  "company/about": [
    { type: "hero", variant: "stage" },
    { type: "band", variant: "split" },
    { type: "timeline", steps: [
      { phase: "Origin", title: "Why Brixs exists", text: "A calmer, faster base layer for payments, apps, and on-chain products." },
      { phase: "Thesis", title: "Unified liquidity", text: "One network voice across execution, bridging, and the product surface." },
      { phase: "Today", title: "Testnet live", text: "Public testnet, builder tooling, and the first ecosystem teams." },
      { phase: "Next", title: "Toward mainnet", text: "Hardening the stack for a serious, institution-ready launch." },
    ] },
    { type: "feature", variant: "pillars" },
    { type: "gallery", variant: "mosaic" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
  "company/vision": [
    { type: "hero", variant: "centered" },
    { type: "band", variant: "marquee" },
    { type: "timeline", steps: [
      { phase: "01", title: "Make it obvious", text: "Good infrastructure makes possibility feel obvious from the first click." },
      { phase: "02", title: "Connect everything", text: "Liquidity, execution, and agents as one connected system." },
      { phase: "03", title: "Stay calm", text: "A premium, restrained brand that earns trust without performing." },
      { phase: "04", title: "Build forever", text: "A network designed to keep moving as the ecosystem grows." },
    ] },
    { type: "feature", variant: "split" },
    { type: "gallery", variant: "feature" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],
  "company/whitepaper": [
    { type: "hero", variant: "split-media", flip: true },
    { type: "band", variant: "dark" },
    { type: "feature", variant: "matrix" },
    code("thesis.ts", [
      "// the protocol in one assumption",
      "type Brixs = {",
      "  execution: \"object-centric\";",
      "  finality: \"~2s\";",
      "  accounts: \"native-aa\";",
      "  liquidity: \"aggregated\";",
      "};",
    ]),
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "split" },
  ],
  "company/contact": [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "accent" },
    { type: "feature", variant: "cards" },
    { type: "gallery", variant: "strip" },
    { type: "related" },
    { type: "cta", variant: "accent" },
  ],

  // ---------------- LEGAL ----------------
  legal: [
    { type: "hero", variant: "split-media" },
    { type: "band", variant: "split" },
    { type: "feature", variant: "rows" },
    { type: "gallery", variant: "trio" },
    { type: "related" },
    { type: "cta", variant: "dark" },
  ],
};

const FALLBACK: Block[] = [
  { type: "hero", variant: "split-art" },
  { type: "band", variant: "accent" },
  { type: "feature", variant: "cards" },
  { type: "gallery", variant: "trio" },
  { type: "related" },
  { type: "cta", variant: "dark" },
];

export function getLayout(key: string): Block[] {
  return layouts[key] ?? FALLBACK;
}
