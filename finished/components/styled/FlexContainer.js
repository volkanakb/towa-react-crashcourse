import styled from 'styled-components';

const FlexContainer = styled.section`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex: ${props => props.flex || 1};
  height: 100%;
  overflow: hidden;
`;

export default FlexContainer;
