import Layout from '@theme/Layout';
import React from 'react';

import ApplyForm from '@site/src/components/ApplyForm';
import WavesHeader from '../components/HomepageFeatures/WavesHeader';

function ApplyPage() {
  return (
    <Layout>
      <div className="grid h-min-screen place-items-center py-10">
        <WavesHeader />
        <ApplyForm />
      </div>
    </Layout>
  );
}

export default ApplyPage;
