/* AQUI É O INDEX DO COMPONENT MENU */

// É ESSENCIAL IMPORTAR O REACT
import React from 'react';
// Criando uma importação para a Logo
import myLogo from '../../assets/img/masinflix.png'
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';
import './menu.css';

//Componente é uma função, que retorna algo
function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="myLogo" src={myLogo} alt="MasinFLIX Logo" />
            </a>

            {/* Fizemos o Button comportar-se como a tag <a> */}
            <Button as="a" className="buttonLink" href="/">
              New Video
            </Button>
        </nav>
    );
    
}

// Usando export para ser aproveitado em outros locais
export default Menu;