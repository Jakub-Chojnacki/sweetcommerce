import React,{useContext} from 'react'
import {VStack,Image,Link,Modal,ModalOverlay} from '@chakra-ui/react'
import {AiOutlineClose} from 'react-icons/ai'
import GeneralContext from '../../context/general-context'
const Sidenav = () => {
  const {showSideNav,setShowSideNav} = useContext(GeneralContext)
  return (
    <VStack  zIndex='2' padding={8} backgroundColor='white' align="left" pos='absolute' left="0" top="0" h="100vh" w="250px" display={{md:"none"}}>
       <AiOutlineClose cursor="pointer" onClick={()=> setShowSideNav(false)} boxSize="15px" marginBottom={10}/>
       <VStack align="left" gap={3}>
          <Link variant="sidenav">Collections</Link>
          <Link variant="sidenav">Men</Link>
          <Link variant="sidenav">Women</Link>
          <Link variant="sidenav">About</Link>
          <Link variant="sidenav">Contact</Link>
        </VStack>
        <Modal isOpen={showSideNav} >
          <ModalOverlay display={{md:"none"}} zIndex='1' onClick={()=> setShowSideNav(false)}/>
        </Modal>
    </VStack>
  )
}

export default Sidenav