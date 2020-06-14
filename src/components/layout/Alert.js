import React from 'react';
import classnames from 'classnames';

export const Alert = ({message, messageType}) => {
  return (
    <div className={classnames('alert', {
      'alert-success': messageType === 'success',
      'alert-danger': messageType !== null,
    })}>
      {message}
    </div>
  )
}