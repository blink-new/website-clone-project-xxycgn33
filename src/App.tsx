import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => (
  <header className="bg-cream py-4">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#053146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#053146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#053146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-semibold text-lg text-blue-200">Envole</span>
        </div>
        <div className="flex items-center space-x-4">
          <DialogTrigger asChild>
            <button className="bg-blue-100 text-white font-semibold py-2 px-5 rounded-lg text-sm hover:bg-opacity-90 transition">
              Join Waitlist
            </button>
          </DialogTrigger>
          <button className="bg-gray-90 text-blue-200 font-semibold py-2 px-5 rounded-lg text-sm hover:bg-gray-100 transition">
            Talk to a Founder
          </button>
        </div>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="bg-cream text-center py-20 sm:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold text-blue-300 sm:text-6xl font-sans leading-tight">
        Cross Team Collaboration Just Got Easy
      </h1>
      <p className="mt-6 text-md text-gray-500 max-w-2xl mx-auto">
        Envole provides the first AI personal assistants for teams that are designed to automate “work about work.” These assistants work together, self-organize, and automatically keep teams aligned, acting as a true collaborative brain for the organization.
      </p>
    </div>
  </section>
);

const TeamDashboardSection = () => (
  <section className="bg-cream pb-20 sm:pb-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-orange rounded-lg blur-xl opacity-25"></div>
        <img
          className="relative rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 mx-auto"
          src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a003918__10a22037.png?alt=media&token=8b2547bd-388d-4c79-8828-50c7b04eec12"
          alt="Team Dashboard"
        />
      </div>
    </div>
  </section>
);

const FeatureSection = ({ title, description, imageUrl, imageSide = 'right' }) => (
  <section className="bg-cream py-16 sm:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
        <div className={`${imageSide === 'left' ? 'md:order-last' : ''}`}>
          <h3 className="text-3xl font-semibold font-sans text-blue-200">{title}</h3>
          <p className="mt-4 text-md text-gray-500">{description}</p>
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
    title: 'Dedicate & Customize',
    description: 'The process begins by dedicating a unique AI Personal Assistant (PA) to each team. This PA is then customized to the team\'s specific ecosystem by connecting directly to their essential tools and knowledge bases.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002417__1d132515.png?alt=media&token=c01b4e15-252a-45a9-a495-368b11e5766c',
  },
  {
    title: 'Self-Organize & Synchronize',
    description: 'Once connected, the PA automatically self-organizes the team\'s scattered knowledge and data. It listens to conversations, tracks progress, and keeps all connected systems synchronized in real-time.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002426__bf73f93c.png?alt=media&token=2d366a91-63c4-4299-94b2-e653c4748920',
  },
  {
    title: 'Embed Everywhere',
    description: 'PAs can be embedded directly into the team\'s existing workflows. It operates within the tools they already use—attending meetings, being cc\'d on emails, and participating in Slack or WhatsApp.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002421__256acda0.png?alt=media&token=5181b1b6-ceef-4f1e-9d30-ba3d204eda8c',
  },
  {
    title: 'Interact with Sub-Agents',
    description: 'Teams can further automate their work by creating specialized "sub-agents" for granular, repeatable tasks. The main Team PA is aware of these sub-agents and can delegate work to them.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002430__5eaa034f.png?alt=media&token=fe81b232-ef7e-4c9c-b334-b524033021a8',
  },
  {
    title: 'Enable Cross-Team Collaboration',
    description: 'True business velocity is unlocked when PAs communicate. This system creates a single source of collaboration, allowing one team\'s PA to call another to get instant expertise, action items, and data.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FBK2Z6FZIdyOmb9ghp9hxSriBK8L2%2FCapturedecran2025-07-24a002435__8fc9421f.png?alt=media&token=2e354222-0a75-4384-a0df-6e6ba2a6b298',
  }
];

const ReadyToTransformSection = () => (
    <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="bg-blue-100 rounded-xl p-12">
                    <h2 className="text-4xl font-semibold text-white">Ready to transform how your teams collaborate?</h2>
                    <p className="mt-4 text-white/80">Turn siloed teams into unified, high-velocity organizations. Envole adapts to your pace, supporting smarter, faster work across teams, projects, and products.</p>
                    <DialogTrigger asChild>
                        <button className="mt-8 bg-white text-blue-100 font-semibold py-2 px-5 rounded-lg text-sm hover:bg-gray-90 transition">
                            Get started
                        </button>
                    </DialogTrigger>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-200/80 text-white p-4 rounded-lg">Head of Marketing</div>
                    <div className="bg-blue-200/80 text-white p-4 rounded-lg">VP of Customer Support</div>
                    <div className="bg-blue-200/80 text-white p-4 rounded-lg">VP of Product</div>
                    <div className="bg-blue-200/80 text-white p-4 rounded-lg">VP of Sales</div>
                </div>
            </div>
        </div>
    </section>
);

