import React, { useContext } from 'react';
import { CountryContext } from '@context/CountryContext';
import FlexContainer from '@styled/FlexContainer';
import StyledOverview from '@styled/StyledOverview';
import Card from '@styled/Card';

const Overview = props => {
  const { countryData, loading, error } = useContext(CountryContext);

  if (error) {
    return (
      <FlexContainer direction="column" flex={5}>
        <h2>Oops ! something went wrong while loading...</h2>
      </FlexContainer>
    );
  }

  if (loading) {
    return (
      <FlexContainer direction="column" flex={5}>
        <h2>loading data...</h2>
      </FlexContainer>
    );
  }

  const { currentCountry } = countryData;

  return (
    <FlexContainer direction="column" flex={5}>
      <h1>Corona Virus Stats in {currentCountry.name}</h1>
      <h2>Last update: {currentCountry.lastUpdate}</h2>
      <StyledOverview>
        <Card>
          <h4>Confirmend Cases</h4>
          <p>{currentCountry.confirmed.value}</p>
        </Card>
        <Card recovery>
          <h4>Confirmed Recoveries</h4>
          <p>{currentCountry.recovered.value}</p>
        </Card>
        <Card death>
          <h4>Confirmed Deaths</h4>
          <p>{currentCountry.deaths.value}</p>
        </Card>
      </StyledOverview>
    </FlexContainer>
  );
};

export default Overview;
