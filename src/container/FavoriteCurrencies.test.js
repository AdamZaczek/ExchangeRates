import React from 'react';
import renderer from 'react-test-renderer';
import store from '../store';
import FavoriteCurrencies from './FavoriteCurrencies';

const currencies = [
	{currency: "dolar australijski", code: "AUD", bid: 2.8149, ask: 2.8717},
	{currency: "frank szwajcarski", code: "CHF", bid: 3.6531, ask: 3.7269}
];

store.getState = () => ({
  manageCurrencies: {
		currencies,
	}
});

test('renders correctly', () => {
  const tree = renderer.create(
    <FavoriteCurrencies
    	store={store}
      currencies={currencies}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});