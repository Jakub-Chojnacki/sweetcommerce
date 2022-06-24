import React,{useContext} from 'react'
import {VStack,Link,Modal,ModalOverlay} from '@chakra-ui/react'
import GeneralContext from '../../context/general-context'
import {AiOutlineClose} from 'react-icons/ai'
const Cart = () => {
  const {showCart,setShowCart} = useContext(GeneralContext)
  return (
    <VStack zIndex='2' padding={8} backgroundColor='white' align="left" pos='absolute' right="0" top="0" h="100vh" w="250px" >
       <AiOutlineClose cursor="pointer" onClick={()=> setShowCart(false)} boxSize="15px" marginBottom={10}/>
       <VStack align="left" gap={3}>
          <Link variant="sidenav">Cart</Link>
        </VStack>
        <Modal isOpen={showCart} >
          <ModalOverlay zIndex='1' onClick={()=> setShowCart(false)}/>
        </Modal>
    </VStack>
  )
}

export default Cart