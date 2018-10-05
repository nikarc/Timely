import {
  ADD_CLIENT,
  SET_CURRENT_CLIENT,
  START_TIMER,
  STOP_TIMER,
  TIMER_TICK,
} from '../constants';

export const addClient = client => ({
  type: ADD_CLIENT,
  payload: client,
});

export const setCurrentClient = client => ({
  type: SET_CURRENT_CLIENT,
  payload: client,
});

export const tick = () => ({ type: TIMER_TICK });

export const timerStarted = () => ({ type: START_TIMER });

let timer = null;
export const startTimer = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => {
    return dispatch(tick());
  }, 1000);
  return dispatch(timerStarted());
};

export const stopTimer = () => {
  clearInterval(timer);
  return { type: STOP_TIMER };
}