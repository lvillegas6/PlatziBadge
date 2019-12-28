import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew-hero">
                    <img className="img-fluid" src={header} alt="hero"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Luis"
                                lastName="Villegas"
                                twitter="Boogst"
                                jobTittle="Frontend Engineer"
                                avatar="https://s.gravatar.com/avatar/2955bda6ec83c5e8bfd8389803db8813?s=80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;