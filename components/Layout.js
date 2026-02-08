// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

/**
 * A reusable layout component that wraps every page, providing a consistent structure.
 * It includes the <Head> for SEO, the site Header, the main content, and the Footer.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The main content of the page passed from other components.
 */
export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-navy">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-green/20 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-lightest-navy/60 blur-3xl"></div>
      <Head>
        {/* The title that appears in the browser tab. It's crucial for SEO. */}
        <title>Rohit Hegde | Finance & Business Analytics</title>
        {/* The meta description that appears in search engine results. */}
        <meta
          name="description"
          content="Portfolio of Rohit Hegde, an MBA in Finance and Business Analytics with a passion for capital markets, investment research, and modern web technologies."
        />
        {/* The small icon that appears in the browser tab (favicon). */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Renders the site's main header component on every page. */}
      <Header />

      {/* This is the main content area where page-specific components will be rendered. */}
      {/* 'flex-grow' is a utility class that makes this element take up all available vertical space, pushing the footer down. */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Renders the site's main footer component on every page. */}
      <Footer />
    </div>
  );
}
