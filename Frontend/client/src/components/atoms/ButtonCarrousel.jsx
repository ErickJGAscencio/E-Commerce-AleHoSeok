import React from 'react'

function ButtonCarrousel({icon, className}) {
  return (
    <button className={`px-3 rounded-xl ${className}`}>
      {icon}
    </button>
  )
}

export default ButtonCarrousel