import {
  UPD_CUSTOMER_NAME,
  UPD_CUSTOMER_PHONE,
  UPD_CUSTOMER_EMAIL,
  UPD_CUSTOMER_ADDRESS,
  UPD_DELIVERY_DATE,
  UPD_DELIVERY_TIME,
  UPD_BIG_BOTTLE_COUNT,
  UPD_MIDDLE_BOTTLE_COUNT,
  UPD_SMALL_BOTTLE_COUNT,
} from './actionTypes';
import {createStore} from 'redux';

const initialState = {
  currentLayout: '0',
  customer: {
    name: '',
    phone: '',
    email: '',
    address: '',
  },
  delivery: {
    date: new Date(),
    time: '',
  },
  bottle: {
    big: 0,
    middle: 0,
    small: 0,
  },
};

/**
 * @param {object} state
 * @param {object} action
 * @return {object} state - new State
 */
function reducer(state=initialState, action) {
  switch (action.type) {
    case UPD_CUSTOMER_NAME:
      return {
        ...state,
        customer: {
          ...state.constructor,
          name: action.payload,
        },
      };
    case UPD_CUSTOMER_PHONE:
      return {
        ...state,
        customer: {
          ...state.constructor,
          phone: action.payload,
        },
      };
    case UPD_CUSTOMER_EMAIL:
      return {
        ...state,
        customer: {
          ...state.constructor,
          email: action.payload,
        },
      };
    case UPD_CUSTOMER_ADDRESS:
      return {
        ...state,
        customer: {
          ...state.constructor,
          address: action.payload,
        },
      };
    case UPD_DELIVERY_DATE:
      return {
        ...state,
        delivery: {
          ...state.delivery,
          date: action.payload,
        },
      };
    case UPD_DELIVERY_TIME:
      return {
        ...state,
        delivery: {
          ...state.delivery,
          time: action.payload,
        },
      };
    case UPD_BIG_BOTTLE_COUNT:
      return {
        ...state,
        bottle: {
          ...state.bottle,
          big: action.payload,
        },
      };
    case UPD_MIDDLE_BOTTLE_COUNT:
      return {
        ...state,
        bottle: {
          ...state.bottle,
          middle: action.payload,
        },
      };
    case UPD_SMALL_BOTTLE_COUNT:
      return {
        ...state,
        bottle: {
          ...state.bottle,
          small: action.payload,
        },
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
