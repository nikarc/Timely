import { ADD_CLIENT, SET_CURRENT_CLIENT } from '../constants';

export const addClient = client => ({
  type: ADD_CLIENT,
  payload: client,
});

export const setCurrentClient = client => ({
  type: SET_CURRENT_CLIENT,
  payload: client
});