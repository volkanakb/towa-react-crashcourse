import React from 'react';
import Sidebar from '@components/Sidebar';
import Overview from '@components/Overview';
import FlexContainer from '@styled/FlexContainer';
import { CountryProvider } from '@context/CountryContext';

const OverviewPage = ({ apiUrl, test }) => {
  return (
    <CountryProvider apiUrl={apiUrl}>
      <FlexContainer>
        <Sidebar />
        <Overview />
      </FlexContainer>
    </CountryProvider>
  );
};

/*
 * getStaticProps (SSG) vs getServerSideProps (SSR)
 * both run on the serverside. only work on page level components
 * getStaticProps - will run on build time and not on every request
 * getServerSideProps - will run on every request and will therefore be slower but always be up to date
 */
export async function getServerSideProps() {
  return {
    props: {
      apiUrl: process.env.API_URL,
    },
  };
}

export default OverviewPage;
