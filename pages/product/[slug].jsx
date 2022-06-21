import React from 'react';
import { client, urlFor } from '../../lib/client';
import {PortableText} from '@portabletext/react'
const ProductDetails = ({ product, products,vendor }) => {
  const {title,defaultProductVariant:{grams,price,images},tags,categories,body } = product;
  return (
    <div>
     
        <img src={urlFor(images[0])}/>
        
       This product is called {title}.It costs {price} for {grams} grams. The tag is {tags}, categories are  and vendor is {vendor.title}
       <PortableText value={body?.en}/>

      <div>
        {vendor[0].title}
        <img src={urlFor(vendor[0].logo)}/>
      </div>

   
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
 
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  const vendorQuery = `*[_type == "vendor" && _id=='${product.vendor._ref}']`
  const vendor = await client.fetch(vendorQuery)

  console.log(product);

  return {
    props: { products, product,vendor}
  }
}

export default ProductDetails