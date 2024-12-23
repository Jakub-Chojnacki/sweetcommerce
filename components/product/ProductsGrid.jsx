import React from 'react'
import {urlFor } from '../../lib/client';
import { SimpleGrid,Flex,Heading,Image,Text } from '@chakra-ui/react'
import Link from 'next/link'
const ProductsGrid = ({columnsStyle,headingText,items}) => {
  return (
    <Flex direction='column' my={4} gap={8}>
        <Heading color='pink.400'>{headingText}</Heading>
        <SimpleGrid columns={columnsStyle} align='center' >
           { items.map((item)=> {
                return (
                <Link key={item.slug.current} href={`/product/${item.slug.current}`}>
                    <Flex cursor='pointer' direction='column' gap={2} align='center' justify='center'>
                        <Image boxSize={32} src={urlFor(item.defaultProductVariant.images[0])}/>
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