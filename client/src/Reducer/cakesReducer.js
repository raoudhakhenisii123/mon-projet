import {GET_CAKES, ADD_CAKES, DELETE_CAKES, UPDATE_CAKES, SAVE_CAKES, CLEAR_CAKES, CAKES_ERROR, REMOVE_CURRENT_CAKES} from '../actions/types'


const initialState={
cakes:[], 
saved:null,
error:null
}

const CakesReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_CAKES:
            return {
                ...state,
                cakes:action.payload
            }

        case ADD_CAKES:
            return { ...state,
                cakes:  [...state.cakes, action.payload]}

        case DELETE_CAKES:
            return  {...state,
                cakes: state.cakes.filter(el => el._id !== action.payload)}

        case SAVE_CAKES:
            return{
                ...state,
                saved: action.payload
            }

        case UPDATE_CAKES:
            return {
                ...state,
                cakes: state.cakes.map(el => el._id === action.payload._id ? action.payload :el)
            }

        case CLEAR_CAKES:
            return {
                ...state,
                saved:null
            }

        case CAKES_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case REMOVE_CURRENT_CAKES:
            return {
                ...state,
                cakes:[]

            }
            
        default:
            return state
    }


}

export default CakesReducer
