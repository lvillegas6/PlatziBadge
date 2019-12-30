import React from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import api from '../api';
import Loading from './Loading';

import header from '../images/platziconf-logo.svg';
import './styles/BadgePage.css';


class BadgeEdit extends React.Component {

    //Con esto LEVANTAMOS EL ESTADO
    //Es una técnica de React que pone el estado en una localizacion(como SUPERIOR) donde se le pueda pasar como props(argumentos) a los componentes
    //Lo ideal es poner el estado en el lugar mas cercano a todos los componentes que quieren compartir esa informacion.
    //---
    //Lo que le da el nombre a React es su parte de 'reactivo' ya que cada vez que hay un cambio en el ESTADO o en los PROPS que recibe
    //un componente se vuelve a renderizar todo el componente y todos us descendientes.
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            twitter: '',
            email: '',
            jobTitle: '',
            avatar: ''
        }
    };

    componentDidMount(){
        this.fechData();
    }

    fechData = async e =>{
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId //Con match obtenemos los valores de la URL
            );

            this.setState({loading: false, form: data})
        }catch(error){
            this.setState({loading: false, error})
        }

    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value //pasa PASAR una nueva variable o sobreescribir(si ya existe) la variable el objeto utilizamos [key]:
            }
        });
    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null })
        const { form } = this.state//para leer los valores usamos this.state

        try {

            await api.badges.update(this.props.match.params.badgeId, form);
            this.setState({ loading: false, error: null })

            //Estos props los reciben las paginas. Las paginas se las estamos dando a los Router
            //La ruta le va a pasar 3 props, match, history y location
            this.props.history.push('/badges'); 
        } catch (error) {
            this.setState({ loading: false, error })
        }
    }

    render() {

        const {form, loading, error} = this.state;
        const { firstName, lastName, email, jobTitle, twitter } = form;

        if(loading)
            return <Loading />
        
        return ( //para quitar los DIV usamos React.Fragment
            <React.Fragment>
                <div className="Badge-hero">
                    <img className="Badge-hero-img img-fluid" src={header} alt="hero" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={firstName ||  'First name'} 
                                lastName={lastName  || 'Last name'}
                                twitter={twitter || 'twitter'}
                                email={email || 'email'}
                                jobTitle={jobTitle || 'Job title'}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                error={error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;