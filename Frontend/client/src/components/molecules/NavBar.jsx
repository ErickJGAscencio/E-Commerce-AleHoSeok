import React from 'react'
import ButtonAsLink from '../atoms/ButtonAsLink'

function NavBar() {
  return (
    <div className='hidden md:flex space-x-4'>{ /* QUITAR EL HIDDEN?? */}
      <ButtonAsLink label="Google" className="bg-transparent text-white text-xs px-2 py-2 rounded hover:bg-purple-600" />
      <ButtonAsLink label="Inicio" className="bg-transparent text-white text-xs px-2 py-2 rounded hover:bg-purple-600" />
      <ButtonAsLink label="Categorías" className="bg-transparent text-white text-xs px-2 py-2 rounded hover:bg-purple-600" />
      <ButtonAsLink label="Ofertas" className="bg-transparent text-white text-xs px-2 py-2 rounded hover:bg-purple-600" />
      <ButtonAsLink label="Contacto" className="bg-transparent text-white text-xs px-2 py-2 rounded hover:bg-purple-600" />
    </div>
  )
}

export default NavBar
