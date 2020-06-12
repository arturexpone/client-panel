import React from 'react';
import {NavLink} from "react-router-dom";

export const Clients = () => {

    const clients = [
        {
        id: '1',
        firstName: 'Artur',
        lastName: 'Tur1ik',
        email: 'test@yandex.ru',
        phone: '2314444',
        balance: '50'
        },
        {
        id: '2',
        firstName: 'Petya',
        lastName: 'Johnson',
        email: 'test2@yandex.ru',
        phone: '23333444',
        balance: '150'
        },
    ];

    const readyMountClients = clients.map(client => {
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

    if (clients) {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2> <i className="fas fa-users"></i> Clients </h2>
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
    } else {
        return <h1>Loading...</h1>
    }

}