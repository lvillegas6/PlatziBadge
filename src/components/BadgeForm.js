import React from 'react';



class BadgeForm extends React.Component{
    //state = {};
    
    //handleChange = e => {

        //Es una funcion de Component | esto es para guardar informacion
    //    this.setState({
    //        [e.target.name]: e.target.value,
    //    });
    //}

    render(){
        
        const {onChange, onSubmit, formValues, error} = this.props;
        const {firstName, lastName, email, jobTitle, twitter} = formValues;

        return(
            <React.Fragment>
                <form onSubmit={onSubmit}>
                    
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={firstName} //para leer del estado usamos this.state y para escribirlo usamos setState
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

                    {error && (
                        <p className="text-danger">{error.message}</p>
                    )}
                    
                </form>
            </React.Fragment>
        );
    }

}

export default BadgeForm;