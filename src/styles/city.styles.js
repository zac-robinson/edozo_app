import styled from 'styled-components';

export const CityName = styled.h1`
  top: ${props => (props.length > 7 ? '25px' : '10px')};
  left: 25px;
  font-size: ${props => (props.length > 7 ? '22px' : '33px')};
  position: absolute;
`;
