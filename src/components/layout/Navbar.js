import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';

const Navbar = (props) => {

    const { auth, firebase, history, settings } = props;
    const [authenticated, setAuthenticated] = useState(false);


    useEffect(() => {
        if (auth.uid) {
            setAuthenticated(true);
        }
    }, [auth.uid]);

    const onLogout = e => {
        e.preventDefault();
        firebase.logout();
        setAuthenticated(false);
        localStorage.setItem('uid', '');

    };

    const showDashboard = authenticated ? (
        <div className='collapse navbar-collapse' id='navbarMain'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <NavLink to='/' className='nav-link'>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <a
                      href='#'
                      className='nav-link'
                    >
                        {auth.email}
                    </a>
                </li>
                <li className='nav-item'>
                    <NavLink to='/settings' className='nav-link'>
                        Settings
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <a
                      href='#'
                      className='nav-link'
                      onClick={onLogout}
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </div>)
      : null;

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-primary mb-4'>
            <div className='container'>
                <NavLink to='/' className='navbar-brand'>
                    ClientPanel
                </NavLink>
                <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarMain'>
                    <span className='navbar-toggler-icons'>

                    </span>
                </button>
                {showDashboard}
                {settings.allowRegistration && !authenticated ? (
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <NavLink to='/login' className='nav-link'>
                              Login
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to='/register' className='nav-link'>
                              Register
                          </NavLink>
                      </li>
                  </ul>
                ) : null}
            </div>
        </nav>
    )
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
      auth: state.firebase.auth,
      settings: state.settings
  }))
)(Navbar);