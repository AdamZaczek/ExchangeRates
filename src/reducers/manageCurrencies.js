//import { MANAGE_CURRENCIES } from '../constants/actionTypes';

const initialState = {
  currencies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CURRENCY':
      if (state.currencies.includes(action.currency)) return state;
      return {
        ...state,
        currencies: [...state.currencies, action.currency],
      };
    default:
      return state;
  }
};
