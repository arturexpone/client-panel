import React from 'react';
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div>
            <NavLink to='/client/add' className='btn btn-succes btn-block'>
                <i className="fas fa-plus"></i> New client
            </NavLink>
        </div>
    )
}

