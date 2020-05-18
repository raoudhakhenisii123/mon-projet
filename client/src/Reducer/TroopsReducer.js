import {ADD_TROOPS, DELETE_TROOPS, UPDATE_TROOPS,SAVE_TROOPS,CLEAR_TROOPS,TROOP_ERROR, GET_TROOPS, REMOVE_CURRENT_TROOP} from '../actions/types'


const initialState={
troop:[], 
saved:null,
error:null
}

const troopReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_TROOPS:
            return {
                ...state,
                troop:action.payload
            }
        case ADD_TROOPS:
            return { ...state,
                troop:  [ action.payload, ...state.troop]}
        case DELETE_TROOPS:
            return  {...state,
               troop: state.troop.filter(el => el._id !== action.payload)}
        case SAVE_TROOPS:
            return{
                ...state,
                saved: action.payload
            }
        case UPDATE_TROOPS:
            return {
                ...state,
                troop: state.troop.map(el => el._id === action.payload._id ? action.payload :el)
            }

        case CLEAR_TROOPS:
            return {
                ...state,
                saved:null
            }
        case TROOP_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_CURRENT_TROOP:
            return {
                ...state,
                troop: []

            }
        default:
            return state
    }


}

export default troopReducer
