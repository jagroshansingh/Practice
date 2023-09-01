import logo from './logo.svg';
import './App.css';
import React from 'react';

function reducer(state,action)
{
  switch(action.type)
  {
    case 'Increment': return {...state,count:state.count+action.payload}
    case 'Decrement': return {...state,count:state.count-action.payload}
    default: return state
  }
}

function App() {
  // const [count,setCount]=React.useState(0)
  const [state,dispatch]=React.useReducer(reducer,{count:5})

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* <h1>Count: {count}</h1> */}
      {/* <button onClick={()=>setCount(count+1)}>Click me!</button> */}

      <h1>Count: {state.count}</h1>
      <button onClick={()=>dispatch({type:'Increment',payload:1})}>Increase</button>
      <button onClick={()=>dispatch({type:'Decrement',payload:1})}>Decrease</button>
    </div>
  );
}

export default App;
