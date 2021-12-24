import "../styles/globals.css";
import smoothscroll from "smoothscroll-polyfill";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill();
  }

  return <Component {...pageProps} />;
}

export default MyApp;
