import {combineReducers} from 'redux'
import AuthReducer from './authReducer'
import AlertReducer from './alertReducer'
import troopReducer from './TroopsReducer'

export default combineReducers({auth:AuthReducer, alert:AlertReducer, troop:troopReducer})