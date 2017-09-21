import manageCurrencies from './manageCurrencies';
import { ADD_CURRENCY, REMOVE_CURRENCY, REMOVE_CURRENCIES } from '../constants/actionTypes';

describe('manageCurrencies reducer', () => {
  test('should return default state', () => {
    expect(manageCurrencies(undefined, {})).toMatchSnapshot();
  });

  test('should return array without filtered element', () => {
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
      type: REMOVE_CURRENCY,
      currency: c1,
    };
    expect(manageCurrencies({ currencies: [
      c1, c2, c3
    ] }, action)).toMatchSnapshot();
  });
});
