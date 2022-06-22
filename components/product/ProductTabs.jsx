import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Flex,Image,Box } from '@chakra-ui/react'
const ProductTabs = ({images,thumbnails}) => {
   const [tabIndex, setTabIndex] = React.useState(0)
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
         <TabPanel>
            <Image  display={{md:'none'}} onClick={handlePrevious} p={4} background="white"  borderRadius="50%" position="absolute" left="25" top="50%" src="../images/icons/icon-previous.svg"/>
               <Image   borderRadius={{md:'6px'}} src={panel}/>
            <Image  display={{md:'none'}} onClick={handleNext} p={4} background="white"  borderRadius="50%"  right="25" top="50%" position="absolute" src="../images/icons/icon-next.svg"/>
         </TabPanel>
         )
    })

    const tabs = thumbnails.map((tab,index)=> {
      return (
         <Tab>
            <Box border="2px" borderColor={index === tabIndex ? "primary.orange":"transparent"} borderRadius={{md:'10px'}}> 
             <Image opacity={index === tabIndex ? '35%' : "100%"} borderRadius={{md:'10px'}} src={tab}/>
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
      <TabList display={['none','none','flex']}>
       {tabs}
      </TabList>  
    </Tabs>
   </Flex>
  )
}

export default ProductTabs