// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css' //import '/bootstrap'; los modulos se importan simplemente con el nombre de la carpeta.
import './global.css'
import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
<Badge 
    avatar="https://s.gravatar.com/avatar/2955bda6ec83c5e8bfd8389803db8813?s=80"
    firstName="Luis" 
    lastName="Villegas" 
    jobTitle="Frontend Engineer" 
    twitter="boogst"/
>, 
container);
