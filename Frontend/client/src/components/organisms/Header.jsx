import React from 'react'
import SearchBar from '../molecules/SearchBar'
import Logo from '../atoms/Logo'
import NavBar from '../molecules/NavBar'
import MobileNavBar from '../molecules/MobileNavBar'
import IconsGroup from '../molecules/IconsGroup'

function Header() {
  return (
    <div className="bg-purple-400 p-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo />
          <SearchBar />
        </div>
        {/* NavBar visible en pantallas medianas y grandes */}
        <NavBar />
        {/* IconsGroup visible solo en pantallas medianas y grandes */}
        <div className="hidden sm:flex space-x-4">
          <IconsGroup />
        </div>
      </div>

      {/* MobileNavBar visible solo si el estado `isMobileMenuOpen` es true */}
      <MobileNavBar />
    </div>
  )
}

export default Header