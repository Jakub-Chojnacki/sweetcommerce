import {createContext,useState} from 'react'
const GeneralContext = createContext();

export function GeneralProvider({children}){
    const [showSideNav,setShowSideNav] = useState(false)
    const [showCart,setShowCart] = useState(false)
    const [cartItems,setCartItems] = useState([])

    return (
        <GeneralContext.Provider
         value={{ 
        showSideNav,
        setShowSideNav,
        showCart,
        setShowCart,
        cartItems,
        setCartItems
         }}> 
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContext;