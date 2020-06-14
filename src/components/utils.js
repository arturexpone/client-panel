import React from "react";

export const createInput = (array, state, setState) => {
  return array.map((data, i) => {
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