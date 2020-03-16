import React from 'react';
import StyledNav from '@styled/StyledNav';
import Link from 'next/link';

const Nav = () => (
  <StyledNav>
    <Link href="/" passHref>
      <a>Home</a>
    </Link>
    <Link href="/example-1" passHref>
      <a>Example 1</a>
    </Link>
    <Link href="/overview" passHref>
      <a>Overview</a>
    </Link>
  </StyledNav>
);

export default Nav;
