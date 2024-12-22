import React from 'react'

const Navbar = () => {
  return (
    <>
       <nav className='fixed w-full py-1 flex items-center justify-between bg-slate-700 shadow-lg shadow-black px-4'>
        <h1 className='text-2xl uppercase font-bold text-white '>shorty</h1>
        <button className='m-1 p-1 bg-blue-800  text-white text-lg font-bold  rounded-md'>About</button>
      </nav>
      
    </>
  )
}

export default Navbar
