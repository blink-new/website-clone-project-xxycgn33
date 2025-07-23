
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

function App() {
  return (
    <div className="bg-cream min-h-screen font-sans">
      <Header />
      <TeamDashboardSection />
      <IntegrationsSection />
      <main>
        {features.map((feature, index) => (
          <FeatureSection key={index} {...feature} imageSide={index % 2 === 0 ? 'right' : 'left'} />
        ))}
      </main>
    </div>
  );
}

export default App;
