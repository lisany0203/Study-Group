// pages/_app.tsx
import type { AppProps } from 'next/app';
// Import your global CSS file. Ensure this path is correct relative to this file.
// It will usually be one level up, then into src/app.
import '../src/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // This Component prop is the actual page being rendered (e.g., Login, Signup)
  return <Component {...pageProps} />;
}

export default MyApp;
