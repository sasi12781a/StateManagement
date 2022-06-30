import {
  SET_USER_Email,
} from './actions';

const initialState = {
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_Email:
      return {...state, email: action.payload};
    default:
      return state;
  }
}

export default userReducer;
