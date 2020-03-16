import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  padding: 1em;
  a {
    margin: 0 1em;
    padding: 1em;
    text-align: center;
    text-decoration: none;
    position: relative;
    &:visited {
      color: inherit;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
    &:after {
      position: absolute;
      content: '';
      height: 5px;
      width: 0;
      background-color: ${props => props.theme.colors.accent};
      bottom: 0;
      left: 0;
      transition: width 0.2s ease-in-out;
    }
  }
`;

export default StyledNav;
