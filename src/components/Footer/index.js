import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por {' '}
        {/* rel="noreferrer" serve para não trazer a referência de onde veio, ou seja, desta página da MasinFlix */}
        <a href="https://github.com/davidtmasin" target="_blank" rel="noreferrer"> 
        David Teixeira
        </a>
        {' '} durante a Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
