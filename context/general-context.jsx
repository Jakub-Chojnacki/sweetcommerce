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

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.defaultProductVariant.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
            else{
              return {
                ...cartProduct
              }
            }
          })

    
          setCartItems([...updatedCartItems]);
        } else {
          product.quantity = quantity;
          
          setCartItems([...cartItems, { ...product }]);
        }
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.defaultProductVariant.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }


    const changeCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id)
    
        if(value === 'inc') {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.defaultProductVariant.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.defaultProductVariant.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
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
        onAdd,
        onRemove,
        changeCartItemQuantity
         }}> 
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContext;