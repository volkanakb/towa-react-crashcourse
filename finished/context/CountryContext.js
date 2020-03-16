import React from 'react';
import useCountry from '@hooks/useCountry';

export const CountryContext = React.createContext();

export const CountryProvider = ({ children, apiUrl }) => {
  const { countryData, selectedCountry, selectCountry, loading = false, error = true } = useCountry(apiUrl);

  return (
    <CountryContext.Provider
      value={{
        countryData,
        selectedCountry,
        loading,
        error,
        selectCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
