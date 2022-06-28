import React,{useContext} from 'react'
import {urlFor } from '../../lib/client';
import {Flex,Text,Image,Icon} from '@chakra-ui/react'
import {AiOutlineMinus,AiOutlinePlus,AiOutlineCloseCircle} from 'react-icons/ai'
import GeneralContext from '../../context/general-context'
const CartItem = ({product}) => {
  const {title,defaultProductVariant:{grams,price,images},tags,categories,body,quantity,_id } = product;
  const {onRemove,changeCartItemQuantity} = useContext(GeneralContext)
  return (
    <Flex justify="space-between" align="center" p={2}>
      <Image borderRadius='12px' padding={2} backgroundColor='#ebebeb' boxSize={['24','24','32','32']} src={urlFor(images[0])}/>
      <Flex direction='column' justify="space-between"  align='start' py={4} px={['6','6','10','12']}>
        <Text fontSize={14}>{title}</Text>
        <Flex  borderRadius='4px' background='neutral.light' p={1} align='center' justify='space-between' width={['60px','80px','80px','120px']}>
            <AiOutlineMinus onClick={() => changeCartItemQuantity(_id, 'inc')} cursor='pointer'/>
            <Text>{quantity}</Text>
            <AiOutlinePlus  onClick={() => changeCartItemQuantity(_id, 'inc')} cursor='pointer'/>
          </Flex>
      </Flex>
    <Flex direction='column' justify="space-between" align='end' py={4} px={6}>
      <Text>${price}</Text>
      <Icon cursor='pointer' as={AiOutlineCloseCircle} onClick={()=>onRemove(product)}/>
    </Flex>
    
    </Flex>
  )
}

export default CartItem