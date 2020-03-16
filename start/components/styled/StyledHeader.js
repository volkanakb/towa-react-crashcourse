import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  border-bottom: 1px solid ${props => props.theme.colors.accent};
  background: ${props => props.theme.colors.surface};
`;

export default StyledHeader;