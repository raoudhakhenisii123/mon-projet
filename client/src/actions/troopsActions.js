import { ADD_TROOPS, DELETE_TROOPS, UPDATE_TROOPS, SAVE_TROOPS, CLEAR_TROOPS, TROOP_ERROR, REMOVE_CURRENT_TROOP, GET_TROOPS } from './types'
import axios from 'axios'

export const getTroops = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get('/api/troupes', config)
        .then(res => dispatch({
            type: GET_TROOPS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: TROOP_ERROR,
            payload: err.response.msg
        }))

}

export const remove_cuurent_troop = () => {
    return {
        type: REMOVE_CURRENT_TROOP
    }
}
export const addTroops = newtroop => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/troupes', newtroop, config)
        .then(res => dispatch({
            type: ADD_TROOPS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: TROOP_ERROR,
            payload: err.response.msg
        }))

}
export const deleteTroops = id => dispatch => {
    axios.delete(`/api/troupes/${id}`)
        .then(() => dispatch({
            type: DELETE_TROOPS,
            payload: id
        }))
        .catch(err => dispatch({
            type: TROOP_ERROR,
            payload: err.response.msg
        }))

}
export const editTroops = updatedTroops => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.put(`/api/troupes/${updatedTroops._id}`, updatedTroops, config)
        .then(res => dispatch({
            type: UPDATE_TROOPS,
            payload: updatedTroops
        }))
        .catch(err => dispatch({
            type: TROOP_ERROR,
            payload: err.response.msg
        }))

}

export const saveTroops = savedTroops => dispatch => {
    dispatch({
        type: SAVE_TROOPS,
        payload: savedTroops
    })
}
export const clearTroops = id => dispatch => {
    dispatch({
        type: CLEAR_TROOPS
    })
}