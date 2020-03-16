import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.accent};
  transition: background-color 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.accentDarker};
  }
`;

export default StyledButton;
