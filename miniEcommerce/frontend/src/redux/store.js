import {legacy_createStore, applyMiddleware, combineReducers} from 'redux'
import { reducer as BookReducer} from './Books/reducer'
import { reducer as AuthReducer} from './Auth/reducer'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({BookReducer,AuthReducer})

export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))