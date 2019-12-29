import React from 'react';

import platziConf from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';
import './styles/Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Home">
                    <div className="Home-container">
                        <div className="Home-section-info">
                            <img src={platziConf} alt="PlatziConf" />
                            <h2>Print your badges</h2>
                            <p>The easiest way to manage your <br/> conference</p>
                            <div className="Home-buttons">
                                <Link to="/badges/new" className="btn btn-primary">Start now</Link>
                            </div>
                        </div>
                        <div className="Home-image">
                            <img src={astronauts} alt="astronauts" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;