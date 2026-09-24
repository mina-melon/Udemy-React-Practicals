import { useContext, useReducer } from "react";

// create the context
const CartContext = useContext({
  items: [],
  addItems: (item) => { },
  removeItem: (id) => { }
})

function cartReducer(state, action) {

  if (action.type === 'ADD_ITEM') {
    //check if the item already exists in the cart
    const existingCartItemIndex = state.findIndex((item) => item.id === action.item.id);
    // create editable state
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      // item already exists
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      // don't forget to add that to the cart
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      // item does not exist
      updatedItems.push({ ...action.item, quantity: 1 })
    }
    return { ...state, items: updatedItems }
  }

  if (action.type === 'REMOVE_ITEM') {
    // REMOVE item
    // get the index
    const existingCartItemIndex = state.findIndex((item) => item.id === action.id);

    // get the item
    const existingCartItem = state.items[existingCartItemIndex];

    // create editable state
    const updatedItems = [...state.items];

    // does the item has quantity > 1?
    if (existingCartItem.quantity === 1) {
      // remove the item
      updatedItems.splice(existingCartItemIndex, 1)
    } else {
      // reduce the quantity by 1
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 };
      updatedItems[existingCartItemIndex] = updatedItem
    }
  }

  return state;
}
export default function CartContex({ children }) {
  const [] = useReducer(cartReducer, cartState)
  return (
    <CartContext value={{ items: [] }}>
      {children}
    </CartContext>
  )
}