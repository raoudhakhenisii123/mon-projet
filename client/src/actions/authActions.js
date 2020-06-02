import {REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT,LOADED_USER} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'


export const loadUser=()=>dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    //set the token inside the request's header
    axios.get('/api/auth')
    .then(res=>dispatch({
        type:LOADED_USER,
        payload:res.data
    }))

    .catch(()=>dispatch({
        type:AUTH_ERROR
    }))
}
//Regidter user
export const register = formData => dispatch =>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    axios.post('/api/user', formData, config)
    .then(res=>dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
    }))
}
// Login user
export const login = formData => dispatch =>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    axios.post('/api/auth', formData, config)
    .then(res=>dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data
    }))
    // .catch(err=>dispatch({
    //     type:LOGIN_FAIL,
    //     payload:err.response.msg
    // }))
}
//Logout User
export const logout=()=>dispatch=>{
    dispatch({
        type:LOGOUT
    })
    
}
   // clear errors
    export const clearError =()=>dispatch=>{
        dispatch({
            type:CLEAR_ERROR
        })
    }



