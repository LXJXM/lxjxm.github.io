import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import bg from "../../static/img/bg.jpg";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          alignItems: "center",
        }}
      >
        <img className={clsx(styles.coverImg)} src={bg} alt="" />
      </main>
    </Layout>
  );
}
