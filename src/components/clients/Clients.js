import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";

import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {Loader} from "../layout/Loader";

const Clients = (props) => {
    const {clients} = props;
    let readyMountClients = [];
    let totalBalance = 0;

    if(clients) {
        readyMountClients = clients.map(client => {
            totalBalance += +client.balance;
            return (
                <tr key={client.id}>
                <td>{client.firstName} {client.lastName}</td>
                <td>{client.email}</td>
                <td>${parseFloat(client.balance).toFixed(2)}</td>
                <td>
                    <NavLink to={`/client/${client.id}`} className='btn btn-secondary btn-sm'>
                        <i className="fas fa-arrow-circle-right"> </i> Details
                    </NavLink>
                </td>
            </tr>
            )
        })
    } else if (!clients) {
        return <Loader />
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <h2><i className="fas fa-users"></i> Clients </h2>
                </div>
                <div className='col-md-6'>
                    <h5 className="text-right text-secondary">
                        Total Owed
                        <span className="text-primary">
                            {` $${parseFloat(totalBalance).toFixed(2)}`}
                        </span>
                    </h5>
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