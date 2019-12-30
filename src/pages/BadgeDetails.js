import React from 'react';

import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DelateBadgeModal';

import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';

//Para crear nuestro propio hooks
//Estos hooks iran en su propia funcion y su nombre comenzara con la palabra 'use'
//Los hooks nunca lo podemos ejecutar condicionalmente: if(...) hooks <-- NO SE PUEDE
/*function useIncreaseCount(max){
    const [count, setCount] = React.useState(0); //USAMOS los HOOKS FUNDAMENTALES para crear nuevos HOOKS

    if(count > max){
        setCount(0)
    }

    return [count, setCount];
}*/


function BadgeDetails(props) {
    //const [state, setState] = React.useState();
    //ESTA FUNCION nos regresa 2 argumentos. useState nos devuelve un arreglo.
    //-----
    //count lo podemos inicializar, pasando como argumento al useState
    //const [count, setCount] = React.useState(0);

    //usando nuestro propio HOOKS
    //const [count, setCount] = useIncreaseCount(4);

    const {firstName, lastName, twitter, jobTitle, email, id} = props.badge;
    
    return (
        <React.Fragment>
            <div className="BadgeDetails-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails-hero-attendant-name">
                            <h1>{firstName} {lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={firstName}
                            lastName={lastName}
                            twitter={twitter}
                            jobTitle={jobTitle}
                            email={email}
                        />
                    </div>
                    <div className="col-6">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal
                                    onDeleteBadge={props.onDeleteBadge} 
                                    onClose={props.onCloseModal} 
                                    isOpen={props.modalIsOpen} 
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BadgeDetails;