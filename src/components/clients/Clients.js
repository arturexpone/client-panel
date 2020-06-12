import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";

import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Clients = (props) => {

    const {clients} = props;

    let readyMountClients = [];

    if(clients) {
        readyMountClients = clients.map(client => {
            const {id, firstName, lastName, email, phone, balance} = client;
            return (
                <tr key={id}>
                    <td>{firstName} {lastName}</td>
                    <td>{email}</td>
                    <td>${parseFloat(balance).toFixed(2)}</td>
                    <td>
                        <NavLink to={`/client/${id}`} className='btn btn-secondary btn-sm'>
                            <i className="fas fa-arrow-circle-right"> </i> Details
                        </NavLink>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <h2><i className="fas fa-users"></i> Clients </h2>
                </div>
                <div className='col-md-6'>

                </div>
            </div>
            <table className='table table-striped'>
                <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {readyMountClients}
                </tbody>
            </table>
        </div>
    );
}

export default compose(firestoreConnect(() => ['clients']),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients
})))(Clients);