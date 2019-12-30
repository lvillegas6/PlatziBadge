import React, { useState, useMemo } from 'react';

import './styles/BadgesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';


function useSearchBadges(badges){

    const [query, setQuery] = useState('');
    const [filteredBadges, setFilteredBadges] = useState(badges);

    useMemo(() => {
        const result = badges.filter(badge => { //filter me devuelve un nuevo array si se cumple la condicion
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase()); //ESTA ES LA CONCICION, includes return TRUE || FALSE
        })

        setFilteredBadges(result);
    }, [badges, query]);

    return {query, setQuery, filteredBadges};
}

const BadgesList = props => {

    const badges = props.badges;
    const  {query, setQuery, filteredBadges} = useSearchBadges(badges);
  
    if (filteredBadges.length > 0) {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="filter">Filter Badges</label>
                    <input
                        id="filter"
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                <ul className="list-unstyled BadgesList">
                    {filteredBadges.map(badge => {
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
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="filter">Filter Badges</label>
                    <input
                        id="filter"
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </React.Fragment>
        );
    }
}

export default BadgesList;