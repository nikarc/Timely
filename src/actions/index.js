import { ADD_CLIENT } from '../constants';

export const addClient = client => ({
  type: ADD_CLIENT,
  payload: client,
});