import React,{useContext} from 'react'
import Header from './Header'
import {Container} from '@chakra-ui/react'
import Sidenav from './Sidenav'
import GeneralContext from '../../context/general-context'
const Layout = ({children}) => {
  const {showSideNav} = useContext(GeneralContext)
  return (
    <Container maxW={{sm:'100vw', md:'90vw', lg:'80vw', xl:'70vw'}} paddingBottom={6}>
      <Header/>
      {showSideNav && <Sidenav/>}
      <main>
        {children}
      </main>
    </Container>
  )
}

export default Layout