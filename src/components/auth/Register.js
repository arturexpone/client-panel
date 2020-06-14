import React, {useState} from 'react';
import {firebaseConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import 'firebase/auth';
import {Redirect} from 'react-router-dom';

import {notifyUser} from '../../redux/ac';
import {Alert} from '../layout/Alert';

const Register = ({auth, firebase, notifyUser, notify, settings}) => {

  const { message, messageType } = notify;

  const initialState = {
    email: '',
    password: ''
  };
  const [state, setState] = useState(initialState);
  const {password, email} = state;

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value})
  };

  const onSubmit = e => {
    e.preventDefault();
    firebase.createUser({email, password})
      .catch(err => notifyUser(err.message, 'error'));
  };

  if(auth.uid) {
    localStorage.setItem('uid', auth.uid);
    notifyUser(null, null);
    return <Redirect to='/' />
  }

  if (!settings.allowRegistration) {
    return <Redirect to='/login' />
  }

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <div className='card'>
          <div className='card-body'>
            {message ? (<Alert message={message}/>) : null}
            <h1 className='text-center pb-4 pt-3'>
              <span className='text-primary'>
                <i className='fas fa-lock'> </i>
                {` Register`}
              </span>
            </h1>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  name='email'
                  required
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  required
                  value={password}
                  onChange={onChange}
                />
              </div>
              <input type='submit' value='Register' className='btn btn-primary btn-block'/>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    notify: state.notify,
    settings: state.settings
  }), {notifyUser})
)(Register);