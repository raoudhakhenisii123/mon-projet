import {ADD_TROOPS, DELETE_TROOPS, UPDATE_TROOPS,SAVE_TROOPS,CLEAR_TROOPS} from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState=
{troop:[
     {
         id:uuidv4(),
         nom:'NOUJOUM BEN AMMAR',
         lienimg:'https://cdn.acteur-fete.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcnRFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5f0e3e6b2350ba4e01d07cb4d6d7aee0c35bbe5c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9UY21WemFYcGxYM1J2WDJacGJHeGJCMmtDOUFGcEF2UUIiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7e78b7fff4cb094a6d59277a0ec197e2e8f71fa2/noujoum-ben-ammar-organisation-de-mariage-et-fete-tunis-70483.jpg',
         thèmes:''

     },
     {
        id:uuidv4(),
        nom:'OPERA ORCHESTRE',
        lienimg:'https://cdn.acteur-fete.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXRFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--40ed2974761ebd594c2dbfeff44a89688927d7d4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9UY21WemFYcGxYM1J2WDJacGJHeGJCMmtDOUFGcEF2UUIiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--7e78b7fff4cb094a6d59277a0ec197e2e8f71fa2/troupe-musicale-l-opera-orchestre-ariana-70269.jpg',
        thèmes:''
     }   
], saved:null}

const troopReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TROOPS:
            return { ...state,
                troop:  [...state.troop, action.payload]}
        case DELETE_TROOPS:
            return  {...state,
               troop: state.troop.filter(el => el.id !== action.payload)}
        case SAVE_TROOPS:
            return{
                ...state,
                saved:action.payload
            }
        case UPDATE_TROOPS:
            return {
                ...state,
                troop:state.troop.map(el => el.id==action.payload.id ? action.payload :el)
            }

        case CLEAR_TROOPS:
            return {
                ...state,
                saved:null
            }
        default:
            return state
    }


}

export default troopReducer
