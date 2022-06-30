export const SET_USER_Email = 'SET_USER_Email';

export const setEmail= email => dispatch => {
    dispatch({
        type:SET_USER_Email,
        payload:email,
    })
};

