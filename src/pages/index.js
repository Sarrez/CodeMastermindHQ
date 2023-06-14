import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{background: "linear-gradient(315deg, rgb(146, 17, 137, 0.5) 3%, rgb(231, 211, 28, 0.5) 38%, rgb(67, 175, 73, 0.5) 68%, rgb(255, 29, 29, 0.5) 98%)" ,color: "black", textShadow: "4px 4px 8px rgba(253, 253, 253, 0.884)", padding:"3px", borderRadius:"10px"}}>Hello World!</h1>
        <p className="hero__subtitle" style={{background: "linear-gradient(315deg, rgb(146, 17, 137, 0.5) 3%, rgb(231, 211, 28, 0.5) 38%, rgb(67, 175, 73, 0.5) 68%, rgb(255, 29, 29, 0.5) 98%)",color: "#fff", textShadow:"2px 2px 4px #000", padding:"3px", borderRadius:"10px"}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"  
            to="/docs/intro"
          ><img src="https://raw.githubusercontent.com/aemmadi/aemmadi/master/wave.gif" width="30px" height="30px"></img>
            CodeMasterMindHQ Tutorials! - 10min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Master Your Coding Craft`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
