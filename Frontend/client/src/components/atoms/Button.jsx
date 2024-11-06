import React from 'react'

function Button({ label, className }) {
  return (
    <button className={`px-3 rounded-xl ${className}`}>
      {label}
    </button>
  );
}


export default Button