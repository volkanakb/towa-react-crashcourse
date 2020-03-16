import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@styled/themes';
import StyledButton from '@styled/StyledButton';
import StyledHeader from '@styled/StyledHeader';
import useTheme from '@hooks/useTheme';
import Layout from '@components/Layout';
import Nav from '@components/Nav';


const NextApp = ({ Component, pageProps }) => {
  const { currentTheme, toggleTheme } = useTheme(lightTheme, darkTheme);
  return (
    <ThemeProvider theme={currentTheme.style}>
      <Layout>
        <StyledHeader>
          <Nav />
          <StyledButton type="button" onClick={toggleTheme}>
            toggle theme
          </StyledButton>
        </StyledHeader>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default NextApp;
