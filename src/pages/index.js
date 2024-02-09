import React from 'react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import WavesHeader from '@site/src/components/HomepageFeatures/WavesHeader';
import HomeHeader from '@site/src/components/HomeHeader';

function HomepageHeader() {
  return (
    <div className="uil-pb-24 min-h-screen">
      {/* <WavesHeader /> */}
      <HomeHeader />
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
