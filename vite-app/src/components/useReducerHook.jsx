import React, { useReducer, useState } from 'react'

let initialState={
    count1:0,
    count2:0,
    count3:0
}

let reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case 'firstCount': return {...state,count1:state.count1+payload}
        case 'secondCount': return {...state,count2:state.count2+payload}
        case 'thirdCount': return {...state,count3:state.count3+payload}
        default: return state
    }
}

export const UseReducerHook = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const {count1,count2,count3}=state

    // const [count1,setCount1]=useState(0)
    // const [count2,setCount2]=useState(0)
    // const [count3,setCount3]=useState(0)

    const handleClickFirst=()=>{
        dispatch({type:'firstCount',payload:1})
        // setCount1(count1+1)
    }

    const handleClickSecond=()=>{
        dispatch({type:'secondCount',payload:2})
        // setCount2(count2+2)
    }

    const handleClickThird=()=>{
        dispatch({type:'thirdCount',payload:3})
        // setCount3(count3+3)
    }
  return (
    <div style={{display:'grid'}}>
        <label><button onClick={handleClickFirst}>Btn1</button> {count1}</label>
        <label><button onClick={handleClickSecond}>Btn2</button> {count2}</label>
        <label><button onClick={handleClickThird}>Btn3</button> {count3}</label>
    </div>
  )
}
