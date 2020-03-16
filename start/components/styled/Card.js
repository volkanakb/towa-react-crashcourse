import styled from 'styled-components';

const Card = styled.div`
  border-radius: 10px;
  background: ${props => props.theme.colors.surface};
  padding: 1em;
  text-align: center;
  flex: 0 1 25%;
  p {
    color: ${props => {
      if (props.death) return props.theme.colors.error;
      if (props.recovery) return props.theme.colors.accent;
      return props.theme.colors.text;
    }};
    font-size: 2em;
  }
`;

export default Card;
