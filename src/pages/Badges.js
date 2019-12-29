import React from 'react';

import {Link} from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';

class Badges extends React.Component{

    state = {
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
    }

    render(){
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