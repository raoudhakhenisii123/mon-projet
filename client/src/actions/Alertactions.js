import {SET_ALERT, REMOVE_ALERT} from './types'
 

export const setalert=(msg, type, id)=>dispatch=>{
    dispatch({
        type:SET_ALERT,
        payload:{msg, type,id}
    })
}

export const removealert= id =>dispatch=>{
    dispatch({
        type:REMOVE_ALERT,
        payload:id
    })
}