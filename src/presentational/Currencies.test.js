import React from 'react';
import renderer from 'react-test-renderer';
import Currencies from './Currencies';

test('renders correctly', () => {
	const currencies = [
		{currency: "dolar australijski", code: "AUD", bid: 2.8149, ask: 2.8717},
		{currency: "frank szwajcarski", code: "CHF", bid: 3.6531, ask: 3.7269}
	]
	const tree = renderer.create(
		<Currencies currencies={currencies} />,
	).toJSON();
	expect(tree).toMatchSnapshot();
});