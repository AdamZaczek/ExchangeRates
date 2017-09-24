import fetchCurrencies from './fetchCurrencies';
import { FETCH_CURRENCIES } from '../constants/actionTypes';

describe('fetchCurrencies reducer', () => {
  test('should return default state', () => {
    expect(fetchCurrencies(undefined, {})).toMatchSnapshot();
  });

  test('should return an array with currencies', () => {
    const c1 = {
      code: '1',
      currency: 'dollar'
    }
    const c2 = {
      code: '2',
      currency: 'euro'
    }
    const c3 = {
      code: '3',
      currency: 'frank'
    }
    const action = {
      type: FETCH_CURRENCIES,
      currencies: [c1, c2, c3]
    };
    expect(fetchCurrencies({ currencies: [] }, action)).toMatchSnapshot();
	});
});