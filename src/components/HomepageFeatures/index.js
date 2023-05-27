import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/into.svg").default,
    description: (
      <>
        Seamlessly navigate our user-friendly interface and enjoy a hassle-free coding experience. Unlock your potential at CodeMastermindHQ.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/focus-2.svg").default,
    description: (
      <>
        Simplify your coding process and focus on what truly matters for efficient development. 
        Experience it at CodeMastermindHQ.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/react.svg").default,
    description: (
      <>
        Harness the power of React to build dynamic, high-performance web applications. 
        Discover the React advantage at CodeMastermindHQ.
      </>
    ),
  },
  {
    title: "Daily Coding",
    Svg: require("@site/static/img/focus-3.svg").default,
    description: (
      <>
        Cultivate your skills with daily coding challenges and stay ahead of the curve. 
        Embrace the journey of continuous improvement at CodeMastermindHQ.
      </>
    ),
  },
  {
    title: "Developers",
    Svg: require("@site/static/img/devloper.svg").default,
    description: (
      <>
        Join a vibrant community of passionate developers and exchange knowledge to fuel your growth. 
        Connect with fellow coders at CodeMastermindHQ.
      </>
    ),
  },
  {
    title: "Learning",
    Svg: require("@site/static/img/learning.svg").default,
    description: (
      <>
        Embark on a transformative learning journey with concise, impactful educational resources. 
        Unlock your coding potential at CodeMastermindHQ.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
