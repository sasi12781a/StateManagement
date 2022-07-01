export const SET_USER_Email = 'SET_USER_Email';
export const SET_USER_Name='SET_USER_Name';
export const REMOVE_USER_Email='REMOVE_USER_Email';
export const REMOVE_USER_Name='REMOVE_USER_Name';

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

export const removeEmail= ()=>dispatch=>{
    dispatch({
        type:REMOVE_USER_Email,
        payload:[],
    })
}

export const removeName=()=>dispatch=>{
    dispatch({
        type:REMOVE_USER_Name,
        payload:[],
    })
}