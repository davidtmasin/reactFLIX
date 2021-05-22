import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

function PageDefault({ children }) {

    return(
        // Todo componente precisa ter algo em volta, normalemnte usa-se div mas, 
        // o ideal é usar esta tag fragmento -> <> </>
        <>
            <Menu />
                {children}
            <Footer />
        </>
    );
    
}

export default PageDefault;