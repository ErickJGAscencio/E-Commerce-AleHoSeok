import React from 'react'

function ButtonAsLink({label, className}) {
  return (
    <a href="https:google.com" className={`px-3 rounded-xl ${className || ""}`}>
      {label}
    </a>
  )
}

export default ButtonAsLink