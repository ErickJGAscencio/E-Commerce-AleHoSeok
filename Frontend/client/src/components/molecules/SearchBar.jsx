import React from 'react'
import SearchInput from '../atoms/SearchInput'
import Button from '../atoms/Button'

function SearchBar() {
  return (
    <div className='flex justify-between gap-1'>
      <SearchInput />
      <Button label={'Buscar'} className="bg-pink-500 text-white text-xs px-2 py-2 rounded-3xl hover:bg-pink-600" />
    </div>
  )
}

export default SearchBar