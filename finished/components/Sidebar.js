import React, { useContext } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { CountryContext } from '@context/CountryContext';
import StyledButton from '@styled/StyledButton';

const StyledAside = styled.aside`
  flex: 1;
  padding: 1em;
  background: ${props => props.theme.colors.surface};
  border-right: 1px solid ${props => props.theme.colors.accent};
`;

const Sidebar = () => {
  const { countryData, loading, selectedCountry, selectCountry } = useContext(CountryContext);

  return (
    <StyledAside>
      <h3>Choose a Country</h3>
      <select value={selectedCountry} onChange={e => selectCountry(e.target.value)} disabled={loading}>
        {loading ? (
          <option>Bitte wählen</option>
        ) : (
          countryData.countryList.map(country => (
            <option key={shortid.generate()} value={country.isoCode}>
              {country.name}
            </option>
          ))
        )}
      </select>
      {selectedCountry !== 'AUT' && (
        <StyledButton type="button" onClick={() => selectCountry('AUT')}>
          Back to Austria
        </StyledButton>
      )}
    </StyledAside>
  );
};

export default Sidebar;
