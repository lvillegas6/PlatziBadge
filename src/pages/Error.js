import React from 'react';

import './styles/Error.css';

function Error(props){
    return <div className="Error">
        <h1>{props.type}</h1>
        <p>{props.errorText}</p>
    </div>;
}

export default Error;