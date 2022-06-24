import { Flex,chakra,Icon,Image} from '@chakra-ui/react'
import React,{useContext} from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import GeneralContext from '../../context/general-context'
import Link from 'next/link'
const Header = () => {
  const {setShowSideNav,setShowCart} = useContext(GeneralContext)

  return (
    <Flex borderBottom={{md:'1px'}} borderColor={{md:'neutral.light'}} px={4} py={[2,4,6]}  align="center" justify="space-between">
      <Flex align="center" gap={4}>
        <Icon as={AiOutlineMenu} onClick={()=> setShowSideNav(true)} cursor="pointer" display={{md:'none'}}/>
        <Link  href="/">
          <Flex cursor="pointer" gap={4}>
            <Image boxSize={8} src='/Sweet1.svg'/>
            <chakra.h1 color='pink.400' fontWeight='bold' fontSize={20}>Sweetcommerce</chakra.h1>
          </Flex>
        </Link>
        <Flex align="center" display={['none','none','flex']}  gap={6} marginX={10}>
          <Link href='/'>Link 1</Link>
          <Link href='/'>Link 2</Link>
          <Link href="/products/1">Products</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </Flex>
      </Flex>
        <Icon as={AiOutlineShoppingCart} onClick={()=> setShowCart(true)} cursor='pointer' fontSize={24}/>
    </Flex>
  )
}

export default Header