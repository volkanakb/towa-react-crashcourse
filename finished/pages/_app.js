import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@styled/themes';
import StyledButton from '@styled/StyledButton';
import useTheme from '@hooks/useTheme';
import Layout from '@components/Layout';
import Nav from '@components/Nav';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  border-bottom: 1px solid ${props => props.theme.colors.accent};
  background: ${props => props.theme.colors.surface};
`;

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
