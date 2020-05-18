import {combineReducers} from 'redux'
import AuthReducer from './authReducer'
import AlertReducer from './alertReducer'
import troopReducer from './TroopsReducer'
import DecorReducer from './DecorReducer'
import CakesReducer from './cakesReducer'

export default combineReducers({ alert:AlertReducer,auth:AuthReducer, troop:troopReducer, Decor:DecorReducer, cake:CakesReducer})