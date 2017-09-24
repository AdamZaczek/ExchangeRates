import React from 'react';
import renderer from 'react-test-renderer';
import Currency from './Currency';

test('renders correctly', () => {
	const currency = {currency: "dolar australijski", code: "AUD", bid: 2.8149, ask: 2.8717}
	const tree = renderer.create(
		<Currency currency={currency} />,
	).toJSON();
	expect(tree).toMatchSnapshot();
});