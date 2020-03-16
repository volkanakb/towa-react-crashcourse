import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@styled/themes';
import StyledButton from '@styled/StyledButton';
import StyledHeader from '@styled/StyledHeader';
import useTheme from '@hooks/useTheme';
import Layout from '@components/Layout';
import Nav from '@components/Nav';


const NextApp = ({ Component, pageProps }) => {
  // TODO: make the StyledButton functioning by using our "useTheme" hook
  // TODO: also pass the current theme to our ThemeProvider
  return (
    <ThemeProvider theme={}>
      <Layout>
        <StyledHeader>
          <Nav />
          <StyledButton type="button">
            toggle theme
          </StyledButton>
        </StyledHeader>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default NextApp;
