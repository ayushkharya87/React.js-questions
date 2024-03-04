import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const cartContext = createContext();

const CartProvider = ({children}) => {

    // reducer
    function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_TO_CART":
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            case "UPDATE_QUANTITY":
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity} : item)
                };
            case "REMOVE":
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== action.payload)
                };
            default: 
                return state;
            
        }
    };

    const initialState = {
        cartItems : [],
    };
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);


    return <cartContext.Provider value={{cartState, cartDispatch}}>
        {children}
    </cartContext.Provider>
};

const useCart = () => {
    return useContext(cartContext)
}

export {CartProvider, useCart}