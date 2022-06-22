import {createContext,useState} from 'react'
const GeneralContext = createContext();

export function GeneralProvider({children}){
    const [showSideNav,setShowSideNav] = useState(false)

    return (
        <GeneralContext.Provider
         value={{ showSideNav,setShowSideNav }}> 
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContext;