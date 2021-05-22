import styled from "styled-components";

const Button = styled.button`  //A crase é chamada de tag de template String
  
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  /* O "E" comercial é usado para referenciar o botão(ButtonLink) 
  Semelhante ao Saas*/
  &:hover,
  &:focus {
    opacity: 0.5;
  }

`

export default Button;
