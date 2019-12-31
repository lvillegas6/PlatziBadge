import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import Loading from '../pages/Loading';
import Error from '../pages/Error';
import api from '../api';


function Badges() {

    const [state, setState] = useState(
        {
            loading: true,
            error: null,
            data: undefined
        })

    useEffect(() => {
        
        const fetchData = async () =>{
            try{
                const data = await api.badges.list();
                setState({loading: false, data});
            }catch(error){
                setState({loading: false, error});
            }
        }

        if(state.loading)
            fetchData();
    })

    const { loading, error, data } = state;

    if (loading && !data)
        return <Loading />;

    if (error)
        return <Error type="500" errorText={error.message} />;

    return (
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
                    <BadgesList badges={data} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Badges;  