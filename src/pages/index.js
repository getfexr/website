import React from 'react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Hero, Button } from '@algolia/ui-library';
import Layout from '@theme/Layout';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FexrLogo from '../components/FexrLogo';

function HomepageHeader() {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div className="uil-pb-24">
      <Hero
        id="hero-apply"
        title=<FexrLogo width="50%" />
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
