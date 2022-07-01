import {
  SET_USER_Email,
  REMOVE_USER_Email,
} from './actions';

const initialState = {
  email: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_Email:
      return {...state, email:[...state.email,action.payload] };
    case REMOVE_USER_Email:
      return{...state,email:[...state.email.pop()]}
    default:
      return state;
  }
}

export default userReducer;
