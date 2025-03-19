import React from 'react'
import ProductCarousel from '@/components/carrosselClaude1'
import produtosDb from '../../db/produtos.json'

function page() {
    const produtos = produtosDb.produtos;
  return (
      <div>
          <ProductCarousel produtos={produtos}/>
    </div>
  )
}

export default page