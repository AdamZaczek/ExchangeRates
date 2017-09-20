import React from 'react';
import Currency from './Currency'

const Currencies = props => {
  console.log(props)
  const mapCurrencies = props.currencies.map(currency => {
    return (
      <Currency
        addCurrency={props.addCurrency}
        key={currency.code}
        currency={currency}
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
