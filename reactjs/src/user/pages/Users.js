import React, { useState, useEffect, Fragment } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = () => {
    const [usersList, setUsersList] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        fetchData();
    }, [ sendRequest ]);

    const fetchData = async () => {
        try {
            const responseData = await sendRequest('http://localhost:5000/api/users');
            setUsersList(responseData.users);
        } catch (err) {}
    };

    return (
        <Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className='center'>
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && usersList && <UsersList items={usersList} />}
        </Fragment>
    )
}

export default Users;
