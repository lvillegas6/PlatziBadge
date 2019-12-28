import React from 'react';

import './styles/BadgesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BadgesList extends React.Component {
    render() {

        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    const {id, avatarUrl, firstName, lastName, twitter, jobTitle} = badge;
                    //Para color contenido JSX debemos colocar un return
                    ///key es un identificador unico cuando listamanos elementos. Ayuda a react para determinar
                    //cuando el elemento se vuelve a renderizar, es decir, saber si se mantuvo en la lista o cambio.
                    return (
                        <li key={id} className="BadgesList-elements">
                            <div className="BadgesList-avatar">
                                <img src={avatarUrl} alt="avatar"/>
                            </div>
                            <div className="BadgesList-section-info">
                                <h3>{firstName} {lastName}</h3>
                                <p className="BadgesList-jobTitle">{jobTitle}</p>
                                <p className="BadgesList-twitter"><span><FontAwesomeIcon icon={['fab', 'twitter']} />{twitter}</span></p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;