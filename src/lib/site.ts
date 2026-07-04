type MediaType = "image" | "video";

export type MediaItem = {
  type: MediaType;
  src: string;
  alt: string;
  caption?: string;
};

export type SitePage = {
  path: string[];
  group: "solutions" | "use-cases" | "docs" | "community" | "use-brixs" | "company" | "legal";
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  bullets: string[];
  stats: Array<[string, string]>;
  media: MediaItem;
  /** Brand accent (hex) used to color the page's hero, bands, and motion. */
  accent: string;
  /** Short uppercase motif word shown in the hero readout. */
  motif: string;
  /** Curated set of real, relevant assets shown in the page media gallery. */
  gallery: MediaItem[];
};

type BasePage = Omit<SitePage, "accent" | "motif" | "gallery">;

export type SiteSection = {
  key: SitePage["group"];
  title: string;
  description: string;
};

// Real, on-disk assets (public/assets/*). Per-page hero + gallery media is
// assigned uniquely below via `mediaPlan`; these defaults keep the base data valid.
const video = "/assets/videos/architecture-rotate.mp4";
const zeroGas = "/assets/3d-assets/protocol-core.png";
const agentSphere = "/assets/3d-assets/crystal-01.png";
const ringStation = "/assets/3d-assets/orbital-ring.png";
const dataCubes = "/assets/3d-assets/cube-01.png";

export const siteSections: SiteSection[] = [
  {
    key: "solutions",
    title: "Solutions",
    description: "The chain primitives: execution, liquidity, wallets, and launch tooling.",
  },
  {
    key: "use-cases",
    title: "Use cases",
    description: "Payments, tokenization, stablecoins, and agentic systems.",
  },
  {
    key: "docs",
    title: "Docs",
    description: "Technical pages for builders who want the architecture before the pitch.",
  },
  {
    key: "community",
    title: "Community",
    description: "Support, governance, events, and the public network surface.",
  },
  {
    key: "use-brixs",
    title: "Use Brixs",
    description: "User-facing products: wallet, portal, staking, airdrops, and scan.",
  },
  {
    key: "company",
    title: "Company",
    description: "Story, thesis, research, and the core team-facing pages.",
  },
  {
    key: "legal",
    title: "Legal",
    description: "The policy page that keeps the product and docs grounded.",
  },
];

