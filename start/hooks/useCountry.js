import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

import wait from '../utils/wait';

// fetches Data from https://covid19.mathdro.id/api
const useCountry = apiUrl => {
  const [selectedCountry, setSelectedCountry] = useState('AUT');
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectCountry = selectedCountryCode => {
    // TODO: set the selected Country Code, reset the error variable if an error was set and export this function
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // fetch movies and genres in Promise.all call - this will return an array of both promises resolved
        const [currentCountryResponse, countryListResponse] = await Promise.all([
          axios(`${apiUrl}/${selectedCountry}`),
          axios(apiUrl),
        ]);

        // combine country and iso list as https://covid19.mathdro.id/api/countries - returns both formats but the api only listens on the iso Code
        // countryCode for Austria would be: "AT"
        // isoCode for Austria would be: "AUT" - https://covid19.mathdro.id/api/countries/AUT
        const countryList = Object.entries(countryListResponse.data.countries).map(([countryName, countryCode]) => {
          const country = { name: countryName, countryCode };
          Object.entries(countryListResponse.data.iso3).forEach(([isoName, isoCode]) => {
            if (isoName === countryCode) country.isoCode = isoCode;
          });
          return country;
        });

        const currentCountry = {
          ...currentCountryResponse.data,
          ...countryList.find(({ isoCode }) => isoCode === selectedCountry),
        };

        currentCountry.lastUpdate = format(new Date(currentCountry.lastUpdate), 'dd.MM.Y hh:m');

        setCountryData({ currentCountry, countryList });
        //simulates waiting time on the api
        // await wait(2000);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData();
  }, [selectedCountry, apiUrl]);

  return {
    countryData,
    selectedCountry,
    selectCountry,
    loading,
    error,
  };
};

export default useCountry;
