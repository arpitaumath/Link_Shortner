import React from 'react'
import Navbar from './component/Navbar'
import Form from './component/Form'
import CardContainer from './component/CardContainer'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='w-full min-h-screen  bg-slate-900'>
         <Form/>
         <CardContainer/>
         <Footer/>
      </div>
 
    </>
  )
}

export default App