const basePages: BasePage[] = [
  {
    path: ["solutions", "l2-chain"],
    group: "solutions",
    title: "Brixs Testnet",
    eyebrow: "Core execution layer",
    summary: "Native EVM execution powered by a custom high-performance sequencer for sub-second block times.",
    detail:
      "Brixs Chain is a high-throughput EVM testnet (Chain ID: 51515). It leverages an optimized execution engine, setting the foundation for future scalable architectures.",
    bullets: [
      "Proof of Authority (PoA) Sequencer eliminates centralized failure points.",
      "Native Gas Token: $BRIXS for predictable fees.",
      "Custom JSON-RPC Gateway directly integrated for sub-second block times.",
    ],
    stats: [
      ["51515", "chain ID"],
      ["Optimized", "execution"],
      ["PoA", "sequencer"],
    ],
    media: { type: "video", src: video, alt: "Brixs chain motion preview" },
  },
  {
    path: ["solutions", "crosschain-interop"],
    group: "solutions",
    title: "Unified Liquidity Router",
    eyebrow: "Crosschain routing",
    summary: "Natively read liquidity states across connected chains to solve L2 fragmentation.",
    detail:
      "Solves Ethereum's L2 fragmentation. Can natively read liquidity states from Arbitrum and Polygon without waiting 7 days for bridging withdrawals.",
    bullets: [
      "Natively aggregates fragmented L2 liquidity.",
      "Clear routes for Ethereum, Brixs, and partner chains.",
      "No 7-day withdrawal delays for bridging.",
    ],
    stats: [
      ["0", "wait time"],
      ["24/7", "liquidity access"],
      ["Native", "cross-chain"],
    ],
    media: { type: "image", src: ringStation, alt: "Hexagonal ring station architecture" },
  },
  {
    path: ["solutions", "wallet-infrastructure"],
    group: "solutions",
    title: "Account Abstraction",
    eyebrow: "Wallet infrastructure",
    summary: "Protocol-level EIP-4337 Account Abstraction for a zero-gas UX.",
    detail:
      "Natively bundled into the protocol. Enables zero-gas UX and social logins (Google/Email). No extra prompts, no complicated gas estimations.",
    bullets: [
      "Built-in paymasters for sponsored transactions.",
      "Session-based permissions for apps and AI agent flows.",
      "Seamless onboarding with Google/Email social logins.",
    ],
    stats: [
      ["EIP-4337", "native flow"],
      ["0", "gas fees"],
      ["Social", "login keys"],
    ],
    media: { type: "image", src: zeroGas, alt: "Zero gas portal visual" },
  },
  {
    path: ["solutions", "on-off-ramps"],
    group: "solutions",
    title: "On / Off Ramps",
    eyebrow: "Fiat bridge",
    summary: "A clean entry point between fiat, stablecoins, and the Brixs network.",
    detail:
      "This route is about the front door: keep the conversion story legible, keep the actions short, and make the chain feel approachable.",
    bullets: [
      "Designed for first-time users and repeat deposits.",
      "Short, guided flows with minimal visual clutter.",
      "A natural bridge into the wallet and portal surfaces.",
    ],
    stats: [
      ["USD", "entry currency"],
      ["Fast", "checkout"],
      ["Simple", "confirm flow"],
    ],
    media: { type: "video", src: video, alt: "Architecture motion with a premium bridge feel" },
  },
  {
    path: ["solutions", "brixs-cdk"],
    group: "solutions",
    title: "Brixs CDK",
    eyebrow: "Launch kit",
    summary: "A chain development kit for teams that want to spin up new experiences quickly.",
    detail:
      "CDK gets the launch path out of the way: team scaffolding, predictable infra, and a branded route from idea to network.",
    bullets: [
      "Reusable launch templates for app-specific chains.",
      "Clear defaults for data, wallets, and bridge rails.",
      "Great for teams that need a fast, opinionated starting point.",
    ],
    stats: [
      ["L3", "launch ready"],
      ["Kit", "reusable"],
      ["Build", "faster"],
    ],
    media: { type: "image", src: dataCubes, alt: "Stacked data cubes terminal" },
  },
  {
    path: ["solutions", "brixs-agglayer"],
    group: "solutions",
    title: "Future-Proof Security",
    eyebrow: "Security layer",
    summary: "Standard ECDSA security with a roadmap for future cryptographic upgrades.",
    detail:
      "Brixs Chain secures the network using industry-standard ECDSA cryptography, with ongoing research into future integrations for long-term security.",
    bullets: [
      "Industry-standard signature verification.",
      "Researching future cryptographic upgrades.",
      "Maintains EVM compatibility while upgrading security.",
    ],
    stats: [
      ["ECDSA", "signatures"],
      ["Standard", "security"],
      ["Roadmap", "future-proof"],
    ],
    media: { type: "video", src: video, alt: "Motion preview for aggregated liquidity" },
  },
  {
    path: ["solutions", "vaultbridge"],
    group: "solutions",
    title: "Sequencer Mempool",
    eyebrow: "MEV protection",
    summary: "A reliable FIFO mempool architecture prioritizing fair transaction ordering.",
    detail:
      "Brixs Chain features a native Sequencer Mempool. Transactions are shielded from malicious validators and searchers, ensuring fair execution and eliminating front-running.",
    bullets: [
      "FIFO-based transaction ordering.",
      "Reliable execution for decentralized exchange trades.",
      "Ensures fair execution for all decentralized exchange trades.",
    ],
    stats: [
      ["Encrypted", "mempool"],
      ["Standard", "execution"],
      ["Fair", "ordering"],
    ],
    media: { type: "image", src: ringStation, alt: "Ring station bridge architecture" },
  },
  {
    path: ["use-cases", "payments"],
    group: "use-cases",
    title: "Payments",
    eyebrow: "Everyday volume",
    summary: "Gasless micro-payments and fast settlement for consumer and merchant rails.",
    detail:
      "This page presents the chain as a payment substrate: short flows, predictable fees, and strong visual clarity for high-frequency usage.",
    bullets: [
      "Smooth settlement for merchants and apps.",
      "Designed for small amounts and repeated interactions.",
      "Pairs naturally with account abstraction and sponsorship.",
    ],
    stats: [
      ["Low", "friction"],
      ["Fast", "settlement"],
      ["Simple", "UX"],
    ],
    media: { type: "image", src: zeroGas, alt: "Zero gas payment portal" },
  },
  {
    path: ["use-cases", "rwas"],
    group: "use-cases",
    title: "RWAs",
    eyebrow: "Tokenized assets",
    summary: "A clean institutional surface for real-world assets, proofs, and audit-friendly flows.",
    detail:
      "The RWA page leans on calm visual structure and data-heavy language, making the chain feel like infrastructure rather than a campaign.",
    bullets: [
      "Useful for asset issuers and settlement desks.",
      "Clear custody, transfer, and reporting narratives.",
      "Good fit for long-lived financial products.",
    ],
    stats: [
      ["Audit", "ready"],
      ["Assets", "tokenized"],
      ["Desk", "friendly"],
    ],
    media: { type: "image", src: dataCubes, alt: "Data cubes for tokenized asset flows" },
  },
  {
    path: ["use-cases", "stablecoins"],
    group: "use-cases",
    title: "Stablecoins",
    eyebrow: "Liquidity money",
    summary: "A home for stable value, payments, treasury, and chain-native liquidity.",
    detail:
      "This page sits between payments and DeFi: it explains why predictable settlement matters and why the network is built for it.",
    bullets: [
      "Stable rails for apps that need dependable unit-of-account behavior.",
      "Treasury-friendly flows for protocols and enterprises.",
      "A logical fit for cross-chain movement and settlement.",
    ],
    stats: [
      ["Stable", "value"],
      ["High", "throughput"],
      ["Treasury", "friendly"],
    ],
    media: { type: "video", src: video, alt: "Stablecoin motion visual" },
  },
  {
    path: ["use-cases", "agentic-ai"],
    group: "use-cases",
    title: "Smart Contract Automation",
    eyebrow: "Protocol-level automation",
    summary: "Smart contract automation capabilities built directly into the network ecosystem.",
    detail:
      "Users deposit funds into automation contracts, enabling autonomous execution of complex trading strategies or payments on their behalf.",
    bullets: [
      "Native automation capabilities at the contract level.",
      "Deposit into automation contracts for portfolio management.",
      "Executes trades, payments, and complex interactions autonomously.",
    ],
    stats: [
      ["Native", "automation"],
      ["Contract", "level"],
      ["Reliable", "execution"],
    ],
    media: { type: "image", src: agentSphere, alt: "Fractal sphere for agentic systems" },
  },
  {
    path: ["docs", "core-brixs-chain"],
    group: "docs",
    title: "Core Brixs Chain Docs",
    eyebrow: "Protocol guide",
    summary: "The network, architecture, and execution model in one builder-facing page.",
    detail:
      "This page makes the technical story direct: nodes, execution, settlement, and the high-level primitives behind the brand.",
    bullets: [
      "Architecture overview for builders and partners.",
      "Clear explanation of network components and flows.",
      "Good launch point for deeper technical docs.",
    ],
    stats: [
      ["Docs", "first"],
      ["Network", "overview"],
      ["Build", "start here"],
    ],
    media: { type: "video", src: video, alt: "Technical architecture motion" },
  },
  {
    path: ["docs", "crosschain-interoperability"],
    group: "docs",
    title: "Crosschain Interoperability Docs",
    eyebrow: "Interop spec",
    summary: "Bridge mechanics, routing, and settlement assumptions for connected networks.",
    detail:
      "The docs keep the interop language straightforward so builders can understand where value moves and where the product surface ends.",
    bullets: [
      "Bridge mechanics and route definitions.",
      "Settlement assumptions across connected systems.",
      "Intended for teams integrating external liquidity.",
    ],
    stats: [
      ["Bridge", "spec"],
      ["Routes", "defined"],
      ["Value", "portable"],
    ],
    media: { type: "image", src: ringStation, alt: "Interoperability ring station" },
  },
  {
    path: ["docs", "wallet-infrastructure"],
    group: "docs",
    title: "Wallet Infrastructure Docs",
    eyebrow: "AA and keys",
    summary: "The wallet model, sponsorship patterns, and the onboarding primitives behind it.",
    detail:
      "This is where the wallet story gets concrete: account abstraction, session logic, and product-level signing behavior.",
    bullets: [
      "Explain account abstraction from the product side.",
      "Session keys, paymasters, and sponsored gas flows.",
      "Useful for wallet teams and frontend engineers alike.",
    ],
    stats: [
      ["AA", "covered"],
      ["Keys", "scoped"],
      ["UX", "simplified"],
    ],
    media: { type: "image", src: zeroGas, alt: "Wallet and gasless UX visual" },
  },
  {
    path: ["docs", "agglayer-vaultbridge-cdk"],
    group: "docs",
    title: "AggLayer, Vaultbridge, CDK Docs",
    eyebrow: "Launch and liquidity stack",
    summary: "Three linked rails for aggregation, bridging, and chain launches.",
    detail:
      "These pages give the more ambitious architecture a clean landing zone so the story feels complete without over-explaining it.",
    bullets: [
      "Aggregated liquidity and route selection concepts.",
      "Bridge design and how it plugs into launch tooling.",
      "CDK defaults for app-specific chains and rollups.",
    ],
    stats: [
      ["3", "linked rails"],
      ["Launch", "ready"],
      ["Liquidity", "aware"],
    ],
    media: { type: "video", src: video, alt: "Launch and liquidity motion" },
  },
  {
    path: ["docs", "agentic-wallet-cli"],
    group: "docs",
    title: "Agentic Wallet & CLI Docs",
    eyebrow: "Automation layer",
    summary: "Command-line and programmatic primitives for agents that need on-chain access.",
    detail:
      "The CLI docs connect the product and the protocol: a tidy story for scripts, operators, and autonomous workflows.",
    bullets: [
      "CLI commands for signing, monitoring, and moving assets.",
      "Agent-safe permissions and traceable execution logs.",
      "A good bridge between product and infrastructure teams.",
    ],
    stats: [
      ["CLI", "ready"],
      ["Agent", "safe"],
      ["Ops", "traceable"],
    ],
    media: { type: "image", src: agentSphere, alt: "Agent CLI visual" },
  },
  {
    path: ["community", "docs"],
    group: "community",
    title: "Docs",
    eyebrow: "Public gateway",
    summary: "A fast route into the docs ecosystem and the builder journey.",
    detail:
      "The community docs page acts like a front door inside the community tree, making it easy to reach the technical story from anywhere.",
    bullets: [
      "Quick path back to the technical pages.",
      "Makes the community surface feel connected.",
      "Useful as a support anchor for newcomers.",
    ],
    stats: [
      ["Docs", "linked"],
      ["Community", "guided"],
      ["Support", "simple"],
    ],
    media: { type: "video", src: video, alt: "Docs gateway motion" },
  },
  {
    path: ["community", "events"],
    group: "community",
    title: "Events",
    eyebrow: "Hackathons and meetups",
    summary: "A place for launches, campaigns, and the public calendar of Brixs activity.",
    detail:
      "This route gives the brand a living presence: developer events, launch moments, and the type of calendar page serious ecosystems need.",
    bullets: [
      "Hackathons, livestreams, and community meetups.",
      "Keeps the ecosystem feeling active and human.",
      "Good place to announce launches and builder sprints.",
    ],
    stats: [
      ["Live", "calendar"],
      ["Meetups", "listed"],
      ["Launches", "visible"],
    ],
    media: { type: "image", src: ringStation, alt: "Architecture ring for events" },
  },
  {
    path: ["community", "support"],
    group: "community",
    title: "Support",
    eyebrow: "Help desk",
    summary: "A support page that keeps help visible without making the design noisy.",
    detail:
      "This is where users go when they need a human answer. The layout stays calm, clear, and easy to scan.",
    bullets: [
      "Bug reporting and onboarding help.",
      "Discord, email, and documentation entry points.",
      "Low-friction support experience for the public site.",
    ],
    stats: [
      ["Help", "available"],
      ["Fast", "responses"],
      ["Users", "guided"],
    ],
    media: { type: "image", src: zeroGas, alt: "Support and onboarding portal" },
  },
  {
    path: ["community", "forum"],
    group: "community",
    title: "Forum",
    eyebrow: "Discussions and ideas",
    summary: "A public discussion space for builders, contributors, and ecosystem plans.",
    detail:
      "The forum page keeps the governance and community story open while preserving the brand's clean visual rhythm.",
    bullets: [
      "Threads for proposals, ecosystem ideas, and builders.",
      "A clear transition from docs to public discussion.",
      "Good place for long-form network conversations.",
    ],
    stats: [
      ["Discuss", "ideas"],
      ["Open", "threads"],
      ["Public", "record"],
    ],
    media: { type: "video", src: video, alt: "Forum motion visual" },
  },
  {
    path: ["community", "governance"],
    group: "community",
    title: "Governance",
    eyebrow: "Network decisions",
    summary: "A page for proposals, voting, and the future evolution of the chain.",
    detail:
      "Governance should feel serious and legible, and this page uses the monochrome system to keep that sense of structure.",
    bullets: [
      "Proposals, voting, and network updates.",
      "Makes community ownership feel real.",
      "A natural place for protocol evolution.",
    ],
    stats: [
      ["Votes", "tracked"],
      ["Proposals", "open"],
      ["Network", "shaped"],
    ],
    media: { type: "image", src: dataCubes, alt: "Governance data cubes" },
  },
  {
    path: ["use-brixs", "agent-cli"],
    group: "use-brixs",
    title: "Brixs Developer CLI",
    eyebrow: "Operator tooling",
    summary: "Global Node Package Manager tool for instant interaction with the Brixs network.",
    detail:
      "Deployed globally for 20,000+ developers. Open your terminal and type `npm install -g brixs-cli` to access wallets, faucets, and deployments directly.",
    bullets: [
      "Install globally via npm install -g brixs-cli.",
      "Deploy contracts and claim faucet testnet tokens instantly.",
      "Fully connects to the rpc-testnet.brixs.space node out-of-the-box.",
    ],
    stats: [
      ["NPM", "global package"],
      ["CLI", "tooling"],
      ["Instant", "access"],
    ],
    media: { type: "image", src: agentSphere, alt: "Agent command line sphere" },
  },
  {
    path: ["use-brixs", "staking"],
    group: "use-brixs",
    title: "Staking",
    eyebrow: "Network participation",
    summary: "A focused staking page for users who want to support the network.",
    detail:
      "This page keeps staking straightforward: a clear action, a clear benefit, and no unnecessary clutter around it.",
    bullets: [
      "Stake to participate in the network economy.",
      "Readable rewards and delegation path.",
      "Simple enough for mainstream users to follow.",
    ],
    stats: [
      ["Stake", "live"],
      ["Rewards", "visible"],
      ["Users", "engaged"],
    ],
    media: { type: "image", src: ringStation, alt: "Staking ring station" },
  },
  {
    path: ["use-brixs", "airdrops"],
    group: "use-brixs",
    title: "Airdrops",
    eyebrow: "Campaign surface",
    summary: "A tidy page for quests, rewards, and community growth mechanics.",
    detail:
      "Airdrops are presented as a clean campaign engine: eligibility, rewards, and a direct route into the network.",
    bullets: [
      "Quest and reward storytelling.",
      "Campaign pages that can scale with launches.",
      "A natural hook for new users and community growth.",
    ],
    stats: [
      ["Quest", "driven"],
      ["Rewards", "tracked"],
      ["Growth", "built"],
    ],
    media: { type: "video", src: video, alt: "Airdrop motion visual" },
  },
  {
    path: ["use-brixs", "portal"],
    group: "use-brixs",
    title: "Portal",
    eyebrow: "Bridge and manage",
    summary: "The primary product surface for bridging, swapping, and moving assets.",
    detail:
      "Portal should feel like the network's control center without becoming visually complicated, and this page leans into that.",
    bullets: [
      "Bridge, swap, and manage on-chain assets.",
      "Simple enough for new users and strong enough for power users.",
      "Pairs with the wallet, scan, and interop story.",
    ],
    stats: [
      ["Bridge", "native"],
      ["Swap", "ready"],
      ["Manage", "assets"],
    ],
    media: { type: "image", src: zeroGas, alt: "Portal bridge interface" },
  },
  {
    path: ["use-brixs", "wallet"],
    group: "use-brixs",
    title: "Brixs Wallet",
    eyebrow: "User wallet",
    summary: "A mainstream wallet page for sending, receiving, and managing assets.",
    detail:
      "The wallet page ties the product story together and keeps the onboarding flow easy to understand.",
    bullets: [
      "Send, receive, and hold assets in one place.",
      "Built to support the chain's simpler onboarding story.",
      "The right balance of utility and brand polish.",
    ],
    stats: [
      ["Send", "simple"],
      ["Receive", "easy"],
      ["Assets", "managed"],
    ],
    media: { type: "image", src: zeroGas, alt: "Wallet portal visual" },
  },
  {
    path: ["company", "about"],
    group: "company",
    title: "About Brixs",
    eyebrow: "Origin story",
    summary: "The company page for the brand story, the team, and the overall mission.",
    detail:
      "This page gives the project a credible corporate voice without drifting away from the chain-first identity.",
    bullets: [
      "Who Brixs is and why the network exists.",
      "A short, serious presentation of the team and mission.",
      "Useful anchor for partners and investors.",
    ],
    stats: [
      ["Team", "visible"],
      ["Mission", "clear"],
      ["Brand", "coherent"],
    ],
    media: { type: "video", src: video, alt: "About Brixs motion visual" },
  },
  {
    path: ["company", "vision"],
    group: "company",
    title: "Vision",
    eyebrow: "Long-term thesis",
    summary: "Brixs as a home for unified liquidity, execution, and agent-ready infrastructure.",
    detail:
      "The vision page should read like a north star, so the copy keeps the language simple and architectural.",
    bullets: [
      "The thesis behind the brand and its future products.",
      "Why the stack is designed to feel calm and connected.",
      "A place for the larger network narrative.",
    ],
    stats: [
      ["Vision", "documented"],
      ["Thesis", "aligned"],
      ["Future", "roadmap"],
    ],
    media: { type: "image", src: ringStation, alt: "Vision ring station architecture" },
  },
  {
    path: ["company", "whitepaper"],
    group: "company",
    title: "Whitepaper",
    eyebrow: "Technical thesis",
    summary: "A formal page for the protocol thesis and the most important architecture claims.",
    detail:
      "The whitepaper page gives the brand a strong technical anchor and makes the long-form story easy to find.",
    bullets: [
      "Protocol assumptions and architectural choices.",
      "A strong reference point for deeper reading.",
      "Good landing zone for serious technical audiences.",
    ],
    stats: [
      ["Paper", "available"],
      ["Claims", "clear"],
      ["Docs", "deep"],
    ],
    media: { type: "image", src: dataCubes, alt: "Whitepaper data cubes" },
  },
  {
    path: ["company", "contact"],
    group: "company",
    title: "Contact",
    eyebrow: "Reach the team",
    summary: "A minimal contact page for partnerships, support, and ecosystem inquiries.",
    detail:
      "Keep contact simple: a single point of entry, fewer decisions, and the feeling that the team is reachable.",
    bullets: [
      "Partnership and ecosystem contact routes.",
      "Support and public-facing communication channels.",
      "Works as the final step for serious inquiries.",
    ],
    stats: [
      ["Reply", "tracked"],
      ["Teams", "reachable"],
      ["Contact", "simple"],
    ],
    media: { type: "image", src: zeroGas, alt: "Contact portal visual" },
  },
  {
    path: ["legal"],
    group: "legal",
    title: "Legal",
    eyebrow: "Policy center",
    summary: "The legal home for terms, privacy, and policy references.",
    detail:
      "This page keeps the legal footprint clean and centralized so the rest of the site stays focused on product and architecture.",
    bullets: [
      "Terms and privacy details in one place.",
      "Useful for trust and compliance.",
      "Minimal, readable, and easy to maintain.",
    ],
    stats: [
      ["Terms", "linked"],
      ["Privacy", "linked"],
      ["Policy", "central"],
    ],
    media: { type: "video", src: video, alt: "Legal motion visual" },
  },
];

