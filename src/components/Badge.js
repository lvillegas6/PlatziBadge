import React from 'react';

//para pasar la imagen como referencia
//para pasar la imagen en src usamos src={props}
import confLogo from '../images/badge-header.svg' 
import "./styles/Badge.css" //Asi importamos elementos css sin usar variables.

//LOS PROS son los argumentos de una funcion (son atributos de nuestros componentes)
class Badge extends React.Component{
    render(){
       // this.props; //Esta propiedades ya vienen incluidas

        return (
            <div className="Badge">
                <div className="Badge-header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge-section-name">
                    <img className="Badge-avatar" src={this.props.avatar} alt="Avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Bagde-section-info">
                    <h3>{this.props.jobTittle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge-footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;
