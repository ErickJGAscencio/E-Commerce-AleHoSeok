import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Button from '../atoms/Button'
import NavBar from './NavBar';

function MobileNavBar() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <div className='sm:hidden' onClick={toggleMobileMenu}>
      <Button label={<FaBars size={15} />}/>
      {isMobileMenuOpen && (
        <NavBar />
      )}
    </div>
  )
}

export default MobileNavBar