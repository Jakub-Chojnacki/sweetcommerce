import { Flex,chakra,Link,Icon} from '@chakra-ui/react'
import React,{useContext} from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import GeneralContext from '../../context/general-context'
const Header = () => {
  const {showSideNav,setShowSideNav} = useContext(GeneralContext)

  return (
    <Flex borderBottom={{md:'1px'}} borderColor={{md:'neutral.light'}} px={4} py={[2,4,6]}  align="center" justify="space-between">
      <Flex align="center" gap={4}>
        <Icon as={AiOutlineMenu} onClick={()=> setShowSideNav(true)} cursor="pointer" display={{md:'none'}}/>

        <chakra.h1 color='pink.400' fontWeight='bold' fontSize={20}>Sweetcommerce</chakra.h1>
        <Flex align="center" display={['none','none','flex']}  gap={6} marginX={10}>
          <Link variant="nav">Link 1</Link>
          <Link variant="nav">Link 2</Link>
          <Link variant="nav">Link 3</Link>
          <Link variant="nav">About</Link>
          <Link variant="nav">Contact</Link>
        </Flex>
      </Flex>
        <AiOutlineShoppingCart />
    </Flex>
  )
}

export default Header