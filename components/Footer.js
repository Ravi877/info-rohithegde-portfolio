// components/Footer.js

// We import icons from the 'react-icons' library for a professional look.
import { FiLinkedin, FiMail } from 'react-icons/fi';

/**
 * The site-wide footer. It contains links to your professional profiles and a standard copyright notice.
 * It's designed to be simple and unobtrusive.
 */
export default function Footer() {
  return (
    <footer className="bg-navy border-t border-lightest-navy/10">
      <div className="max-w-7xl mx-auto py-8 px-6 sm:px-8 lg:px-12 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
           {/* LinkedIn icon that links to your LinkedIn profile. */}
          <a href="https://www.linkedin.com/in/27rohit/" target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors">
            <FiLinkedin size={24} />
          </a>
          {/* Email icon that opens the user's default email client. */}
          <a href="mailto:hegderohit63@gmail.com" className="text-light-slate hover:text-green transition-colors">
            <FiMail size={24} />
          </a>
        </div>
        <p className="text-slate font-mono text-sm">
          &copy; {new Date().getFullYear()} Rohit Hegde. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}