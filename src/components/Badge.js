import React from 'react';

//para pasar la imagen como referencia
//para pasar la imagen en src usamos src={props}
import confLogo from '../images/badge-header.svg' 
import "./styles/Badge.css" //Asi importamos elementos css sin usar variables.

class Badge extends React.Component{
    render(){
        return (
            <div className="Badge">
                <div className="Badge-header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge-section-name">
                    <img className="Badge-avatar" src="https://s.gravatar.com/avatar/2955bda6ec83c5e8bfd8389803db8813?s=80" alt="Avatar"/>
                    <h1>Luis <br/> Villegas</h1>
                </div>

                <div className="Bagde-section-info">
                    <h3>Frontend Engineer</h3>
                    <div>@Boogst</div>
                </div>

                <div className="Badge-footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;
