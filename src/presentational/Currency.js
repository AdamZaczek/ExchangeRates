import React from 'react';
import Button from './Button';

const Currency = props => {
  console.log(props)
  const { currency, ask, bid, code } = props.currency;
  return (
    <tr>
      <td>{currency}</td>
      <td>{ask}</td>
      <td>{bid}</td>
      <td>{code}</td>
      <td><Button onClick={() => props.addCurrency(props.currency)}>Add to favorites</Button></td>
    </tr>
  )
};

export default Currency;
