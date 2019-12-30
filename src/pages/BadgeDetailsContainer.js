import React from 'react';


import Loading from './Loading';
import api from '../api';
import Error from './Error';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({loading: true, error: null});

        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            console.log(data)
            this.setState({loading: false, data: data});
        }catch(error){
            this.setState({loading: false, error});
        }

    }

    render(){
        const {loading, data, error} = this.state;
       
        if(loading)
            return <Loading />

        if(error)
            return <Error type="500"  errorText={error.message} />

        return <BadgeDetails badge={data} />;
    }
}

export default BadgeDetailsContainer;