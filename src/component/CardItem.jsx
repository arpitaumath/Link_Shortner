import React, { useContext } from 'react'
import Shorterncontext from './../context/Shorterncontext';

const CardItem = ({link}) => {

  const {dispatch} = useContext(Shorterncontext)
  const removelink =(id) =>{
    dispatch({type:'REMOVE_LINK', payload :id})
    
  
  }
  return (
    <div className=' relative w-3/4 flex flex-col justify-between bg-white rounded-md p-4 my-2'>
            <a href={link.data} className='text-blue-700 h-5 rounded-md  bg-white w-2/3'>{link.data}</a>
            <h1 className=' h-5 rounded-md  bg-white w-2/3'>{link.originalURL}</h1>
            <button className='text-white w-7 h-7 absolute -top-3 -right-2 bg-red-700 text-xl  font-bold rounded-[50%]  pb-8' onClick={() => removelink(link.id)}>x</button>
           </div>
  )
}

export default CardItem
