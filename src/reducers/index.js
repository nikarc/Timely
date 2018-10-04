import { ADD_CLIENT, SET_CURRENT_CLIENT } from '../constants';

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
  }]
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] };
    case SET_CURRENT_CLIENT:
      return { ...state, currentClient: action.payload };
    default:
      return state;
  }
};

export default rootReducer;