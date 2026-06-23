const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'products/ledgers', title: 'Brixs Ledgers', kicker: 'Private Transactions', subtitle: 'Secure, private transactions for your enterprise.' },
  { path: 'products/mcp', title: 'Brixs MCP', kicker: 'Agent Wallets', subtitle: 'Give your AI agents a fully functional wallet.' },
  { path: 'solutions/trading', title: 'Trading', kicker: 'Tokenize Assets', subtitle: 'Tokenize real-world assets efficiently.' },
  { path: 'solutions/payments', title: 'Payments', kicker: 'Fast Settlement', subtitle: 'Fast, low cost, always-on payments network.' },
  { path: 'solutions/agents', title: 'Agents', kicker: 'Autonomous Commerce', subtitle: 'Enable autonomous commerce with Brixs.' },
  { path: 'ecosystem/explore', title: 'Explore', kicker: 'Discover Brixs', subtitle: 'Discover the rapidly growing Brixs ecosystem.' },
  { path: 'ecosystem/funding', title: 'Get Funded', kicker: 'Grants & Programs', subtitle: 'Grants, accelerators, and funding programs.' },
  { path: 'ecosystem/batches', title: 'Brixs Batches', kicker: 'Opportunities', subtitle: 'Opportunities to get funded and scale.' },
  { path: 'resources/vision', title: 'Vision', kicker: 'Our Mission', subtitle: 'Our mission and roadmap for the future.' },
  { path: 'resources/jobs', title: 'Jobs', kicker: 'Join Us', subtitle: 'Join the team building the future of Brixs.' },
  { path: 'resources/blog', title: 'Blog', kicker: 'News & Updates', subtitle: 'News and updates from the Brixs ecosystem.' },
  { path: 'resources/brand', title: 'Brand Guidelines', kicker: 'Assets', subtitle: 'Logos, colors, and design guidelines.' },
  { path: 'developers/cli', title: 'Brixs CLI', kicker: 'Developer Tools', subtitle: 'Local testnets and developer tools.' },
];

const template = (p) => `import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <main id="top" className="brx">
      <section className="brx-hero" style={{ paddingBottom: '4rem', minHeight: 'calc(100svh - 72px)' }}>
        <div className="brx-hero-copy">
          <p className="brx-kicker"><b /> ${p.kicker}</p>
          <h1>${p.title.replace('Brixs', '<em>Brixs</em>')}</h1>
          <p>${p.subtitle}</p>
          <div className="brx-buttons">
            <Link className="brx-dark-btn" href="/docs">Read documentation <ArrowRight size={15} /></Link>
            <Link className="brx-light-btn" href="/cli">Start building</Link>
          </div>
        </div>
        <div className="brx-hero-art">
          <div className="brx-art-grid" />
          <div className="brx-orbit one" />
          <div className="brx-orbit two" />
          <div className="brx-orbit three" />
          <div className="brx-video-disc">
            <video src="/brixs-assets/architecture-motion.mp4" autoPlay loop muted playsInline />
          </div>
          <div className="brx-float floata"><ArrowRight size={20} /></div>
          <div className="brx-float floatb"><ArrowRight size={20} /></div>
          <div className="brx-readout">
            <span>NETWORK SURFACE</span>
            <i></i>
            ${p.title.toUpperCase()}
          </div>
          <p>ACTIVE</p>
        </div>
      </section>
    </main>
  );
}
`;

pages.forEach(p => {
  const dir = path.join(__dirname, 'src', 'app', p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p));
  console.log(`Created ${p.path}`);
});
