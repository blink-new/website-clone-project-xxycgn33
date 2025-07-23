import React from 'react';

const Header = () => (
  <header className="bg-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <img src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002435__8fc9421f.png?alt=media&token=2e354222-0a75-4384-a0df-6e6ba2a6b298" alt="Envole Logo" className="h-8 w-auto" />
          <span className="font-semibold text-blue-200">Envole</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-100">Introducing Envole for Teams</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-100 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition">
            Join Waitlist
          </button>
          <button className="bg-gray-90 text-blue-200 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
            Talk to a Founder
          </button>
        </div>
      </div>
      <div className="text-center py-16 sm:py-24">
        <h1 className="text-5xl font-bold text-blue-300 sm:text-6xl md:text-7xl font-sans">
          Cross Team Collaboration Just Got Easy
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          The one place for your team to plan, track, and manage any type of work. Get started for free today.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-100 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition">
            Get Started
          </button>
          <button className="bg-gray-90 text-blue-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </header>
);

const TeamDashboardSection = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-200 sm:text-5xl font-sans">A Smarter Way for Teams to Work Together</h2>
        <p className="max-w-2xl mt-4 mx-auto text-xl text-gray-500">
          Envole gives your team a unified workspace to collaborate, communicate, and conquer any project.
        </p>
      </div>
      <div className="mt-12">
        <img
          className="rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 mx-auto"
          src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a003918__10a22037.png?alt=media&token=8b2547bd-388d-4c79-8828-50c7b04eec12"
          alt="Team Dashboard"
        />
      </div>
    </div>
  </section>
);

const IntegrationsSection = () => {
  const integrations = [
    { name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
    { name: 'Notion', logo: 'https://cdn.worldvectorlogo.com/logos/notion-1.svg' },
    { name: 'GitHub', logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
    { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg' },
    { name: 'Linear', logo: 'https://cdn.worldvectorlogo.com/logos/linear-1.svg' },
    { name: 'Confluence', logo: 'https://cdn.worldvectorlogo.com/logos/confluence-1.svg' },
    { name: 'Google Drive', logo: 'https://cdn.worldvectorlogo.com/logos/google-drive.svg' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-200">Integrations</h2>
          <p className="mt-2 text-lg text-gray-500">Envole connects with the tools your team already uses.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex justify-center items-center p-4 bg-gray-90 rounded-lg shadow-sm hover:shadow-lg transition">
              <img src={integration.logo} alt={integration.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ sectionNumber, title, description, imageUrl, tags, imageSide = 'right' }) => (
  <section className="py-16 sm:py-24 bg-blue-300 text-white transform hover:scale-105 transition-transform duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
        <div className={`${imageSide === 'left' ? 'md:order-last' : ''}`}>
          <p className="text-blue-100 font-bold text-2xl">{sectionNumber}</p>
          <h3 className="mt-2 text-4xl font-bold font-sans text-white">{title}</h3>
          <p className="mt-4 text-lg text-gray-300">{description}</p>
          <div className="mt-6">
            <button className="border border-gray-600 rounded-full py-2 px-6 text-gray-300 hover:bg-gray-700 transition">
              {tags.join(' ')}
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src={imageUrl} alt={title} className="rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  </section>
);

const features = [
  {
    sectionNumber: '01',
    title: 'Dedicate & Customize',
    description: 'Each team gets a dedicated AI Personal Assistant that connects to their specific tools (like Jira, Slack, Notion) and their knowledge bases (like Confluence, Google Drive).',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002417__1d132515.png?alt=media&token=c01b4e15-252a-45a9-a495-368b11e5766c',
    tags: ['Product PA', '↔', 'Engineering PA', '↔', 'Design PA'],
    imageSide: 'right'
  },
  {
    sectionNumber: '02',
    title: 'Embed Everywhere',
    description: 'The PA can be embedded anywhere the team already works; in meetings, emails, Slack, and WhatsApp, to bring intelligence directly into their existing workflows.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002421__256acda0.png?alt=media&token=5181b1b6-ceef-4f1e-9d30-ba3d204eda8c',
    tags: ['Slack', '↔', 'Meetings', '↔', 'Email'],
    imageSide: 'left'
  },
  {
    sectionNumber: '03',
    title: 'Self-Organize & Synchronize',
    description: 'The Personal Assistant self-organizes team knowledge and data, keeping all connected systems synchronized automatically.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002426__bf73f93c.png?alt=media&token=2d366a91-63c4-4299-94b2-e653c4748920',
    tags: ['Auto-sync and organise across all workflows'],
    imageSide: 'right'
  },
  {
    sectionNumber: '04',
    title: 'Interact with Sub-Agents',
    description: "The Team PA interacts with custom 'sub-agents' created by the team for granular tasks (e.g. content creation, PRD drafting).",
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002430__5eaa034f.png?alt=media&token=fe81b232-ef7e-4c9c-b334-b524033021a8',
    tags: ['Content Creator PA', '↔', 'PRD Drafter PA'],
    imageSide: 'left'
  },
  {
    sectionNumber: '05',
    title: 'Enable Cross-Team Collaboration',
    description: 'This creates a single source of collaboration, allowing different Team PAs to communicate with each other (e.g. @product calling @legal) to break down silos.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002435__8fc9421f.png?alt=media&token=2e354222-0a75-4384-a0df-6e6ba2a6b298',
    tags: ['@marketing', '↔', '@product', '↔', '@legal', '↔', '@sales'],
    imageSide: 'right'
  }
];

const Footer = () => (
  <footer className="bg-blue-300 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Product</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-orange transition">Features</a></li>
            <li><a href="#" className="hover:text-orange transition">Integrations</a></li>
            <li><a href="#" className="hover:text-orange transition">Pricing</a></li>
            <li><a href="#" className="hover:text-orange transition">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-orange transition">About</a></li>
            <li><a href="#" className="hover:text-orange transition">Blog</a></li>
            <li><a href="#" className="hover:text-orange transition">Careers</a></li>
            <li><a href="#" className="hover:text-orange transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-orange transition">Help Center</a></li>
            <li><a href="#" className="hover:text-orange transition">API Docs</a></li>
            <li><a href="#" className="hover:text-orange transition">System Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange transition">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.438 2.865 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange transition">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange transition">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.438 2.865 8.229 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center">
        <p className="text-base text-gray-400">&copy; 2025 Envole, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-cream min-h-screen font-sans">
      <Header />
      <TeamDashboardSection />
      <main>
        {features.map((feature, index) => (
          <FeatureSection key={index} {...feature} imageSide={index % 2 === 0 ? 'right' : 'left'} />
        ))}
      </main>
      <IntegrationsSection />
      <Footer />
    </div>
  );
}

export default App;