import React from 'react';

import { Link } from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import api from '../api';
//MONTAJE
//representa el momento donde se inserta el código del componente en el DOM
//se llaman tres métodos en este ORDEN: constructor, render, componentDidMout
//---------
//Actualizacion
//ocurre cuando los PROPS o el ESTADO del componente cambia
//Se llaman dos metodos en este ORDEN: render, componentDidUpdate
//---------
//Desmontaje
//Nos da la importunidad de hacer limpienza de nuestros componentes
//Se llama un método: ComponentWillUnmount()
class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }


    componentDidMount() { //Este es el mejor lugar para comenzar una peticion.
        //peticion GET
        //es cyakqyuer kkanada a la que se soliciten datos.
        //peticion POST
        //Es cuando se envian datos.
        //PUT
        //Cuando se modifican datos.
        //DELETE
        //cuando se eliminan datos
        this.fechtData();
    }

    fechtData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data });
        } catch (error) {
            this.setState({ loading: false, error });
        }
    }

    render() {

        const {loading, error, data} = this.state;

        if (loading) 
            return 'Loadin...';
    
        if (error) 
            return `Error: ${this.state.error.message}`;
        
        return ( //para quitar los DIV usamos React.Fragment
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges-container">
                        <img className="Badges-conf-logo" src={confLogo} alt="confLogo" />
                    </div>
                </div>

                {!(data.length === 0) && (
                    <div className="Badges-container">
                        <div className="Badges-buttons">
                            <Link className="btn btn-primary" to="/badges/new">New Badge</Link>
                        </div>
                    </div>
                )}

                <div className="Badges-list">
                    <div className="Badges-container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;  