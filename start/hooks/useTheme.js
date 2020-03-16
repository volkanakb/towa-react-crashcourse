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

  // TODO: set a state for the "currentTheme" in this custom hook and provide it with an initial value
  // https://reactjs.org/docs/hooks-intro.html - Intro on Hooks
  const toggleTheme = () => {
    // TODO: toggle between the two themes according on which one is active
  };

  // TODO: export the currentTheme and the toggleTheme Function
  return {
    currentTheme,
    toggleTheme,
  };
};

export default useTheme;
