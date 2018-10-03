import { ADD_CLIENT } from '../constants';

const initalState = {
  clients: [{
    name: 'First Client',
    rate: 33,
    id: 1
  }]
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;