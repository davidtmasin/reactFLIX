import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { 
    BrowserRouter,
    Switch,
    Route
 } from 'react-router-dom';


import Home from './components/pages/Home';
import VideoRegister from './components/pages/register/Video';
import CategoryRegister from './components/pages/register/Category';
import NotFoundPage from './components/pages/NotFound';




ReactDOM.render(
    
    <BrowserRouter> {/*Container que fica em volta de tudo*/}

        <Switch> {/* Responsável pela troca de páginas, é como de fosse IF para definir qual rota que é a escolhida*/}

            <Route path="/" component={ Home } exact /> {/* O Route declara cada uma das páginas que temos. O termo 'exact' força a ideia de que tem que ser examente o path que foi fornecido*/}

            <Route path="/register/video" component={ VideoRegister }  />

            <Route path="/register/category" component={ CategoryRegister }  />

            <Route component={ NotFoundPage } />

        </Switch>

    </BrowserRouter>,

  document.getElementById('root')
);