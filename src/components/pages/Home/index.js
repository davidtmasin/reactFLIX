import React from 'react';
// Importação de componentes
import Menu from '../../Menu';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';
// Importação dos dados JSON
import dadosIniciais from '../../../data/dados_iniciais.json';


function Home() {
  return (
    <div style={{background:"#141414"}}>
        <Menu />
        <BannerMain 
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription={"O que é Front-End Trabalhando na área"}
        />

        <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[0]}
        />

        <Carousel
            
            category={dadosIniciais.categorias[1]}
        />

        <Carousel
            
            category={dadosIniciais.categorias[2]}
        />

        <Carousel
            
            category={dadosIniciais.categorias[3]}
        />

        <Carousel
            
            category={dadosIniciais.categorias[4]}
        />

        <Carousel
            
            category={dadosIniciais.categorias[5]}
        />

        <Footer />

    </div>
  );
}

export default Home;
