import React from 'react'
import {urlFor } from '../../lib/client';
import {Flex,Text,Image} from '@chakra-ui/react'
const CartItem = ({product}) => {
  const {title,defaultProductVariant:{grams,price,images},tags,categories,body } = product;
  return (
    <Flex align="center" gap={4}>
      <Image boxSize={32} src={urlFor(images[0])}/>
      <Text fontSize={12}>{title}</Text>
      <Text>${price}</Text>
    </Flex>
  )
}

export default CartItem