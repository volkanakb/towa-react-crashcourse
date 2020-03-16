import React, { useContext } from 'react';
import { CountryContext } from '@context/CountryContext';
import FlexContainer from '@styled/FlexContainer';
import StyledOverview from '@styled/StyledOverview';
import Card from '@styled/Card';

const Overview = props => {
  // TODO: extract the country data from our "CountryContext";
  const { loading, error } = useContext(CountryContext);
  // show this markup when an error thrown
  if (error) {
    return (
      <FlexContainer direction="column" flex={5}>
        <h2>Oops ! something went wrong while loading...</h2>
      </FlexContainer>
    );
  }

  // show this markup while loading
  if (loading) {
    return (
      <FlexContainer direction="column" flex={5}>
        <h2>loading data...</h2>
      </FlexContainer>
    );
  }

  // TODO: Render the name ofthe current country and the date for the latest update
  return (
    <FlexContainer direction="column" flex={5}>
      <h1>Corona Virus Stats in "the name goes here"></h1>
      <h2>Last update: "the date goes here"</h2>
      <h3>Datasource: <a href="https://covid19.mathdro.id/api/">https://covid19.mathdro.id/api/</a></h3>
      <StyledOverview>
        {/* TODO: Show a Card component for every category and manually write an h4 for it.
          Take a look at the response data from our "useCountry" hook
          Toke a look at the Styled-Component File of the Card for special styling
       */ }
      </StyledOverview>
    </FlexContainer>
  );
};

export default Overview;
