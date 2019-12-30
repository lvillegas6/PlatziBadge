import React from 'react';


import Loading from './Loading';
import api from '../api';
import Error from './Error';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        
        this.setState({loading: true, error: null});

        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, data: data});
        }catch(error){
            this.setState({loading: false, error});
        }
    }

    
    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }

    handleDeleteBadge = async e =>{
        this.setState({loading: true, error: null})

        try{

            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading: false, error: null})
            this.props.history.push('/badges');

        }catch(error){
            this.setState({loading: false, error});
        }
    }

    render(){
        const {loading, data, error, modalIsOpen} = this.state;
       
        if(loading)
            return <Loading />

        if(error)
            return <Error type="500"  errorText={error.message} />

        return <BadgeDetails 
                    onCloseModal={this.handleCloseModal} 
                    onOpenModal={this.handleOpenModal} 
                    onDeleteBadge={this.handleDeleteBadge}
                    modalIsOpen={modalIsOpen}
                    badge={data} />;
    }
}

export default BadgeDetailsContainer;