import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css';

//ReactDOM.createPortal(que, donde)
//Funciona parecido a ReactDOM.render; con la diferencia
//que ese "DONDE" puede ser fuera de la aplicacion.
function Modal(props){
    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal-container">
                <button onClick={props.onClose} className="Modal-close-button">
                    X
                </button>
                {props.children}
            </div>
        </div>, 
        document.getElementById('modal')
    );
}

export default Modal;