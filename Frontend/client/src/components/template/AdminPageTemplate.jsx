import React from 'react'
import Table from '../organisms/Table';

function AdminPageTemplate() {

  const headers = ['ID', 'Name', 'Price'];
  const data = [
    ['1', 'Product 1', '$10'],
    ['2', 'Product 2', '$20'],
    ['3', 'Product 3', '$30'],
  ];

  return (
    <div>      
      <button className='bg-white outline-none rounded-3xl pl-2 pr-2 hover:bg-pink-200'>productos</button>
      <button className='bg-white outline-none rounded-3xl pl-2 pr-2 hover:bg-pink-200'>categorias</button>
      <button className='bg-white outline-none rounded-3xl pl-2 pr-2 hover:bg-pink-200'>modelos</button>
      <button className='bg-white outline-none rounded-3xl pl-2 pr-2 hover:bg-pink-200'>Materiales</button>

      <h1>Product Table</h1>
      <Table headers={headers} data={data} />
    </div>
  )
}

export default AdminPageTemplate