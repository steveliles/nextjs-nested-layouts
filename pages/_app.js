import { useEffect } from "react";
import Link from "next/link";
import "../styles/globals.css";
import styles from "../styles/App.module.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("App layout mounted");
    return () => console.log("App layout unmounted");
  }, []);
  return (
    <div className={styles.main}>
      <header>
        <h1>Sporty McSportface</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Layout Component={Component} pageProps={pageProps} />
      </section>
      <footer>Thats all folks</footer>
    </div>
  );
}

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
