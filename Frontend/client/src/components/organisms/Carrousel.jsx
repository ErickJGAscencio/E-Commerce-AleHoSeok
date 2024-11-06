import React from 'react'
import ButtonCarrousel from '../atoms/ButtonCarrousel'
import ProductPricture from '../atoms/ProductPricture'

function Carrousel() {
  return (
    <div className='h-64 bg-white flex justify-between items-center'>
      <ButtonCarrousel icon={"<"} className="bg-green-500 text-white text-xs px-2 py-2 rounded hover:bg-green-600" />
      <ProductPricture imageUrl={'https://th.bing.com/th/id/R.e3734412b2059289c2705e9b9db2e740?rik=47GhGbLOKGuLyQ&pid=ImgRaw&r=0'} />{/* CAMBIAR IMAGEN */}
      <ButtonCarrousel icon={">"} className="bg-green-500 text-white text-xs px-2 py-2 rounded hover:bg-green-600" />
    </div>
  )
}

export default Carrousel