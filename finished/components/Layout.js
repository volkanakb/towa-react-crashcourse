import React from 'react';
import Meta from '@components/Meta';
import GlobalStyles from '@styled/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Meta />
      {children}
    </React.Fragment>
  );
};

export default Layout;
