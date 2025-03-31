import React, { useReducer } from 'react'

const Reducer = () => {
    const reducer = (state,action)=>{
        switch(action.type){
            case 'count':
                return {...state,count: state.count+1}
            case 'bg':
                return {...state,bg: state.bg === 'dark' ? 'light':'dark'}
        }
    }
    const [state,dispatch] = useReducer(reducer,{count: 0, bg:'dark'})
   
  return (
    <div className='container'>
        {state.count}
        <button className='btn' onClick={() =>{dispatch({type:'count'})}}> Add count </button> 
        <button className='btn' onClick={() =>{dispatch({type:'bg'})}}> {state.bg}</button> 
    </div>
  )
}

export default Reducer