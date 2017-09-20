import { FETCH_CURRENCIES } from '../constants/actionTypes';

const initialState = {
  currencies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies,
      };
    default:
      return state;
  }
};
