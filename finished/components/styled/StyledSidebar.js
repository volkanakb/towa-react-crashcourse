import styled from 'styled-components';

const StyledSidebar = styled.aside`
  flex: 1;
  padding: 1em;
  background: ${props => props.theme.colors.surface};
  border-right: 1px solid ${props => props.theme.colors.accent};
`;

export default StyledSidebar;