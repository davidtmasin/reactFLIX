import React from 'react';

function ButtonLink(props){
// Vamos usar props como parâmentro da função
// Ele é um objeto e traz informações que vem do componente
// props -> { className: "informação a ser passada", href: "/" }
console.log(props)
    return(
        <a href={props.href} className={props.className}>
            {/* O {} é usado para adicionar JS dentro do HTML que está em um JS */}
            {props.children}
        </a>
    );

}

// Usando export para ser aproveitado em outros locais
export default ButtonLink;