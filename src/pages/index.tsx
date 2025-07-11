import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import bg from "../../static/img/bg.jpg";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <img
        className="w-96 select-none absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        src={bg}
        alt=""
        draggable={false}
      />
    </Layout>
  );
}
