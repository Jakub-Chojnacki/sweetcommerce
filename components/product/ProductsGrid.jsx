import React from 'react'
import {urlFor } from '../../lib/client';
import { SimpleGrid,Flex,Heading,Image,Text } from '@chakra-ui/react'
import Link from 'next/link'
const ProductsGrid = ({items}) => {
  console.log(items)
  return (
    <Flex direction='column' my={4} gap={8}>
        <Heading color='pink.400'>You may also like:</Heading>
        <SimpleGrid columns={['1','2','4','6']} align='center' >
           { items.map((item)=> {
                return (
                <Link key={item.slug.current} href={`/products/${item.slug.current}`}>
                    <Flex cursor='pointer' direction='column' gap={2} align='center' justify='center'>
                        <Image boxSize={24} src={urlFor(item.defaultProductVariant.images[0])}/>
                        <Text fontSize={12} fontWeight='bold'>{item.title}</Text>
                        <Text fontSize={12}>${item.defaultProductVariant.price}</Text>
                    </Flex>
                </Link>
                )
            })}
        </SimpleGrid>
    </Flex>
  )
}

export default ProductsGrid