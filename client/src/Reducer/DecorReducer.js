import {GET_DECORS, ADD_DECORS, DELETE_DECORS, UPDATE_DECORS, SAVE_DECORS, CLEAR_DECORS, DECOR_ERROR, REMOVE_CURRENT_DECOR} from '../actions/types'


const initialState={
decors:[], 
saved:null,
error:null
}

const DecorReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_DECORS:
            return {
                ...state,
                decors:action.payload
            }

        case ADD_DECORS:
            return { ...state,
                decors:  [...state.decors, action.payload]}

        case DELETE_DECORS:
            return  {...state,
                decors: state.decors.filter(el => el._id !== action.payload)}

        case SAVE_DECORS:
            return{
                ...state,
                saved: action.payload
            }

        case UPDATE_DECORS:
            return {
                ...state,
                decors: state.decors.map(el => el._id === action.payload._id ? action.payload :el)
            }

        case CLEAR_DECORS:
            return {
                ...state,
                saved:null
            }

        case DECOR_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case REMOVE_CURRENT_DECOR:
            return {
                ...state,
                decors:[]

            }
            
        default:
            return state
    }


}

export default DecorReducer
