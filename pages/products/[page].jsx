import React from 'react'
import ProductsGrid from '../../components/product/ProductsGrid'
import  {client} from '../../lib/client'

const Products = ({products}) => {
  
  return (
    <div>
        <ProductsGrid columnsStyle={['1','2','4','5']} headingText={'All of our products:'} items={products}/>
    </div>
  )
}

export default Products


export const getServerSideProps = async ({ params: { page }}) => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return {
      props: { products, }
    }
  }