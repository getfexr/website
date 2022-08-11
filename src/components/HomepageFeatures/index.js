import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const placeholderSvg = require('@site/static/img/undraw_docusaurus_mountain.svg').default;

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: placeholderSvg,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: placeholderSvg,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the
        {' '}
        <code>docs</code>
        {' '}
        directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: placeholderSvg,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  Feature.propTypes = {
    Svg: PropTypes.instanceOf(SVGSVGElement).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  return (
    <div className={clsx('col col--4')}>
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

function Description() {
  return (
    <div className="py-2 overflow-hidden">
      <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="relative">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
            Crypto Wallet and On-Chain Verifiable Claims using DID.
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-description">
            Get your decentralized wallet that can be used to store and verify claims,
            RBT and more with your decentralized identity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Description />
        <div className="row mt-0">
          {FeatureList.map((feature) => (
            <Feature
              key={feature.title}
              Svg={feature.Svg}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
