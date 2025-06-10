import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import bg from "../../static/img/bg.jpg";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();

//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>

//         <img className={clsx(styles.coverImg)} src={bg} alt="" />
//       </div>
//     </header>
//   );
// }

import ColorThief from "colorthief";

// 创建一个新的 ColorThief 实例
const colorThief = new ColorThief();

// 定义一个函数来提取图片主色并设置背景颜色
const setHeaderBackground = (
  imgElement: HTMLImageElement,
  headerElement: HTMLElement
) => {
// 定义透明度值，这里设置为 0.8，你可以根据需要调整
const alpha = 0.75;
if (imgElement.complete) {
  const [r, g, b] = colorThief.getColor(imgElement);
  headerElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
} else {
  imgElement.addEventListener("load", () => {
    const [r, g, b] = colorThief.getColor(imgElement);
    headerElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  });
}
};

// 创建一个 ref 来引用 header 元素和 img 元素
import { useRef, useEffect } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const headerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (headerRef.current && imgRef.current) {
      setHeaderBackground(imgRef.current, headerRef.current);
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx("hero hero--primary", styles.heroBanner)}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <img ref={imgRef} className={clsx(styles.coverImg)} src={bg} alt="" />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
