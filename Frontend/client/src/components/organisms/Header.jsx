import React from 'react'
import SearchBar from '../molecules/SearchBar'

function Header() {
  return (
    <div
      className="bg-orange-400 p-1 flex justify-between">
      <p>LOGO</p>
      <SearchBar />
    </div>
  )
}

export default Header