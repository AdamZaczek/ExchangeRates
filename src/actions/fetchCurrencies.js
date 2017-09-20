import { FETCH_CURRENCIES } from '../constants/actionTypes';

const fetcCurrenciesSuccess = currencies => {
  return {
    type: FETCH_CURRENCIES,
    currencies: currencies[0].rates,
  }
};

export const fetchCurrencies = (url) => async (dispatch) => {
    const rateRes = await fetch(url);
    const resToJson = await rateRes.json();
    dispatch(fetcCurrenciesSuccess(resToJson));
};
