import React from 'react'
import SearchInput from '../atoms/SearchInput'
import Button from '../atoms/Button'

function SearchBar() {
  return (
    <div className='flex justify-between'>
      <SearchInput></SearchInput>
      <Button label={'Search'} className={""}/>
    </div>
  )
}

export default SearchBar