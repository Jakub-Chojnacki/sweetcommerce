import React,{useContext} from 'react'
import {VStack,Flex,Modal,ModalOverlay,Icon,Text} from '@chakra-ui/react'
import GeneralContext from '../../context/general-context'
import {FiChevronLeft} from 'react-icons/fi'
import CartItem from './CartItem'
const Cart = () => {
  const {showCart,setShowCart,cartItems,totalQuantities,totalPrice} = useContext(GeneralContext)
  console.log(cartItems)
  return (
    <VStack zIndex='2' padding={8} backgroundColor='white' align="left" pos='absolute' right="0" top="0" h="100vh" w={['350px','350px','400px','500px']} >
       <Flex align="center" gap={2}>
        <Icon as={FiChevronLeft} cursor="pointer" onClick={()=> setShowCart(false)} boxSize="15px"/>
        <Text fontWeight='bold'>Your Cart</Text>
        <Text color='pink.400'>({totalQuantities})</Text>
       </Flex>
       <Flex direction='column' >
         {cartItems.map((item)=> {
            return <CartItem product={item} key={item._id}/>
         })}
       </Flex>

       <Flex>
        Total price: ${totalPrice.toFixed(2)}
       </Flex>
        
        <Modal isOpen={showCart} >
          <ModalOverlay zIndex='1' onClick={()=> setShowCart(false)}/>
        </Modal>
    </VStack>
  )
}

export default Cart