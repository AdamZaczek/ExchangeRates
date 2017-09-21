import React from 'react';
import Button from './Button';

const Currency = props => {
  const { currency, ask, bid, code } = props.currency;
  return (
    <tr>
      <td>{currency}</td>
      <td>{ask}</td>
      <td>{bid}</td>
      <td>{code}</td>
      <td><Button onClick={() => props.onClick(props.currency)}>{props.buttonText}</Button></td>
    </tr>
  )
};

export default Currency;
