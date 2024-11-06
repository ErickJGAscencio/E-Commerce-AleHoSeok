import React from 'react'
import ButtonDropDown from '../atoms/ButtonDropDown'
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa'

function IconsGroup() {
  return (
    <div className="flex items-center space-x-2">
      <p className='flex items-center'><ButtonDropDown icon={<FaUser />} /> user-name</p>
      <ButtonDropDown icon={<FaHeart />} />
      <ButtonDropDown icon={<FaShoppingCart />} />
    </div>
  )
}

export default IconsGroup