import {legacy_createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const store=legacy_createStore(reducer,applyMiddleware(thunk))

//-----------or------------------

const myMiddleware=(store)=>(next)=>(action)=>{
    if(typeof action=='function') return action(store.dispatch)
    return next(action)
}

const store=legacy_createStore(reducer,applyMiddleware(myMiddleware))