type MediaType = "image" | "video";

export type SitePage = {
  path: string[];
  group: "solutions" | "use-cases" | "docs" | "community" | "use-brixs" | "company" | "legal";
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  bullets: string[];
  stats: Array<[string, string]>;
  media: {
    type: MediaType;
    src: string;
    alt: string;
  };
};

export type SiteSection = {
  key: SitePage["group"];
  title: string;
  description: string;
};

const video = "/brixs-assets/architecture-motion.mp4";
const zeroGas = "/brixs-assets/zero-gas-portal.jpeg";
const agentSphere = "/brixs-assets/agent-node-sphere.jpeg";
const ringStation = "/brixs-assets/hexagonal-ring-station.jpeg";
const dataCubes = "/brixs-assets/stacked-data-cubes-terminal.jpeg";

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

export const sitePages: SitePage[] = [
  {
    path: ["solutions", "l2-chain"],
    group: "solutions",
    title: "Brixs L2 Chain",
    eyebrow: "Core execution layer",
    summary: "A calm, high-throughput chain design for builders who want speed without visual noise.",
    detail:
      "The network homepage and product surfaces both point here: one fast layer for payments, DeFi, games, and application-specific settlement.",
    bullets: [
      "Low-latency execution with a clear builder-first UX.",
      "Designed around predictable fees and simple onboarding.",
      "Supports the product layer around wallets, bridge, and explorer.",
    ],
    stats: [
      ["2s", "target finality"],
      ["EVM", "compatible surface"],
      ["AA", "native support"],
    ],
    media: { type: "video", src: video, alt: "Brixs chain motion preview" },
  },
  {
    path: ["solutions", "crosschain-interop"],
    group: "solutions",
    title: "Crosschain Interop",
    eyebrow: "Liquidity routing",
    summary: "Bridge flows and cross-chain paths that keep value moving without a complicated UI.",
    detail:
      "This page frames the interop story: one network voice, one routing layer, and less cognitive overhead for users crossing ecosystems.",
    bullets: [
      "Bridge-first UX for deposits and withdrawals.",
      "Clear routes for Ethereum, Brixs, and future partner chains.",
      "Built to feel familiar to users coming from Polygon, Base, and Solana.",
    ],
    stats: [
      ["1", "routing surface"],
      ["24/7", "liquidity access"],
      ["UX", "simplified steps"],
    ],
    media: { type: "image", src: ringStation, alt: "Hexagonal ring station architecture" },
  },
  {
    path: ["solutions", "wallet-infrastructure"],
    group: "solutions",
    title: "Wallet Infrastructure",
    eyebrow: "Account abstraction",
    summary: "Gas sponsorship, session keys, and safer onboarding for the next wave of users.",
    detail:
      "The wallet story is deliberately quiet: simple account flows, developer-friendly signing, and a product experience that reduces friction.",
    bullets: [
      "Sponsor gas for onboarding and high-frequency actions.",
      "Session-based permissions for apps and agent flows.",
      "The right foundation for consumer and enterprise wallets.",
    ],
    stats: [
      ["AA", "native flow"],
      ["0", "extra prompts"],
      ["Safe", "session keys"],
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
    title: "Brixs AggLayer",
    eyebrow: "Liquidity aggregation",
    summary: "A cleaner way to surface unified liquidity across connected chains.",
    detail:
      "The visual system treats liquidity like a network of connected surfaces: one story, many routes, minimal confusion.",
    bullets: [
      "Aggregation-first mental model for app developers.",
      "Makes bridging feel like a native network behavior.",
      "Pairs naturally with the portal and scan products.",
    ],
    stats: [
      ["Unified", "routes"],
      ["Cross-chain", "liquidity"],
      ["One view", "for users"],
    ],
    media: { type: "video", src: video, alt: "Motion preview for aggregated liquidity" },
  },
  {
    path: ["solutions", "vaultbridge"],
    group: "solutions",
    title: "Vaultbridge",
    eyebrow: "Asset movement",
    summary: "Bridge design that keeps the product feeling institutional rather than noisy.",
    detail:
      "Vaultbridge is framed as the practical path for moving assets while keeping the visuals and language easy to follow.",
    bullets: [
      "Built for stablecoins, treasury flows, and partner integrations.",
      "Designed to feel simple on the surface and serious underneath.",
      "A bridge experience that belongs in a premium chain brand.",
    ],
    stats: [
      ["Vault", "safe routes"],
      ["Bridge", "core rail"],
      ["Flows", "traceable"],
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
    title: "Agentic AI",
    eyebrow: "Autonomous actions",
    summary: "Wallet permissions, execution rules, and chain access for agent-driven products.",
    detail:
      "The chain narrative extends beyond humans: the design gives AI agents a sane way to act on-chain without turning the UI into a cockpit.",
    bullets: [
      "Session keys and scoped permissions for agents.",
      "Clear execution rails for tooling and orchestration.",
      "Well suited to autonomous finance and operations.",
    ],
    stats: [
      ["Agent", "ready"],
      ["Scoped", "permissions"],
      ["Chain", "native"],
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
    title: "Agent CLI",
    eyebrow: "Operator tooling",
    summary: "Command-line power for users and agents that need on-chain control.",
    detail:
      "This product page turns the CLI into a premium first-class experience, not a hidden utility.",
    bullets: [
      "Sign, bridge, monitor, and automate from the terminal.",
      "Great for power users and AI-driven ops.",
      "Matches the more technical side of the brand.",
    ],
    stats: [
      ["CLI", "native"],
      ["Agents", "supported"],
      ["Power", "users"],
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

export const pageCount = sitePages.length + 1;

export function getPageByPath(path: string[]) {
  const key = path.join("/");
  return sitePages.find((page) => page.path.join("/") === key);
}

export function getSiblingPages(page: SitePage) {
  return sitePages.filter((entry) => entry.group === page.group && entry.path.join("/") !== page.path.join("/"));
}

