import React from 'react'

function Button({ label, className }) {
  return (
    <button className={`px-4 rounded ${className}`}>
      {label}
    </button>
  );
}


export default Button