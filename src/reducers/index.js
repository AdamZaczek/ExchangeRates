import { combineReducers } from 'redux';
import fetchCurrencies from './fetchCurrencies';
import manageCurrencies from './manageCurrencies';

export default combineReducers({
  fetchCurrencies,
  manageCurrencies,
});
