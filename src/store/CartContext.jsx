import React, { useReducer } from "react";
import { ADD } from "../Constands";
 export  const CartContext = React.createContext ()


const initialState = {
    items: [],
    totalAmount: 0,
}
 export const cartReducer = (state, action ) => {
    switch(action.type) {
        case ADD:
            const newItems = state.items.concat(action.item)
            const newAmount = state.totalAmount + 1;
                return{
                    ...state,
                    items: newItems,
                    totalAmount: newAmount,
                }
        default : return state
    }
}


const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

 const onAddHandler = (item) => {
    dispatch({type: ADD, item: item})
 }
 const onRemoveHandler = (item) => {
    
 }

    return  <CartContext.Provider value={{

            items: state.items,
            totalAmount: state.totalAmount,
            onAdd: onAddHandler,
            onRemove: onRemoveHandler,

        }}> {props.children}</CartContext.Provider>
    
}

export default CartContextProvider