import {ADD_TROOPS, DELETE_TROOPS, UPDATE_TROOPS,SAVE_TROOPS,CLEAR_TROOPS} from './types'

export const addTroops=newtroop => dispatch=>{
    dispatch({
        type:ADD_TROOPS,
        payload:newtroop
    })
}
export const deleteTroops=id =>dispatch =>{
    dispatch({
        type:DELETE_TROOPS,
        payload:id
    })
}
export const editTroops =updatedTroops =>dispatch=>{
    dispatch({
        type:UPDATE_TROOPS,
        payload:updatedTroops
    })
}

export const saveTroops=savedTroops =>dispatch=>{
    dispatch({
        type:SAVE_TROOPS,
        payload:savedTroops
    })
}
export const clearTroops= id =>dispatch=>{
    dispatch({
        type:CLEAR_TROOPS
    })
}