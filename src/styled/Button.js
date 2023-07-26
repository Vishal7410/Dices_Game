import styled from "styled-components";

export const Button = styled.button`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 100000px;
color: white;
font-size: 16px;
border-radius: 5px;
background: #000000;
border : 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border : 1px solid black;
    font-size: 16px;
    transition: 0.3s background ease-in;

}
`
;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border : 1px solid transparent;
    
}
`
;