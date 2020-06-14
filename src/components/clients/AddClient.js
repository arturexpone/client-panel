import React, {useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {createInput} from '../utils';


export const AddClient = (props) => {

    const initialState = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: '',
    };

    const [state, setState] = useState(initialState);

    let readyMountInput = createInput([
        ['First Name','text', 'firstName'],
        ['Last Name','text', 'lastName'],
        ['Email', 'email', 'email'],
        ['Phone', 'text', 'phone'],
        ['Balance','text', 'balance'],
    ], state, setState);

    const onSubmit = (e) => {
        e.preventDefault();
        const newClient = state.balance ? state : {...state, balance: 0};
        setState(initialState);
        props.firestore.add({collection: 'clients'}, newClient);
        props.history.push('/');
    }

    if (!localStorage.getItem('uid')) {
      return <Redirect to='/login' />;
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

            <div className='card-header'>Add client</div>
            <div className='card-body'>
                <form onSubmit={onSubmit}>
                    {readyMountInput}

                    <input type='submit' value='Submit' className='btn btn-primary btn-block'/>
                </form>
            </div>
        </div>
    )
}

export default compose(
  firestoreConnect(),
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  })))(AddClient);