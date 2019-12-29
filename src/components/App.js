import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab);

function App(){

    //Con Switch solo se renderiza una solo pagina
    //Route es para colocar la ruta url y el componenete a renderizar
    // Se la añadimos el props de "exact" entonces la ruta debe ser IDENTICA.
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
            </Switch> 
        </BrowserRouter>
    );
}

export default App;