import {createContext,useState} from 'react'
const GeneralContext = createContext();

export function GeneralProvider({children}){
    const [showSideNav,setShowSideNav] = useState(false)
    const [showCart,setShowCart] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);


    let foundProduct;
    let index;

    const onAdd = (product,quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
    
          setCartItems(updatedCartItems);
        } else {
          product.quantity = quantity;
          
          setCartItems([...cartItems, { ...product }]);
        }
    }

    return (
        <GeneralContext.Provider
         value={{ 
        showSideNav,
        setShowSideNav,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalQuantities,
        setTotalQuantities,
        totalPrice,
        setTotalPrice,
        onAdd
         }}> 
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContext;