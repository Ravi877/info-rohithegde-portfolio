// pages/index.js
import Layout from '../components/Layout';
import Image from 'next/image';
import { FiLinkedin, FiMail } from 'react-icons/fi'; // Icons for a professional touch.

/**
 * The main Home Page component for the portfolio.
 * It's a single-page layout containing multiple sections that users can scroll to.
 */
export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* --- Hero Section --- */}
        {/* This is the first thing a visitor sees. It's designed to be impactful and clearly state who you are and what you do. */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-16">
          <div className="w-full">
            {/* Each element has a staggered fade-in animation for a dynamic entry effect. */}
            <span className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-white/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.3em] text-green shadow-sm animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
              Finance & Analytics
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate mt-6 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>Rohit Hegde.</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate mt-3 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>I build value through finance.</h2>
            <p className="max-w-2xl mt-6 text-lg text-light-slate animate-fade-in-up" style={{ animationDelay: '400ms', opacity: 0 }}>
              I'm an MBA Finance graduate with a passion for capital markets, investment research, and trading strategies. I specialize in financial analysis and risk management, turning data into actionable insights.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
              <a href="#projects" className="rounded-full bg-green px-8 py-4 font-mono text-sm uppercase tracking-widest text-white shadow-lg shadow-green/30 hover:bg-green/90 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-black/10 bg-white/70 px-8 py-4 font-mono text-sm uppercase tracking-widest text-lightest-slate hover:border-green/50 hover:text-green transition-colors">
                Let's Connect
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 max-w-xl">
              <div className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-bold text-lightest-slate">3+</p>
                <p className="text-sm text-light-slate">Finance & Analytics Projects</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-bold text-lightest-slate">150+</p>
                <p className="text-sm text-light-slate">Survey Responses Analyzed</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- About Section --- */}
        {/* This section provides more detail about your background and skills. */}
        <section id="about" className="py-24">
          <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
            <span className="text-green font-mono mr-4">01.</span> About Me
            {/* A decorative line to visually separate the heading. */}
            <span className="flex-grow h-px bg-lightest-navy/50 ml-6"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3 text-lg text-light-slate space-y-4">
              <p>
                As an MBA Finance graduate from Dayananda Sagar University, I have a solid foundation in taxation, accounting, financial analysis, and risk management. I am proficient in tools like MS Excel and Tableau and have practical experience with API integrations for financial applications.
              </p>
              <p>
                My goal is to apply my analytical skills in capital markets and investment research to contribute to a dynamic organization. Here are a few of the key areas I'm skilled in:
              </p>
              {/* A list of skills for quick scanning. */}
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm mt-4">
                <li className="flex items-center"><span className="text-green mr-2">▹</span>Technical Analysis</li>
                <li className="flex items-center"><span className="text-green mr-2">▹</span>Fundamental Analysis</li>
                <li className="flex items-center"><span className="text-green mr-2">▹</span>Data analysis</li>
                <li className="flex items-center"><span className="text-green mr-2">▹</span>Risk Management</li>
                <li className="flex items-center"><span className="text-green mr-2">▹</span>Derivatives (F&O)</li>
                <li className="flex items-center"><span className="text-green mr-2">▹</span>Excel & Tableau</li>
              </ul>
            </div>
            {/* Profile Image with a creative border effect that animates on hover. */}
            <div className="md:col-span-2 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green/30 to-lightest-navy/70 rounded-2xl transform transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-black/10 bg-white/50">
                  <Image src="/Gemini_Generated_Image_f28a9ef28a.png" alt="Rohit Hegde" layout="fill" objectFit="cover" className="filter grayscale group-hover:filter-none transition-all" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        {/* Highlights your most relevant professional experience. */}
        <section id="experience" className="py-24">
          <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
            <span className="text-green font-mono mr-4">02.</span> Where I’ve Worked
            <span className="flex-grow h-px bg-lightest-navy/50 ml-6"></span>
          </h2>
          <div className="bg-white/80 border border-black/5 p-8 rounded-2xl shadow-[0_20px_60px_-40px_rgba(249,115,22,0.35)] backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-lightest-slate">Tax Analyst @ EY GDS</h3>
                <span className="rounded-full border border-green/40 bg-white/80 px-4 py-1 text-xs font-mono uppercase tracking-[0.2em] text-green">
                  Current
                </span>
              </div>
              <p className="font-mono text-sm text-light-slate mt-1 mb-4">June 2025 - Present</p>
              <ul className="space-y-3 text-light-slate">
                  <li className="flex items-start"><span className="text-green mr-4 mt-1">▹</span>Prepare and review tax filings, ensuring timely compliance with statutory requirements.</li>
                  <li className="flex items-start"><span className="text-green mr-4 mt-1">▹</span>Analyze financial statements and transaction data to support accurate tax computations.</li>
                  <li className="flex items-start"><span className="text-green mr-4 mt-1">▹</span>Collaborate with cross-functional teams to resolve tax queries and maintain audit-ready documentation.</li>
              </ul>
          </div>
        </section>

        {/* --- Projects Section --- */}
        {/* Showcases your key projects to demonstrate practical skills. */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
            <span className="text-green font-mono mr-4">03.</span> Things I’ve Built
            <span className="flex-grow h-px bg-lightest-navy/50 ml-6"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white/80 border border-black/5 p-6 rounded-2xl shadow-[0_20px_60px_-40px_rgba(249,115,22,0.25)] hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold text-lightest-slate mb-2">Trading Notification System</h3>
              <p className="text-light-slate mb-4">
                An automated system that integrates the Angel One SmartAPI with a Telegram bot to send real-time trade alerts without auto-executing trades.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-sm text-green">
                <span>Angel One API</span>
                <span>Telegram Bot</span>
                <span>Python</span>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white/80 border border-black/5 p-6 rounded-2xl shadow-[0_20px_60px_-40px_rgba(249,115,22,0.25)] hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold text-lightest-slate mb-2">Investment Behaviour Analysis</h3>
              <p className="text-light-slate mb-4">
                A research project analyzing the saving, budgeting, and investing habits of young Indians by surveying over 150 participants.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-sm text-green">
                <span>Microsoft Excel</span>
                <span>Data Analysis</span>
                <span>Spearman's Correlation</span>
              </div>
            </div>
            {/* Project Card 3 (Your Blog) */}
            <div className="bg-white/80 border border-black/5 p-6 rounded-2xl shadow-[0_20px_60px_-40px_rgba(249,115,22,0.25)] hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold text-lightest-slate mb-2">Personal Blog & CMS</h3>
              <p className="text-light-slate mb-4">
                A modern, static-generated blog built with Next.js and styled with Tailwind CSS, featuring a headless CMS for easy content management.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-sm text-green">
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>Markdown</span>
                <span>Decap CMS</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        {/* A clear call-to-action for visitors to get in touch with you. */}
        <section id="contact" className="py-24 text-center">
            <div className="bg-white/80 border border-black/5 rounded-3xl px-6 py-14 shadow-[0_30px_80px_-50px_rgba(249,115,22,0.3)]">
              <h2 className="text-2xl font-bold text-lightest-slate mb-4 flex items-center justify-center">
                  <span className="text-green font-mono mr-4">04.</span> What's Next?
              </h2>
              <h3 className="text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
              <p className="max-w-xl mx-auto text-light-slate mb-8">
                  I'm currently looking for new opportunities to apply my knowledge in finance and analytics. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              <a href="mailto:hegderohit63@gmail.com" className="rounded-full bg-green px-8 py-4 font-mono text-sm uppercase tracking-widest text-white shadow-lg shadow-green/30 hover:bg-green/90 transition-colors">
                  Say Hello
              </a>
            </div>
        </section>

      </div>
    </Layout>
  );
}
