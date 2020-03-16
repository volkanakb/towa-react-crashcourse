import React, { useContext } from 'react';
import shortid from 'shortid';
import { CountryContext } from '@context/CountryContext';
import StyledButton from '@styled/StyledButton';
import StyledSidebar from '@styled/StyledSidebar';



const Sidebar = () => {
  const { countryData, loading, selectedCountry, selectCountry } = useContext(CountryContext);

  return (
    <StyledSidebar>
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
    </StyledSidebar>
  );
};

export default Sidebar;
