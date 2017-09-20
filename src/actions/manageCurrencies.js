import { ADD_CURRENCY, REMOVE_CURRENCY, REMOVE_CURRENCIES } from '../constants/actionTypes';

export const addCurrency = currency => ({
  type: ADD_CURRENCY,
  currency,
});

export const removeCurrency = currency => ({
  type: REMOVE_CURRENCY,
  currency,
});

export const removeAllCurrencies = currencies => ({
  type: REMOVE_CURRENCIES,
});
