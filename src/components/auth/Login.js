import React, {useState} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import 'firebase/auth';

const Login = (props) => {

  const { firebase } = props;

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
    firebase.default.login({
      email,
      password
    })
      .catch(err => alert('Invalid email or password'));

  };

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <div className='card'>
          <div className='card-body'>
            <h1 className='text-center pb-4 pt-3'>
              <span className='text-primary'>
                <i className='fas fa-lock'> </i>
                {` Login`}
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
              <input type='submit' value='Login' className='btn btn-primary btn-block'/>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default firestoreConnect()(Login);