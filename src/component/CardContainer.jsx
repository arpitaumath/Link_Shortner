import React, { useContext } from 'react'
import CardItem from './CardItem'
import Shorterncontext from '../context/Shorterncontext'

const CardContainer = () => {

    const {links} = useContext(Shorterncontext)
  return (
    <>
      
      <div className='w-full flex flex-col pb-14 justify-center items-center '>

        {links.map(link => <CardItem key={link.id} link={link}/>)}
         </div>
    </>
  )
}

export default CardContainer
