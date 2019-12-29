import React from 'react';

import {Link} from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
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
class Badges extends React.Component{

    constructor(props){
        super(props)
        
        console.log('1. Constructor');
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        console.log('3. componentDidMount()');

        this.timeoutId = setTimeout(() => { //Se cambia el stage se vuelve a ejecutar el render.
            this.setState({
                data: [
                    {
                      "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                      "firstName": "Luis",
                      "lastName": "Villegas",
                      "email": "theeniig@gmail.com",
                      "jobTitle": "Frontend Engineer",
                      "twitter": "Boogst",
                      "avatarUrl": "https://s.gravatar.com/avatar/2955bda6ec83c5e8bfd8389803db8813?s=80"
                    },
                    {
                      "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                      "firstName": "Major",
                      "lastName": "Rodriguez",
                      "email": "Ilene66@hotmail.com",
                      "jobTitle": "Human Research Architect",
                      "twitter": "MajorRodriguez61545",
                      "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                      "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                      "firstName": "Daphney",
                      "lastName": "Torphy",
                      "email": "Ron61@hotmail.com",
                      "jobTitle": "National Markets Officer",
                      "twitter": "DaphneyTorphy96105",
                      "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    }
                ] 
            })
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. ComponentDidUpdate()')
        console.log({
            prevProps,
            prevState
        })

        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount()')
        clearTimeout(this.timeoutId);
    }

    render(){
        console.log('2/4. Render()');
        return ( //para quitar los DIV usamos React.Fragment
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges-container">
                        <img className="Badges-conf-logo" src={confLogo} alt="confLogo"/>
                    </div>
                </div>

                <div className="Badges-container">
                    <div className="Badges-buttons">
                        <Link className="btn btn-primary" to="/badges/new">New Badge</Link>
                    </div>
                </div>

                <div className="Badges-list">
                    <div className="Badges-container">
                        <BadgesList badges={this.state.data}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;  