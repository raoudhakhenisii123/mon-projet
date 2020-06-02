import { GET_DECORS, ADD_DECORS, DELETE_DECORS, UPDATE_DECORS, SAVE_DECORS, CLEAR_DECORS, DECOR_ERROR, REMOVE_CURRENT_DECOR } from './types'
import axios from 'axios'

export const get_Decors = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get('/api/decors', config)
        .then(res => dispatch({

            type: GET_DECORS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: DECOR_ERROR,
            payload: err.response.data.msg
        }))

}

export const remove_cuurent_decor = () => {
    return {
        type: REMOVE_CURRENT_DECOR
    }
}

export const addDecors = newDecor => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/decors', newDecor, config)
        .then(res => dispatch({
            type: ADD_DECORS,
            payload: res.data

        }))
        .catch(err => dispatch({
            type: DECOR_ERROR,
            payload: err.response.msg
        }))

}

export const deleteDecors = id => dispatch => {
    axios.delete(`/api/decors/${id}`)
        .then(() => dispatch({
            type: DELETE_DECORS,
            payload: id
        }))
        .catch(err => dispatch({
            type: DECOR_ERROR,
            payload: err.response.msg
        }))

}

export const editDecors = updatedDecors => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.put(`/api/decors/${updatedDecors._id}`, updatedDecors, config)
        .then(res => dispatch({
            type: UPDATE_DECORS,
            payload: updatedDecors
        }))
        .catch(err => dispatch({
            type: DECOR_ERROR,
            payload: err.response.msg
        }))

}


export const saveDecors = Decor => dispatch => {
    dispatch({
        type: SAVE_DECORS,
        payload: Decor
    })

}
export const clearDecors = id => dispatch => {
    dispatch({
        type: CLEAR_DECORS
    })
    

}