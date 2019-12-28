import React from 'react';



class BadgeForm extends React.Component{
    //state = {};
    
    //handleChange = e => {

        //Es una funcion de Component | esto es para guardar informacion
    //    this.setState({
    //        [e.target.name]: e.target.value,
    //    });
    //}

    handleClick = e => {
        console.log("click")
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Sibmit")
        console.log(this.state) //para leer los valores usamos this.state
    }


    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName} //para leer del estado usamos this.state y para escribirlo usamos setState
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

}

export default BadgeForm;