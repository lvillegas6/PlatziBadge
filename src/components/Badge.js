import React from 'react';

//para pasar la imagen como referencia
//para pasar la imagen en src usamos src={props}
import confLogo from '../images/badge-header.svg' 
import "./styles/Badge.css" //Asi importamos elementos css sin usar variables.

//LOS PROS son los argumentos de una funcion (son atributos de nuestros componentes)
class Badge extends React.Component{
    render(){
       // this.props; //Esta propiedades ya vienen incluidas
        const {avatar, firstName, lastName, jobTitle, twitter} = this.props;
        return (
            <div className="Badge">
                <div className="Badge-header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge-section-name">
                    <img className="Badge-avatar" src={avatar} alt="Avatar"/>
                    <h1>{firstName} <br/> {lastName}</h1>
                </div>

                <div className="Bagde-section-info">
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                </div>

                <div className="Badge-footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;