// Brand accents pulled straight from the homepage system.
const ACCENT = {
  green: "#00d395",
  blue: "#2b6aff",
  yellow: "#ffb800",
  red: "#ff3b30",
  purple: "#8c5afc",
} as const;

const V = (name: string) => `/assets/videos/${name}.mp4`;
const I = (name: string) => `/assets/3d-assets/${name}`;

type Plan = { accent: string; motif: string; media: MediaItem; gallery: MediaItem[] };

// Each page gets a unique, topic-relevant hero and a 3-asset gallery so no two
// pages reuse the same composition. All paths point at real files in /public/assets.
const mediaPlan: Record<string, Plan> = {
  "solutions/l2-chain": {
    accent: ACCENT.green, motif: "EXECUTION",
    media: { type: "video", src: V("architecture-rotate"), alt: "Brixs L2 execution layer in motion" },
    gallery: [
      { type: "image", src: I("protocol-core.png"), alt: "Protocol core", caption: "Settlement core" },
      { type: "image", src: I("execution-engine.png"), alt: "Execution engine", caption: "Parallel execution" },
      { type: "image", src: I("orbital-ring.png"), alt: "Network ring", caption: "Network surface" },
    ],
  },
  "solutions/crosschain-interop": {
    accent: ACCENT.blue, motif: "ROUTING",
    media: { type: "video", src: V("orbital-ring"), alt: "Cross-chain routing rings" },
    gallery: [
      { type: "image", src: I("orbital-ring.png"), alt: "Routing ring", caption: "Unified routes" },
      { type: "image", src: I("validator-mesh.png"), alt: "Validator mesh", caption: "Connected chains" },
      { type: "image", src: I("data-prism.png"), alt: "Data prism", caption: "Value in motion" },
    ],
  },
  "solutions/wallet-infrastructure": {
    accent: ACCENT.purple, motif: "ACCOUNTS",
    media: { type: "image", src: I("secure-node.png"), alt: "Secure account node" },
    gallery: [
      { type: "image", src: I("node-icon.png"), alt: "Account node", caption: "Session keys" },
      { type: "image", src: I("secure-node.png"), alt: "Secure node", caption: "Sponsored gas" },
      { type: "image", src: I("protocol-core.png"), alt: "Protocol core", caption: "Native AA" },
    ],
  },
  "solutions/on-off-ramps": {
    accent: ACCENT.green, motif: "RAMPS",
    media: { type: "video", src: V("liquidity-engine"), alt: "Liquidity ramp flows" },
    gallery: [
      { type: "image", src: I("graph-chart.png"), alt: "Flow chart", caption: "Fiat in" },
      { type: "image", src: I("pie-chart.png"), alt: "Allocation", caption: "Stable rails" },
      { type: "image", src: I("gas-optimization.jpg"), alt: "Optimized fees", caption: "Fast checkout" },
    ],
  },
  "solutions/brixs-cdk": {
    accent: ACCENT.yellow, motif: "LAUNCH",
    media: { type: "video", src: V("cube-01"), alt: "Chain development kit blocks" },
    gallery: [
      { type: "image", src: I("cube-01.png"), alt: "Launch block", caption: "Templates" },
      { type: "image", src: I("crystal-01.png"), alt: "Crystal", caption: "App chains" },
      { type: "image", src: I("data-prism.png"), alt: "Data prism", caption: "Reusable infra" },
    ],
  },
  "solutions/brixs-agglayer": {
    accent: ACCENT.blue, motif: "AGGREGATE",
    media: { type: "video", src: V("data-prism"), alt: "Aggregated liquidity prism" },
    gallery: [
      { type: "image", src: I("data-prism.png"), alt: "Data prism", caption: "Unified view" },
      { type: "image", src: I("orbital-ring.png"), alt: "Ring", caption: "Connected chains" },
      { type: "image", src: I("graph-chart.png"), alt: "Chart", caption: "Liquidity depth" },
    ],
  },
  "solutions/vaultbridge": {
    accent: ACCENT.green, motif: "BRIDGE",
    media: { type: "video", src: V("secure-node"), alt: "Secured bridge vault" },
    gallery: [
      { type: "image", src: I("secure-node.png"), alt: "Vault", caption: "Safe routes" },
      { type: "image", src: I("validator-mesh.png"), alt: "Mesh", caption: "Traceable flows" },
      { type: "image", src: I("cube-01.png"), alt: "Asset block", caption: "Treasury moves" },
    ],
  },
  "use-cases/payments": {
    accent: ACCENT.blue, motif: "PAYMENTS",
    media: { type: "video", src: V("liquidity-engine"), alt: "Payment settlement flows" },
    gallery: [
      { type: "image", src: I("gas-optimization.jpg"), alt: "Low fees", caption: "Low friction" },
      { type: "image", src: I("graph-chart.png"), alt: "Volume", caption: "Fast settlement" },
      { type: "image", src: I("pie-chart.png"), alt: "Split", caption: "Merchant rails" },
    ],
  },
  "use-cases/rwas": {
    accent: ACCENT.yellow, motif: "ASSETS",
    media: { type: "image", src: I("cube-01.png"), alt: "Tokenized asset block" },
    gallery: [
      { type: "image", src: I("cube-01.png"), alt: "Asset", caption: "Tokenized" },
      { type: "image", src: I("crystal-01.png"), alt: "Crystal", caption: "Audit ready" },
      { type: "image", src: I("pie-chart.png"), alt: "Holdings", caption: "Desk friendly" },
    ],
  },
  "use-cases/stablecoins": {
    accent: ACCENT.green, motif: "STABLE",
    media: { type: "video", src: V("graph-chart"), alt: "Stable value throughput" },
    gallery: [
      { type: "image", src: I("graph-chart.png"), alt: "Throughput", caption: "High throughput" },
      { type: "image", src: I("pie-chart.png"), alt: "Reserves", caption: "Treasury" },
      { type: "image", src: I("gas-optimization.jpg"), alt: "Fees", caption: "Predictable" },
    ],
  },
  "use-cases/agentic-ai": {
    accent: ACCENT.purple, motif: "AGENTS",
    media: { type: "video", src: V("crystal-01"), alt: "Agentic systems crystal" },
    gallery: [
      { type: "image", src: I("crystal-01.png"), alt: "Agent", caption: "Autonomous" },
      { type: "image", src: I("node-icon.png"), alt: "Node", caption: "Scoped keys" },
      { type: "image", src: I("data-prism.png"), alt: "Prism", caption: "Chain native" },
    ],
  },
  "docs/core-brixs-chain": {
    accent: ACCENT.yellow, motif: "PROTOCOL",
    media: { type: "video", src: V("architecture-rotate"), alt: "Core protocol architecture" },
    gallery: [
      { type: "image", src: I("protocol-core.png"), alt: "Core", caption: "Network core" },
      { type: "image", src: I("execution-engine.png"), alt: "Engine", caption: "Execution" },
      { type: "image", src: I("validator-mesh.png"), alt: "Mesh", caption: "Settlement" },
    ],
  },
  "docs/crosschain-interoperability": {
    accent: ACCENT.blue, motif: "INTEROP",
    media: { type: "video", src: V("orbital-ring"), alt: "Interoperability routing" },
    gallery: [
      { type: "image", src: I("orbital-ring.png"), alt: "Ring", caption: "Bridge routes" },
      { type: "image", src: I("data-prism.png"), alt: "Prism", caption: "Value paths" },
      { type: "image", src: I("validator-mesh.png"), alt: "Mesh", caption: "Connected" },
    ],
  },
  "docs/wallet-infrastructure": {
    accent: ACCENT.purple, motif: "AA + KEYS",
    media: { type: "image", src: I("node-icon.png"), alt: "Wallet account node" },
    gallery: [
      { type: "image", src: I("node-icon.png"), alt: "Node", caption: "Accounts" },
      { type: "image", src: I("secure-node.png"), alt: "Secure", caption: "Paymasters" },
      { type: "image", src: I("protocol-core.png"), alt: "Core", caption: "Signing" },
    ],
  },
  "docs/agglayer-vaultbridge-cdk": {
    accent: ACCENT.green, motif: "STACK",
    media: { type: "video", src: V("infrastructure-loop"), alt: "Launch and liquidity stack" },
    gallery: [
      { type: "image", src: I("cube-01.png"), alt: "CDK", caption: "Launch kit" },
      { type: "image", src: I("data-prism.png"), alt: "AggLayer", caption: "Aggregation" },
      { type: "image", src: I("orbital-ring.png"), alt: "Bridge", caption: "Vaultbridge" },
    ],
  },
  "docs/agentic-wallet-cli": {
    accent: ACCENT.red, motif: "AUTOMATION",
    media: { type: "video", src: V("node-icon"), alt: "Agent CLI node" },
    gallery: [
      { type: "image", src: I("node-icon.png"), alt: "CLI", caption: "Commands" },
      { type: "image", src: I("crystal-01.png"), alt: "Agent", caption: "Agent-safe" },
      { type: "image", src: I("secure-node.png"), alt: "Logs", caption: "Traceable" },
    ],
  },
  "community/docs": {
    accent: ACCENT.red, motif: "GATEWAY",
    media: { type: "video", src: V("infrastructure-loop"), alt: "Docs gateway" },
    gallery: [
      { type: "image", src: I("protocol-core.png"), alt: "Docs", caption: "Technical" },
      { type: "image", src: I("data-prism.png"), alt: "Guides", caption: "Builder path" },
      { type: "image", src: I("graph-chart.png"), alt: "Index", caption: "Connected" },
    ],
  },
  "community/events": {
    accent: ACCENT.yellow, motif: "EVENTS",
    media: { type: "video", src: V("protocol-background"), alt: "Community events backdrop" },
    gallery: [
      { type: "image", src: I("orbital-ring.png"), alt: "Calendar", caption: "Live calendar" },
      { type: "image", src: I("crystal-01.png"), alt: "Launch", caption: "Launches" },
      { type: "image", src: I("cube-01.png"), alt: "Meetups", caption: "Meetups" },
    ],
  },
  "community/support": {
    accent: ACCENT.blue, motif: "SUPPORT",
    media: { type: "image", src: I("secure-node.png"), alt: "Support desk node" },
    gallery: [
      { type: "image", src: I("secure-node.png"), alt: "Help", caption: "Help desk" },
      { type: "image", src: I("node-icon.png"), alt: "Channels", caption: "Discord + email" },
      { type: "image", src: I("protocol-core.png"), alt: "Docs", caption: "Onboarding" },
    ],
  },
  "community/forum": {
    accent: ACCENT.green, motif: "DISCUSS",
    media: { type: "video", src: V("validator-mesh"), alt: "Forum discussion mesh" },
    gallery: [
      { type: "image", src: I("validator-mesh.png"), alt: "Threads", caption: "Open threads" },
      { type: "image", src: I("node-icon.png"), alt: "Voices", caption: "Contributors" },
      { type: "image", src: I("data-prism.png"), alt: "Ideas", caption: "Proposals" },
    ],
  },
  "community/governance": {
    accent: ACCENT.red, motif: "GOVERNANCE",
    media: { type: "video", src: V("governance-flow"), alt: "Governance voting flow" },
    gallery: [
      { type: "image", src: I("pie-chart.png"), alt: "Votes", caption: "Votes tracked" },
      { type: "image", src: I("graph-chart.png"), alt: "Proposals", caption: "Proposals" },
      { type: "image", src: I("validator-mesh.png"), alt: "Network", caption: "Network shaped" },
    ],
  },
  "use-brixs/agent-cli": {
    accent: ACCENT.purple, motif: "OPERATOR",
    media: { type: "video", src: V("node-icon"), alt: "Operator CLI node" },
    gallery: [
      { type: "image", src: I("node-icon.png"), alt: "CLI", caption: "Terminal power" },
      { type: "image", src: I("crystal-01.png"), alt: "Agents", caption: "Agent ops" },
      { type: "image", src: I("secure-node.png"), alt: "Automate", caption: "Automate" },
    ],
  },
  "use-brixs/staking": {
    accent: ACCENT.green, motif: "STAKING",
    media: { type: "video", src: V("orbital-ring"), alt: "Staking participation ring" },
    gallery: [
      { type: "image", src: I("orbital-ring.png"), alt: "Stake", caption: "Participate" },
      { type: "image", src: I("graph-chart.png"), alt: "Rewards", caption: "Rewards" },
      { type: "image", src: I("pie-chart.png"), alt: "Delegation", caption: "Delegation" },
    ],
  },
  "use-brixs/airdrops": {
    accent: ACCENT.yellow, motif: "CAMPAIGN",
    media: { type: "video", src: V("crystal-01"), alt: "Airdrop campaign crystal" },
    gallery: [
      { type: "image", src: I("crystal-01.png"), alt: "Quest", caption: "Quest driven" },
      { type: "image", src: I("cube-01.png"), alt: "Rewards", caption: "Rewards" },
      { type: "image", src: I("graph-chart.png"), alt: "Growth", caption: "Growth" },
    ],
  },
  "use-brixs/portal": {
    accent: ACCENT.blue, motif: "PORTAL",
    media: { type: "video", src: V("liquidity-engine"), alt: "Portal bridge and swap engine" },
    gallery: [
      { type: "image", src: I("protocol-core.png"), alt: "Bridge", caption: "Bridge" },
      { type: "image", src: I("data-prism.png"), alt: "Swap", caption: "Swap" },
      { type: "image", src: I("gas-optimization.jpg"), alt: "Manage", caption: "Manage assets" },
    ],
  },
  "use-brixs/wallet": {
    accent: ACCENT.purple, motif: "WALLET",
    media: { type: "image", src: I("secure-node.png"), alt: "Brixs wallet node" },
    gallery: [
      { type: "image", src: I("secure-node.png"), alt: "Send", caption: "Send" },
      { type: "image", src: I("node-icon.png"), alt: "Receive", caption: "Receive" },
      { type: "image", src: I("validator-mesh.png"), alt: "Hold", caption: "Hold assets" },
    ],
  },
  "company/about": {
    accent: ACCENT.blue, motif: "ABOUT",
    media: { type: "video", src: V("protocol-background"), alt: "About Brixs backdrop" },
    gallery: [
      { type: "image", src: I("protocol-core.png"), alt: "Mission", caption: "Mission" },
      { type: "image", src: I("orbital-ring.png"), alt: "Network", caption: "Network" },
      { type: "image", src: I("execution-engine.png"), alt: "Team", caption: "The build" },
    ],
  },
  "company/vision": {
    accent: ACCENT.green, motif: "THESIS",
    media: { type: "video", src: V("orbital-ring"), alt: "Long-term vision ring" },
    gallery: [
      { type: "image", src: I("orbital-ring.png"), alt: "North star", caption: "North star" },
      { type: "image", src: I("crystal-01.png"), alt: "Future", caption: "Future" },
      { type: "image", src: I("data-prism.png"), alt: "Connected", caption: "Connected" },
    ],
  },
  "company/whitepaper": {
    accent: ACCENT.yellow, motif: "THESIS",
    media: { type: "image", src: I("data-prism.png"), alt: "Whitepaper data prism" },
    gallery: [
      { type: "image", src: I("data-prism.png"), alt: "Paper", caption: "Protocol thesis" },
      { type: "image", src: I("graph-chart.png"), alt: "Claims", caption: "Claims" },
      { type: "image", src: I("cube-01.png"), alt: "Architecture", caption: "Architecture" },
    ],
  },
  "company/contact": {
    accent: ACCENT.red, motif: "CONTACT",
    media: { type: "video", src: V("architecture-rotate"), alt: "Contact the team" },
    gallery: [
      { type: "image", src: I("protocol-core.png"), alt: "Team", caption: "Reach the team" },
      { type: "image", src: I("node-icon.png"), alt: "Channels", caption: "Channels" },
      { type: "image", src: I("secure-node.png"), alt: "Partnerships", caption: "Partnerships" },
    ],
  },
  legal: {
    accent: ACCENT.blue, motif: "POLICY",
    media: { type: "image", src: I("protocol-core.png"), alt: "Legal policy core" },
    gallery: [
      { type: "image", src: I("protocol-core.png"), alt: "Terms", caption: "Terms" },
      { type: "image", src: I("data-prism.png"), alt: "Privacy", caption: "Privacy" },
      { type: "image", src: I("validator-mesh.png"), alt: "Policy", caption: "Policy center" },
    ],
  },
};

