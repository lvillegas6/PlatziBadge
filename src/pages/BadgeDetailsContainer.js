import React, { useState, useEffect} from 'react';


import Loading from './Loading';
import api from '../api';
import Error from './Error';
import BadgeDetails from './BadgeDetails';

function BadgeDetailsContainer(props) {

    const [isOpen, setIsOpen] = useState(false);

    const [state, setState] = useState(
        {
            loading: true,
            error: null,
            data: undefined
        });

    useEffect(() => {

        if (state.loading)
            fetchData();
    })

    async function fetchData() {
        try {
            const data = await api.badges.read(props.match.params.badgeId);
            setState({ loading: false, data });
        } catch (error) {
            setState({ loading: false, error });
        }
    }

    function handleOpenModal(e) {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }

    async function handleDeleteBadge(e) {

        try {

            console.log('eliminado')
            await api.badges.remove(props.match.params.badgeId);
            props.history.push('/badges');
        } catch (error) {
            setState({ loading: false, error });
        }
    }

    const { loading, data, error } = state;

    if (loading)
        return <Loading />

    if (error)
        return <Error type="500" errorText={error.message} />

    return (
        <BadgeDetails
            onCloseModal={handleCloseModal}
            onOpenModal={handleOpenModal}
            onDeleteBadge={handleDeleteBadge}
            modalIsOpen={isOpen}
            badge={data}
        />
    );
}

export default BadgeDetailsContainer;