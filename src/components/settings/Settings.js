import React from 'react';
import {connect} from 'react-redux';
import {allowRegistration, disableBalanceOnAdd, disableBalanceOnEdit} from '../../redux/ac';
import {NavLink} from "react-router-dom";

const Settings = (props) => {

  const { allowRegistration, disableBalanceOnAdd, disableBalanceOnEdit, settings } = props;

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <NavLink to='/' className='btn btn-link'>
            <i className="fas fa-arrow-circle-left"> </i> Back to dashboard
          </NavLink>
        </div>
      </div>

      <div className='card'>
        <div className='card-header'>Edit settings</div>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label>Allow Registration</label>{' '}
              <input
                type="checkbox"
                name='allowRegistration'
                checked={settings.allowRegistration}
                onChange={allowRegistration}
              />
            </div>

            <div className='form-group'>
              <label>Disable Balance On Add</label>{' '}
              <input
                type="checkbox"
                name='disableBalanceOnAdd'
                checked={settings.disableBalanceOnAdd}
                onChange={disableBalanceOnAdd}
              />
            </div>

            <div className='form-group'>
              <label>Disable Balance On Edit</label>{' '}
              <input
                type="checkbox"
                name='allowRegistration'
                checked={settings.disableBalanceOnEdit}
                onChange={disableBalanceOnEdit}
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default connect((state) => ({
  auth: state.firebase.auth,
  settings: state.settings
}), {disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration})(Settings);