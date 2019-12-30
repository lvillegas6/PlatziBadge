import React from 'react';

import './styles/BadgesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';


const BadgesList = props => {

    const badgesList = props.badges.slice(0).reverse();

    if (badgesList.length > 0) {
        return (
            <ul className="list-unstyled BadgesList">
                {badgesList.map(badge => {
                    const { id, firstName, lastName, twitter, jobTitle, email } = badge;
                    //Para color contenido JSX debemos colocar un return
                    ///key es un identificador unico cuando listamanos elementos. Ayuda a react para determinar
                    //cuando el elemento se vuelve a renderizar, es decir, saber si se mantuvo en la lista o cambio.
                    return (
                        <li key={id} className="BadgesList-elements">
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <div className="BadgesList-avatar">
                                    <Gravatar email={email} />
                                </div>
                                <div className="BadgesList-section-info">
                                    <h3>{firstName} {lastName}</h3>
                                    <p className="BadgesList-jobTitle">{jobTitle}</p>
                                    <p className="BadgesList-twitter"><span><FontAwesomeIcon icon={['fab', 'twitter']} />{twitter}</span></p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        return (
            <React.Fragment>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </React.Fragment>
        );
    }
}

export default BadgesList;