import React from 'react'
import SocialMedia from '../molecules/SocialMedia'

function Footer() {
  return (
    <div className='bg-purple-400 flex-col text-white'>
      <div className='flex justify-evenly p-10'>
        <SocialMedia />
        <div>
          <p className='text-3xl'>Explora</p>
          <p>Uno</p>
          <p>Uno</p>
          <p>Uno</p>
          <p>Uno</p>
        </div>
        
      </div>
      <p className='flex justify-center p-5'>AleHoSeokStore. Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer