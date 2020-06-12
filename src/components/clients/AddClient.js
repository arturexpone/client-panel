import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase';

export const AddClient = (props) => {
    const initialState = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: '',
    };

    const [state, setState] = useState(initialState);

    let readyMountInput = [];
    const createInput = (array) => {
        readyMountInput = array.map((data, i) => {
            return (
                <div key={i} className='form-group'>
                    <label htmlFor='firstName'>{data[0]}</label>
                    <input
                        type={data[1]}
                        className='form-control'
                        name={data[2]}
                        minLength={data[2] === 'balance' ? 0 : 2}
                        required
                        onChange={(e) => setState({...state, [data[2]]: e.target.value}) }
                        value={state[data[2]]}
                    />
                </div>
            )
        })
    };

    createInput([
        ['First Name','text', 'firstName'],
        ['Last Name','text', 'lastName'],
        ['Email', 'email', 'email'],
        ['Phone', 'text', 'phone'],
        ['Balance','text', 'balance'],
    ]);

    const onSubmit = (e) => {
        e.preventDefault();
        const newClient = state.balance ? state : {...state, balance: 0};
        setState(initialState);
        props.firestore.add({collection: 'clients'}, newClient);
        props.history.push('/');
    }

    console.log(props)

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

export default firestoreConnect()(AddClient);