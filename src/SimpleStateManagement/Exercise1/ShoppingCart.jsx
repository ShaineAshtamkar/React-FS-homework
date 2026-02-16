import React, { useReducer } from "react";
import { cartReducer } from "./cartReducer";


export default function ShoppingCart() {
    const initialCartState = {
        items: [],
        total: 0,
        itemCount: 0,
    };

    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
    const handleAddItem = () => {
        cartDispatch({ type: 'ADD_ITEM', data: { name: 'Laptop', price: 999 } });
    }
    const handleRemoveItem = (itemId => {
        cartDispatch({ type: 'REMOVE_ITEM', data: itemId })
    })
    const handleClearCart = () => {
        cartDispatch({ type: 'CLEAR_CART' })
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <button onClick={handleAddItem}>Add Laptop</button>

            <ul>
                {cartState.items.map(item => (
                    < li key={item.id} >
                        {item.name} - ${item.price}
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                )
                )}
                <button onClick={() => handleClearCart()}>Clear Cart</button>

            </ul>
        </div >
    );
}
