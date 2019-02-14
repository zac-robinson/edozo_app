import styled from 'styled-components';

export const ButtonGroup = styled.div`
  position: absolute;
  left: 107px;
  top: 180px;
`;

export const DateButton = styled.button`
  padding: 5px 7px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 2px 15px 4px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 3px solid #4caf50;
  border-radius: 4px;
  outline: none;

  :hover {
    background-color: #4caf50;
    color: white;
  }
`;
