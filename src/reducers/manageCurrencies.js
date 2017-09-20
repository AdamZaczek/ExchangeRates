import { ADD_CURRENCY, REMOVE_CURRENCY, REMOVE_CURRENCIES } from '../constants/actionTypes';

const initialState = {
  currencies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENCY:
      if (state.currencies.includes(action.currency)) return state;
      return {
        ...state,
        currencies: [...state.currencies, action.currency],
      };
    case REMOVE_CURRENCY:
      const filteredCurrencies = state.currencies.filter(currency => currency !== action.currency)
      return {
        ...state,
        currencies: filteredCurrencies,
      };
    case REMOVE_CURRENCIES:
      return {
        ...state,
        currencies: [],
      };
    default:
      return state;
  }
};
