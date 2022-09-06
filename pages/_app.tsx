import type { AppProps } from "next/app";
import "../styles/compiled-styles/landingpage.css";
import "../styles/compiled-styles/login.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
