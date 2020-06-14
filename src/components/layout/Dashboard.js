import React, {Suspense} from 'react';
import Clients from '../clients/Clients';
import {Sidebar} from './Sidebar';
import {compose} from 'redux';
import {firebaseConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {Loader} from "./Loader";

export const Dashboard = (props) => {

  if (!localStorage.getItem('uid')) {
    return <Redirect to='/login' />;
  }

    return (
        <div className='row'>
            <div className='col-md-10'>
                <Clients />
            </div>
            <div className='col-md-2'>
                <Sidebar />
            </div>
        </div>
    )
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Dashboard);