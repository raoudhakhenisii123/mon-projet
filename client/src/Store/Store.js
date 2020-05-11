import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from '../Reducer'
import thunk from 'redux-thunk'

const middleware=[thunk]

export default createStore(rootReducer,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )