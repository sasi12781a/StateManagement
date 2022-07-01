import {
  SET_USER_Email,
  REMOVE_USER_Email,
  SET_USER_Name,
  REMOVE_USER_Name,
} from './actions';

const initialState = {
  email: [],
  name:[],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_Email:
      return {...state, email:[...state.email,action.payload] };
    case REMOVE_USER_Email:
      return{...state,email:[...state.email.pop()]}
    case SET_USER_Name:
      return{...state,name:[...state.name,action.payload]}
    case REMOVE_USER_Name:
      return{...state,name:[...state.name.pop()]}
    default:
      return state;
  }
}

export default userReducer;
