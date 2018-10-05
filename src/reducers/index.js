import {
  ADD_CLIENT,
  SET_CURRENT_CLIENT,
  START_TIMER,
  STOP_TIMER,
  TIMER_TICK,
} from '../constants';

const initalState = {
  clients: [{
    name: 'First Client',
    rate: 33,
    id: 1
  }],
  currentClient: null,
  tasks: [{
    name: 'First Task',
    clientId: 1,
    hoursLogged: 0,
    id: 1
  }],
  // Timer (in seconds)
  timer: 0,
  timerRunning: false,
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] };
    case SET_CURRENT_CLIENT:
      return { ...state, currentClient: action.payload };
    case TIMER_TICK:
      let { timer } = state;
      timer++;
      return { ...state, timer };
    case START_TIMER:
      return { ...state, timerRunning: true };
    case STOP_TIMER:
      return { ...state, timerRunning: false };
    default:
      return state;
  }
};

export default rootReducer;