// pages/_app.js

// This line imports the global stylesheet that applies to every page on the site.
import '../styles/globals.css';

// This is the root component that Next.js uses to initialize pages.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;