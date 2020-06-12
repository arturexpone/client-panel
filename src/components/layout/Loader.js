import React from 'react';

import loader from '../assets/loader.gif'

export const Loader = () => {
    return (
        <div>
            <img src={loader} style={{width: '200px', margin: 'auto', display: 'block'}}/>
        </div>
    )
}