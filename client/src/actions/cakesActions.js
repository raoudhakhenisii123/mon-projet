import { GET_CAKES, ADD_CAKES, DELETE_CAKES, UPDATE_CAKES, SAVE_CAKES, CLEAR_CAKES, CAKES_ERROR, REMOVE_CURRENT_CAKES} from './types'
import axios from 'axios'

export const get_cakes = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get('/api/cakes', config)
        .then(res => dispatch({

            type: GET_CAKES,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: CAKES_ERROR,
            payload: err.response.msg
        }))

}

export const remove_cuurent_cakes = () => {
    return {
        type: REMOVE_CURRENT_CAKES
    }
}

export const addcakes = newcakes => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/cakes', newcakes, config)
        .then(res => dispatch({
            type: ADD_CAKES,
            payload: res.data

        }))
        .catch(err => dispatch({
            type: CAKES_ERROR,
            payload: err.response.msg
        }))

}

export const deletecakes = id => dispatch => {
    axios.delete(`/api/cakes/${id}`)
        .then(() => dispatch({
            type: DELETE_CAKES,
            payload: id
        }))
        .catch(err => dispatch({
            type: CAKES_ERROR,
            payload: err.response.msg
        }))

}

export const editcakes= updatedcakes => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.put(`/api/cakes/${ updatedcakes._id}`, updatedcakes, config)
        .then(res => dispatch({
            type: UPDATE_CAKES,
            payload: updatedcakes
        }))
        .catch(err => dispatch({
            type: CAKES_ERROR,
            payload: err.response.msg
        }))

}


export const savecakes = cakes => dispatch => {
    dispatch({
        type: SAVE_CAKES,
        payload: cakes
    })

}
export const clearCakes = id => dispatch => {
    dispatch({
        type: CLEAR_CAKES
    })
    

}