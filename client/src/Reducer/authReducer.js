import {REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT,LOADED_USER} from '../actions/types'


const initialState={
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    user:null,
    error:null 
}
const AuthReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOADED_USER:
            return{
                ...state,
                isAuthenticated : true,
                user: action.payload,
                error:null                
            }
         case LOGIN_SUCCESS:
        case  REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                error:null 
            }
            
             case AUTH_ERROR:
             case LOGOUT:
             case LOGIN_FAIL:
             case REGISTER_FAIL:
                localStorage.removeItem('token')
                return {
                    ...state,
                    token:null,
                    user:null,
                    isAuthenticated:false,
                    error:action.payload
                }
                case CLEAR_ERROR:
                    return{
                        ...state,
                        error:null
                    }
        default:
            return state
    }
}
export default AuthReducer