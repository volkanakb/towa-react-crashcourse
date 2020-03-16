import React, { useState, useMemo } from 'react';
import ObjectHash from 'object-hash';

const useTheme = (lightTheme, darkTheme) => {
  // memoize hashed values
  const { light, dark } = useMemo(() => {
    return {
      light: {
        hash: ObjectHash(lightTheme),
        style: lightTheme,
      },
      dark: {
        hash: ObjectHash(darkTheme),
        style: darkTheme,
      },
    };
  }, [lightTheme, darkTheme]);

  const [currentTheme, setCurrentTheme] = useState(light);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme.hash === light.hash ? dark : light);
  };

  return {
    currentTheme,
    toggleTheme,
  };
};

export default useTheme;
