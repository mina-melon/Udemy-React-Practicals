import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItems: ((item) => { }),
  removeItem: ((id) => { })
})

function cartReducer(state, action) {
  // add to cart
  if (action.type === 'ADD_ITEM') {
    // check if item already exists
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    // create editable state
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      // item already exists in cart, update the quantity
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
      // add that to the mutable state
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      // item does not exist in cart
      updatedItems.push({ ...action.item, quantity: 1 })
    }
    return ({ ...state, items: updatedItems })
  }

  // remove from cart
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
    const existingCartItem = state.items[existingCartItemIndex];
    // create editable state
    const updatedItems = [...state.items];
    // if items has quantity of one, remove, more than one reduce quantity by 1
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1)
    } else {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
      updatedItems[existingCartItemIndex] = updatedItem
    }
    return ({ ...state, items: updatedItems })
  }

  // if none
  return state;
}

export default function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })
  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item: item })
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem
  }
  return (
    <CartContext value={cartContext}>{children}</CartContext>
  )
}