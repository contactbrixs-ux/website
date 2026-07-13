import type { Metadata } from "next";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brixs Chain | Zero-Gas Layer 2 Blockchain for the Next Billion Users",
  description: "Brixs Chain is an institutional-grade, zero-gas ZK-Rollup Layer 2 blockchain built for mass adoption. Native Account Abstraction, instant finality, and seamless EVM compatibility. Build the future of Web3.",
  keywords: "Brixs Chain, zero gas blockchain, layer 2 blockchain, ZK rollup, account abstraction, EVM compatible, DPoS blockchain, web3, crypto, DeFi, NFT, smart contracts, Ethereum L2, gasless transactions, blockchain infrastructure",
  authors: [{ name: "Brixs Chain", url: "https://www.brixs.space" }],
  creator: "Brixs Chain",
  publisher: "Brixs Chain",
  metadataBase: new URL("https://www.brixs.space"),
  alternates: { canonical: "https://www.brixs.space/" },
  openGraph: {
    title: "Brixs Chain | Zero-Gas L2 Blockchain",
    description: "🚀 The world's first zero-gas Layer 2 blockchain. Native Account Abstraction. Instant finality. EVM compatible. Build dApps for the next billion users. No gas. No friction. Just build.",
    url: "https://www.brixs.space",
    siteName: "Brixs Chain",
    images: [{ url: "/assets/og/home.png", width: 1200, height: 630, alt: "Brixs Chain — Zero-Gas Layer 2 Blockchain" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BrixsChain",
    creator: "@BrixsChain",
    title: "Brixs Chain | Zero-Gas L2 Blockchain",
    description: "🔥 Zero-gas Layer 2 blockchain is LIVE! Native AA, instant finality, EVM compatible. Build the future of Web3.",
    images: [{ url: "/assets/og/home.png", alt: "Brixs Chain" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-[#000000] dark:text-[#f4f1ea] antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
