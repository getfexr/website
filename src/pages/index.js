import React from 'react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Hero, Button } from '@algolia/ui-library';
import Layout from '@theme/Layout';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div className="uil-pb-24">
      <div className="hero">
        <div className="hero__content px-8 py lg:px-28 lg:py-76">
          <h1 className="mt-50 text-black text-4xl sm:text-8xl xl:text-9xl break-normal">
            Your priv** keys only
            in your pocket.
          </h1>
        </div>
      </div>
      <Hero
        id="hero-apply"
        background="orbInside"
        cta={[
          <Button
            key="get-started"
            href={withBaseUrl('docs/what-is-docsearch')}
          >
            Get started
          </Button>,
          <Button
            key="apply"
            href={withBaseUrl('apply')}
            background="blue"
            color="white"
            className="apply-button"
          >
            Apply
          </Button>,
        ]}
      />
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      wrapperClassName="tailwind"
      description={`${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
