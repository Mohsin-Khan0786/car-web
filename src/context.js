import { createContext, useContext } from "react";

const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    return(
        <CartContext.Provider value={{}}>
        {children}
     </CartContext.Provider>
    )
}

// Custom hook

export const useStore = () => {
    return useContext(CartContext)
}




