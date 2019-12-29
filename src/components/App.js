import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Leyout from './Leyout';
import Error from '../pages/Error';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from '../pages/Home';


library.add(fab);

function App() {

    //Con Switch solo se renderiza una solo pagina
    //Route: representa una direccion de internet(es igual a <a /> ) es para colocar la ruta url y 
    //el componenete a renderizar. Se la añadimos el props de "exact" entonces la ruta debe ser IDENTICA.
    return ( //lEYOUT: Todo lo que esta dentro de leyout es su CONTANIDO(children)
        <BrowserRouter>
            <Leyout> 
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route path="/404" render={
                        (props) => <Error type="404" errorText="Page not found" />
                    }/>
                    <Redirect from="*" to="/404"/>
                </Switch>
            </Leyout>
        </BrowserRouter>
    );
}

export default App;