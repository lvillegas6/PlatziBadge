// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

import 'bootstrap/dist/css/bootstrap.css' //import '/bootstrap'; los modulos se importan simplemente con el nombre de la carpeta.
import './global.css'


library.add(fab);
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges />, container);
