import React from 'react';
import { client } from '../../lib/client';
import {PortableText} from '@portabletext/react'
import { SimpleGrid,VStack,Flex,Heading,Text,Button} from '@chakra-ui/react'
import ProductTabs from '../../components/product/ProductTabs'
import ProductsGrid from '../../components/product/ProductsGrid'
import {AiOutlinePlus,AiOutlineMinus,AiOutlineShoppingCart} from 'react-icons/ai'
const ProductDetails = ({ product,vendor,newestSix }) => {
  const {title,defaultProductVariant:{grams,price,images},tags,categories,body } = product;
  return (
    // <div>
    //     <img src={urlFor(images[0])}/>
    //    This product is called {title}.It costs {price} for {grams} grams. The tag is {tags}, categories are  and vendor is {vendor.title}
    //    <PortableText value={body?.en}/>
    //   <div>
    //     {vendor[0].title}
    //     <img src={urlFor(vendor[0].logo)}/>
    //   </div>
    // </div>
<Flex direction="column">
  <Flex p={12} direction={['column','column','row']} align='center' gap={{md:'12',lg:'16'}} marginY={{md:'6'}}>
    <ProductTabs  images={images}/>
    <VStack  marginBottom={'6'} marginTop={['6','6','0']} align='left'>
      <Heading color='pink.400' textTransform='uppercase' size='sm'>{vendor[0].title}</Heading>
      <Heading>{title}</Heading>
      <Flex py={6} fontSize={14} color='gray.500'><PortableText fontSize={4} value={body?.en}/></Flex>
      <Flex paddingY={{md:'6'}} color='neutral.dark'> 
        <Flex align='center' gap={6}>
          <Text fontSize='3xl' fontWeight='bold' color='pink.400'>${price}</Text>
          <Text>/ {grams} grams</Text>
        </Flex>
      </Flex>
      <SimpleGrid  columns={['1','1','2']} gap={['2','2','6']} >
        <Flex  borderRadius='4px' background='neutral.light' p={4} align='center' justify='space-between'>
          <AiOutlineMinus cursor='pointer'/>
          <Text>3</Text>
          <AiOutlinePlus  cursor='pointer'/>
        </Flex>
        <Button py={7} backgroundColor='pink.400' color='white' gap={4}>
          <AiOutlineShoppingCart color='white'/>
          Add to cart
          </Button>
      </SimpleGrid> 
    </VStack>
  </Flex>
  <ProductsGrid columnsStyle={['1','2','4','6']} headingText={'You may also like:'}  items={newestSix}/>
</Flex>
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

  const newestSixQuery = '*[_type == "product"] | order(_createdAt desc)[0..5]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  const vendorQuery = `*[_type == "vendor" && _id=='${product.vendor._ref}']`
  const vendor = await client.fetch(vendorQuery)
  const newestSix = await client.fetch(newestSixQuery)



  return {
    props: { products, product,vendor,newestSix} 
  }
}

export default ProductDetails