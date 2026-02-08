// components/Header.js
import Link from 'next/link';

/**
 * The main header for the site. It's designed to be "sticky," so it stays at the top
 * of the screen when the user scrolls. It includes navigation links that scroll smoothly
 * to different sections of the page, providing an excellent user experience.
 */
export default function Header() {
  // An array of navigation links. This makes it easy to manage and render them dynamically.
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Interests', href: '#interests' },
    { name: 'Highlight', href: '#highlight' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Site Logo/Name: A link that scrolls the user back to the top of the page. */}
          <div className="flex-shrink-0">
            <Link href="#hero" className="text-2xl font-bold text-lightest-slate hover:text-green transition-colors">
              RH<span className="text-green">.</span>
            </Link>
          </div>
          {/* Desktop Navigation Links: Hidden on smaller screens (md) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* We map over the navLinks array to render each link. */}
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lightest-slate hover:text-green transition-colors font-mono text-sm tracking-wide"
              >
                {/* Adding numbered prefixes gives it a classic developer portfolio feel. */}
                <span className="text-green mr-1">0{index + 1}.</span>
                {link.name}
              </a>
            ))}
             {/* A styled link to your resume. It opens in a new tab for convenience. */}
            <a
              href="/Rohit Hegde.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-white bg-green rounded-full px-5 py-2 shadow-lg shadow-green/20 hover:bg-green/90 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