const EnterpriseReadySection = () => (
    <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold text-blue-200">Envole is enterprise ready.</h2>
            <p className="mt-4 text-md text-gray-500">Transform how your teams collaborate without compromising on security</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-blue-200 text-white rounded-xl overflow-hidden">
                    <div className="p-8">
                        <h3 className="text-xl font-semibold">Safeguards</h3>
                        <p className="text-white/80">Guadrails</p>
                    </div>
                    <div className="bg-blue-100 p-8">
                        <p>Control privacy, protect PII data and what is fed to an LLM.</p>
                    </div>
                </div>
                <div className="bg-blue-200 text-white rounded-xl overflow-hidden">
                    <div className="p-8">
                        <h3 className="text-xl font-semibold">Authorization</h3>
                        <p className="text-white/80">Access Control</p>
                    </div>
                    <div className="bg-blue-100 p-8">
                        <p>Manage user permissions, credential and role-back access.</p>
                    </div>
                </div>
                <div className="bg-blue-200 text-white rounded-xl overflow-hidden">
                    <div className="p-8">
                        <h3 className="text-xl font-semibold">Coming Soon</h3>
                        <p className="text-white/80">SOC 2, GDPR, ISO27001</p>
                    </div>
                    <div className="bg-blue-100 p-8">
                        <p>Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const IntegrationsSection = () => {
    const logos = [
        "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
        "https://cdn.worldvectorlogo.com/logos/notion-1.svg",
        "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
        "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        "https://cdn.worldvectorlogo.com/logos/google-drive.svg"
    ];

    return (
        <section className="bg-cream py-16 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="font-semibold text-orange">Integrations</p>
                    <h2 className="mt-2 text-3xl font-semibold text-blue-200 sm:text-4xl">Connect with Your Favorite Tools</h2>
                </div>
                <div className="mt-12 flex justify-center items-center space-x-12">
                    {logos.map((logo, i) => (
                        <motion.img
                            key={i}
                            src={logo}
                            alt="Integration Logo"
                            className="h-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamPersonalAssistantsSection = () => {
  const assistantFeatures = [
    {
      title: 'Knowledge Base',
      description: 'Empower your AI Personal Assistants by seamlessly connecting them to your organization’s entire knowledge base.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47496 9.2464 5.60155 8.21447 6.50831C7.18254 7.41508 6.93589 8.89979 7.59327 10.0248C8.25064 11.1498 9.58338 11.685 10.8333 11.2528" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278V19.2528M12 6.25278C13.1679 5.47496 14.7536 5.60155 15.7855 6.50831C16.8175 7.41508 17.0641 8.89979 16.4067 10.0248C15.7494 11.1498 14.4166 11.685 13.1667 11.2528" />
        </svg>
      ),
    },
    {
      title: 'No Code Required',
      description: 'Build powerful AI solutions with ease using our intuitive no-code platform. Design custom workflows and integrate with existing systems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h3m-3 4h3m-3 4h3M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Pre-built Use Cases',
      description: 'Accelerate your AI initiatives with a rich library of pre-built templates and use cases. Adapt them to your specific team workflows.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Integrations',
      description: 'Unify your entire tech stack by connecting Envole with all your essential tools—from CRMs to communication platforms.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-blue-200 sm:text-4xl font-sans">
            Team Personal Assistants to Keep Your Teams Organized and Synchronized
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {assistantFeatures.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-xl border border-gray-90">
              <div className="flex items-center space-x-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-blue-200">{feature.title}</h3>
              </div>
              <p className="mt-4 text-md text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionBanner = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section className="bg-cream py-32 sm:py-48" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          style={{ scale }}
          className="bg-gradient-to-r from-blue-200 to-orange text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold">Stop the "Work About Work". Start Innovating.</h2>
          <div className="mt-8">
            <DialogTrigger asChild>
              <button className="bg-white text-blue-200 font-semibold py-3 px-6 rounded-lg text-md hover:bg-opacity-90 transition">
                Join Waitlist
              </button>
            </DialogTrigger>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-cream border-t border-gray-90">
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#053146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#053146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#053146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold text-lg text-blue-200">Envole</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">2261 Market Street STE 10154<br/>San Francisco, CA 94114</p>
          <p className="mt-8 text-sm text-gray-400">&copy;2025 Envole, Inc. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-md font-semibold text-blue-200">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-100">Terms & Conditions</a></li>
            <li><a href="#" className="text-sm text-gray-500 hover:text-blue-100">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold text-blue-200">Stay up to date</h3>
          <p className="mt-4 text-sm text-gray-500">Get the latest product updates</p>
          <form className="mt-4 flex">
            <input type="email" placeholder="jane@envole.ai" className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-orange focus:border-orange" />
            <button type="submit" className="bg-orange text-white px-4 py-2 rounded-r-md text-sm font-semibold hover:bg-opacity-90">Submit</button>
          </form>
        </div>
        <div className="flex items-end justify-between flex-col">
            <div></div>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-100">@envole</a>
                <a href="#" className="text-gray-400 hover:text-blue-100">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 21v-7h2v7h-2zm-8 0v-9h2v9h-2zm-8 0v-4h2v4H4zm1-11h2v2H5v-2zm8-2h2v4h-2v-4zm-3-2h2v6h-2V6zM9 4h2v8H9V4zM3 2h18v2H3V2z"/></svg>
                </a>
            </div>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Dialog>
      <div className="bg-cream min-h-screen font-sans text-black-100">
        <Header />
        <HeroSection />
        <TeamDashboardSection />
        <main>
          {features.map((feature, index) => (
            <FeatureSection key={index} {...feature} imageSide={index % 2 === 0 ? 'right' : 'left'} />
          ))}
        </main>
        <ReadyToTransformSection />
        <EnterpriseReadySection />
        <IntegrationsSection />
        <TeamPersonalAssistantsSection />
        <CallToActionBanner />
        <Footer />
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when Envole is available. We'll email you when we're ready.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              defaultValue="jane.doe@example.com"
              className="col-span-4"
              placeholder="Your email address"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full bg-blue-100 hover:bg-blue-100/90">Join Waitlist</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default App;