// Cleanup: the docs/* group duplicates the deployed docs site (docs.brixs.space),
// and solutions/crosschain-interop duplicates solutions/interoperability.
const REMOVED_PAGES = new Set([
  "docs/core-brixs-chain",
  "docs/crosschain-interoperability",
  "docs/wallet-infrastructure",
  "docs/agglayer-vaultbridge-cdk",
  "docs/agentic-wallet-cli",
  "solutions/crosschain-interop",
]);

export const sitePages: SitePage[] = basePages
  .filter((page) => !REMOVED_PAGES.has(page.path.join("/")))
  .map((page, i) => {
  const key = page.path.join("/");
  const plan = mediaPlan[key];
  // Official 3D footage as the hero, one clip per page (model-1..31).
  const official: MediaItem = {
    type: "video",
    src: `/assets/official/model-${(i % 31) + 1}.mp4`,
    alt: `${page.title} — Brixs 3D render`,
  };
  if (!plan) {
    return { ...page, accent: ACCENT.blue, motif: "BRIXS", gallery: [], media: official };
  }
  return { ...page, accent: plan.accent, motif: plan.motif, media: official, gallery: plan.gallery };
});

export const pageCount = sitePages.length + 1;

export function getPageByPath(path: string[]) {
  const key = path.join("/");
  return sitePages.find((page) => page.path.join("/") === key);
}

export function getSiblingPages(page: SitePage) {
  return sitePages.filter((entry) => entry.group === page.group && entry.path.join("/") !== page.path.join("/"));
}

