import React from 'react';
import Navbar from './Navbar'
function Leyout(props){
    //const children = props.children;
    return ( //para quitar los DIV usamos React.Fragment
        <React.Fragment>
            <Navbar />
            {props.children /*ASI usamos el contenido de leyout*/ }
        </React.Fragment>
    );
}

export default Leyout;