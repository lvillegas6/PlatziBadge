import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Leyout from './Leyout';
import NotFound from '../pages/NotFound'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab);

function App() {

    //Con Switch solo se renderiza una solo pagina
    //Route: representa una direccion de internet(es igual a <a /> ) es para colocar la ruta url y 
    //el componenete a renderizar. Se la añadimos el props de "exact" entonces la ruta debe ser IDENTICA.
    return ( //lEYOUT: Todo lo que esta dentro de leyout es su CONTANIDO(children)
        <BrowserRouter>
            <Leyout> 
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Leyout>
        </BrowserRouter>
    );
}

export default App;