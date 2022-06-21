import { Flex,chakra,Link } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {

  return (
    <Flex borderBottom={{md:'1px'}} borderColor={{md:'neutral.light'}} px={4} py={[2,4,6]}  align="center" justify="space-between">
      <Flex align="center" gap={4}>
        <AiOutlineMenu onClick={()=> setShowSideNav(true)} cursor="pointer" display={{md:'none'}}/>

        {/* <Image src="./images/logo.svg"/> */}
        <chakra.h1 color='pink.400' font-weight='bold' fontSize={20}>Sweetcommerce</chakra.h1>
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