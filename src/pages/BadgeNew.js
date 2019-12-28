import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{

    //Con esto LEVANTAMOS EL ESTADO
    //Es una técnica de React que pone el estado en una localizacion(como SUPERIOR) donde se le pueda pasar como props(argumentos) a los componentes
    //Lo ideal es poner el estado en el lugar mas cercano a todos los componentes que quieren compartir esa informacion.
    //---
    //Lo que le da el nombre a React es su parte de 'reactivo' ya que cada vez que hay un cambio en el ESTADO o en los PROPS que recibe
    //un componente se vuelve a renderizar todo el componente y todos us descendientes.
    state = { form: {
        firstName: '',
        lastName: '',
        twitter: '',
        email: '',
        jobTitle: "Frontend Engineer",
        avatar: ''
    } };

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew-hero">
                    <img className="img-fluid" src={header} alt="hero"/>
                </div>
               
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                jobTitle={this.state.form.jobTitle}
                                avatar="https://s.gravatar.com/avatar/2955bda6ec83c5e8bfd8389803db8813?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;