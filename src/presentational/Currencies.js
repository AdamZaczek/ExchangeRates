import React from 'react';
import Currency from './Currency'

const Currencies = props => {
  const mapCurrencies = props.currencies.map(currency => {
    return (
      <Currency
        key={currency.code}
        currency={currency}
        onClick={props.onClick}
        buttonText={props.buttonText}
      />
    );
  });
  return (
    <table>
      <tbody>
        <tr>
          <th>Currency</th>
          <th>Ask</th>
          <th>Bid</th>
          <th>Code</th>
        </tr>
        {mapCurrencies}
      </tbody>
    </table>
  );
};

export default Currencies;
