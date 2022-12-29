import React from "react";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Hero, Button } from "@algolia/ui-library";
import Layout from "@theme/Layout";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import WavesHeader from "@site/src/components/HomepageFeatures/WavesHeader";

function HomepageHeader() {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div className="uil-pb-24 min-h-screen">
      <WavesHeader />
      <div>
        <div className="px-8 pt-40 mb-20 lg:px-28 lg:py-76">
          <h1 className="mt-50 text-white text-5xl sm:text-8xl break-normal">
            Fexr ship <br />
            trust with <br />
            trustless <br />
            trade
          </h1>
        </div>
      </div>
      <Hero
        cta={[
          <Button key="get-started" href={withBaseUrl("learn/roadmap")}>
            Get started
          </Button>,
          <Button
            key="apply"
            href={withBaseUrl(
              "blog/Announcing%20Fluir%20release%20-%20Connect%20Fexr"
            )}
            // href={withBaseUrl("apply")}
            background="green"
            color="white"
            className="apply-button"
          >
            New for 2023 blog
          </Button>,
        ]}
      />
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout wrapperClassName="tailwind" description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
