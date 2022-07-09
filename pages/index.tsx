import * as React from 'react';
import type { NextPage } from 'next';

// Organisms
import Link from '@components/organisms/Link';

// Template
import Layout from '@components/template/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">      
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Layout>
  );
};

export default Home;
