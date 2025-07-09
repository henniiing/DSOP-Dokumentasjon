import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="DSOP Dokumentasjon - Digital Samhandling Offentlig-Privat">
      <main>
        {/* Content will be added here */}
      </main>
    </Layout>
  );
}
