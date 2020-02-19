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

export const updateCustomerName = (data) => ({
  type: UPD_CUSTOMER_NAME,
  payload: data,
});

export const updateCustomerPhone = (data) => ({
  type: UPD_CUSTOMER_PHONE,
  payload: data,
});

export const updateCustomerEmail = (data) => ({
  type: UPD_CUSTOMER_EMAIL,
  payload: data,
});

export const updateCustomerAddress = (data) => ({
  type: UPD_CUSTOMER_ADDRESS,
  payload: data,
});

export const updateDeliveryDate = (data) => ({
  type: UPD_DELIVERY_DATE,
  payload: data,
});

export const updateDeliveryTime = (data) => ({
  type: UPD_DELIVERY_TIME,
  payload: data,
});

export const updateBigBottleCount = (data) => ({
  type: UPD_BIG_BOTTLE_COUNT,
  payload: data,
});

export const updateMiddleBottleCount = (data) => ({
  type: UPD_MIDDLE_BOTTLE_COUNT,
  payload: data,
});

export const updateSmallBottleCount = (data) => ({
  type: UPD_SMALL_BOTTLE_COUNT,
  payload: data,
});

