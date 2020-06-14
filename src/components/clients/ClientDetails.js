import React, {useState} from 'react';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import classnames from 'classnames';

import {Loader} from '../layout/Loader';
import {NavLink} from 'react-router-dom';

const ClientDetails = (props) => {

    const { client, firestore, history } = props;
    const initialState = {
    showUpdateBalance: false,
    balance: '',
    };
    const [state, setState] = useState(initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        const clientUpdate = {
            balance: parseFloat(state.balance),
        }
        firestore.update(
          {collection: 'clients', doc: client.id},
          clientUpdate
          )
        setState({...state, showUpdateBalance: !state.showUpdateBalance});
    };

    const onDeleteClick = () => {
        firestore.delete({collection: 'clients', doc: client.id})
          .then(res => history.push('/'));
    };

    let balanceForm = '';
    if(state.showUpdateBalance) {
        balanceForm = (
          <form onSubmit={onSubmit}>
              <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='balance'
                    placeholder='Add new balance'
                    value={state.balance}
                    onChange={(e) => setState({...state, balance: e.target.value})}
                  />
                <div className='input-group-append'>
                    <input
                      type='submit'
                      value='update'
                      className='btn btn-outline-dark'/>
                </div>
              </div>
          </form>
        )
    }

    if (!client) {
    return <Loader />
    }

    return (
    <div>
        <div className='row'>
            <div className='col-md-6'>
                <NavLink to='/' className='btn btn-link'>
                    <i className='fas fa-arrow-circle-left'> </i> Back to dashboard
                </NavLink>
            </div>
            <div className='col-md-6'>
                <div className='btn-group float-right'>
                    <NavLink to={`/client/edit/${client.id}`} className='btn btn-dark'>
                        Edit
                    </NavLink>
                    <button
                      className='btn btn-danger'
                      onClick={onDeleteClick}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <hr/>
        <div className="card">
            <h3 className="card-header">
                {client.firstName} {client.lastName}
            </h3>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-8 col-sm-6'>
                        <h4>{`Client ID: `}
                            <span className='text-secondary'>
                                {client.id}
                            </span>
                        </h4>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <h3 className='pull-right'>{`Balance: $`}
                            <span className='text-secondary'>
                                <span
                                className={classnames({
                                    'text-danger': client.balance > 0,
                                    'text-success': client.balance === 0
                                    })}>
                                    {parseFloat(client.balance).toFixed(2) + ' '}
                                </span>
                                <small>
                                    <a href='#'
                                       onClick={() =>
                                           setState(
                                               {
                                                   ...state,
                                                   showUpdateBalance: !state.showUpdateBalance
                                               })}>
                                        <i className="fas fa-pencil-alt"> </i>
                                    </a>
                                </small>
                            </span>
                        </h3>
                        {balanceForm}
                    </div>
                </div>
                <hr/>
                <ul className="list-group">
                    <li className="list-group-item">Contact Email: {client.email}</li>
                    <li className="list-group-item">Contact Phone: {client.phone}</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default compose(firestoreConnect((props) => [{
    collection: 'clients',
    storeAs: 'client',
    doc: props.match.params.id
}]),
connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
})))(ClientDetails);