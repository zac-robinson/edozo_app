import styled from 'styled-components'

export const SubmitForm = styled.div`
position: absolute;
top: 220px;
left: 80px;
`;

export const TextBox = styled.input`
box-sizing: border-box;
border: 3px solid #ccc;
transition: 0.5s;
outline: none;
font-size: 20px;
border-radius: 4px;
margin-top: 2px;

:focus {
  border: 3px solid #555;
}
`;

export const SubmitBtn = styled.button`
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
border: 3px solid #008cba;
border-radius: 4px;
outline: none;

:hover {
  background-color: #008cba;
  color: white;
}
`;