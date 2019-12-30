import React from 'react';

import { Link } from 'react-router-dom';
import Badge from '../components/Badge';

import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';

function BadgeDetails(props) {

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
                                <button className="btn btn-danger">Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BadgeDetails;