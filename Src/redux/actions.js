export const SET_USER_Email = 'SET_USER_Email';
export const SET_USER_Name='SET_USER_Name';

export const setEmail= email => dispatch => {
    dispatch({
        type:SET_USER_Email,
        payload:email,
    })
};

export const setName= name => dispatch =>{
    dispatch({
        type:SET_USER_Name,
        payload:name,
    })
}

