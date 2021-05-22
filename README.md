**Descrição - Passos para criação de um projeto React**

# 1. É importante ter instalado em seu computador o nodeJS - LTS (>=10.16), npm [>= 5.6] (yarn é outro gerenciador de pacotes que pode ser utilizado) e o Git Bash:
    - 1.1 NodeJS -> https://nodejs.org/en/download/
    - 1.2 NPM -> https://www.npmjs.com/get-npm
    - 1.3 YARN -> https://classic.yarnpkg.com/en/docs/install/#windows-stable
    - 1.4 Git Bash -> https://git-scm.com/downloads

# 2. Para realizar a criação de um novo projeto React, use:
    - 2.1 Usando NPX
> npx create-react-app my-app
**ou** 
    - 2.2 Usando NPM
> npm init react-app my-app
**ou**
    - 2.3 Usando YARN
> yarn create react-app my-app

# 3. Em seguida, acessa a pasta do seu projeto usando:
> cd my-app

# 4. Por fim, rode o seu projeto (em modo DEVELOPMENT) usando:
> npm start
**ou**
> yarn start

## 4.1 Para rodar o projeto em modo PRODUCTION, use:
> npm run build
**ou**
> yarn build

## 4.2 Quando recebemos o projeto pronto, não temos o node_modules, para isto fazemos:
> npm install/i ou yarn add

# 5. Deletar arquivos desnecessários ao projeto:
> setupTests.js
> reportWebVitals.js
> App.test.js
> serviceWorker.js
> logo.svg
> App.css

# 6. Limpar o conteúdo do arquivo index.css e add [obs: Usando no AluraFlix] para poder resetar o CSS

````
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root {
    --primary: #2A7AE4;
    --black:#000;
    --blackLighter: #9E9E9E;
    --grayLight: #F5F5F5;
    --grayMedium: #E5E5E5;
    --white: #FFF;
    --frontEnd: #6BD1FF;
    --backEnd: #00C86F;
}

html,
body {
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
}
````

# 7. Instalar uma biblioteca chamada styled components
> https://styled-components.com/
> npm install styled-components ou yarn add styled-components

# 7.1 Usando styled components
> import styled from 'styled-components' [no topo da página]

> const Button = styled.button` ` [no corpo do código]

# 7.2 Instalar extensão do styled components no VSCODE
> vscode-styled-components

# 8. Instalar o componente REACT-ROUTER-DOM
> npm install react-router-dom
> yarn add react-router-dom

# 9. Instalar lib que será util para fazer um SLIDER de imagens
> npm install react-slick
> yarn add react-slick
