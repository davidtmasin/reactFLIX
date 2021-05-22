/* AQUI É O INDEX DO COMPONENT MENU */

// É ESSENCIAL IMPORTAR O REACT
import React from 'react';
// Importando o react-router-dom para usar o Link no lugar da tag a e fazer o SPA funcionar
import { Link } from 'react-router-dom';
// Criando uma importação para a Logo
import myLogo from '../../assets/img/masinflix.png'
import './menu.css';
import Button from '../Button';

//Componente é uma função, que retorna algo
function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="myLogo" src={ myLogo } alt="MasinFLIX Logo" title="Welcome to MasinFLIX"/>
            </Link>

            {/* Fizemos o Button comportar-se como a tag <a> */}
            <Button as={Link} className="buttonLink" to="/register/video" title="Register a new video" >
              New Video
            </Button>
        </nav>
    );
    
}

// Usando export para ser aproveitado em outros locais
export default Menu;