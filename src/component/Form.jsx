
import React, { useContext, useState } from 'react'
import { fetchURL } from '../context/Shorternserver'
import Shorterncontext from '../context/Shorterncontext'

const Form = () => {
  const {dispatch} = useContext(Shorterncontext)

  const [text , setText] = useState('')
  const handleSubmit = async e =>{
    e.preventDefault()
     
    const ShorternUrlData =await fetchURL(text)
     dispatch({type : 'ADD_LINK' , payload:{
      id:crypto.randomUUID(),
      originalURL : text ,
      ...ShorternUrlData
     }})
    setText('')
  }
  return (
    <>
       <div className=' w-full  flex flex-col items-center justify-center text-white pt-40 pb-10'>
            <h1 className='w-3/4  text-6xl font-black text-center '>Shorten Your Big URL With Our Tool</h1>
            <form className='w-3/4 mt-10' onSubmit={handleSubmit}>
              <input className='h-14 w-2/3 rounded-l-md outline-none text-black px-5 placeholder:text-black'  type='text' placeholder='Enter the link ' onChange={(e) => setText(e.target.value)} value={text}     />
              <button className='h-14 pb-1  w-1/3 rounded-r-md text-xl font-bold bg-green-700'>Shorter</button>
            </form>
          </div>
    </>
  )
}

export default Form
