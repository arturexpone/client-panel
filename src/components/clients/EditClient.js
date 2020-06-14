import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';

import {Loader} from '../layout/Loader';
import {createInput} from '../utils';


const EditClient = (props) => {

  const { client, history, firestore } = props;

  let initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: '',
  };

  const [state, setState] = useState(initialState);

  if(!client) {
    return <Loader />
  }

  if (client.firstName && state.firstName === '') {
    setState(client);
  }

  let readyMountInput = [];

  if (client) {
    readyMountInput = createInput([
      ['First Name','text', 'firstName'],
      ['Last Name','text', 'lastName'],
      ['Email', 'email', 'email'],
      ['Phone', 'text', 'phone'],
      ['Balance','text', 'balance'],
    ], state, setState);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    firestore.update({collection: 'clients', doc: client.id}, state)
      .then(res => history.push('/'));
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <NavLink to='/' className='btn btn-link'>
            <i className='fas fa-arrow-circle-left'> </i> Back to dashboard
          </NavLink>
        </div>
      </div>

      <div className='card-header'>Edit client</div>
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          {readyMountInput}

          <input type='submit' value='Submit' className='btn btn-primary btn-block'/>
        </form>
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
  })))(EditClient);