import React,{useState,useEffect} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Flex,Image,Box,Icon } from '@chakra-ui/react'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import {urlFor } from '../../lib/client';
const ProductTabs = ({images}) => {

   useEffect(()=> {
      setTabIndex(0)
   },[images])
   //it's needed because Tabs keeps their index between elements

   const [tabIndex, setTabIndex] = useState(0)
   const handleTabsChange = (index) => {
      setTabIndex(index)
    }

   const handlePrevious = () => {
    if(tabIndex > 0){
       setTabIndex(prev => prev - 1)
    }else{
        setTabIndex(images.length - 1)
    }
   }
    
   const handleNext = () => {
   if(tabIndex < images.length - 1){
      setTabIndex(prev => prev + 1)
    }else{
     setTabIndex(0)
    }
   }

    const panels = images.map((panel)=> {
      return (
         <TabPanel key={panel._key}>
            <Icon as={BsChevronLeft}  display={{md:'none'}} onClick={handlePrevious} color='white' p={2} fontSize={32} background="pink.400"  borderRadius="50%" position="absolute" left="-25" top="50%"/>
               <Image minW={['200px','250px','300px','400px']} backgroundColor='#ebebeb' borderRadius='15px' height={{sm:'300px', md:'400px'}} alt='product-photo' src={urlFor(panel)}/>
            <Icon as={BsChevronRight} display={{md:'none'}} color='white' onClick={handleNext}  fontSize={32} p={2} background="pink.400"   borderRadius="50%"  right="-25" top="50%" position="absolute"/>
         </TabPanel>
         )
    })

    const tabs = images.map((tab,index)=> {
      return (
         <Tab key={tab._key} boxSize={36}>
            <Box border="2px" borderColor={index === tabIndex ? "primary.orange":"transparent"} borderRadius={{md:'10px'}}> 
              <Image opacity={index === tabIndex ? '35%' : "100%"} borderRadius={{md:'10px'}} src={urlFor(tab)}/>
            </Box>
         </Tab>
      )
    })

  return (
    <Flex direction="column" gap={6} >
     <Tabs variant='unstyled' index={tabIndex} onChange={handleTabsChange}>
      <TabPanels position="relative">
       {panels}
      </TabPanels>
      <TabList display={['none','none','grid']}  gridTemplateColumns={`repeat(${images.length}, 1fr)`}>
       {tabs}
      </TabList>  
    </Tabs>
   </Flex>
  )
}

export default ProductTabs