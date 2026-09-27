import Modal from './UI/Modal';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';
import { currencyFormatter } from '../util/currencyFormatter';
import { use } from 'react';
import { userProgressContext } from '../store/UserProgress';

export default function CartModal({ open, onClose }) {
  const { items, addItem, removeItem } = use(CartContext);
  const { progress, hideCart } = use(userProgressContext);
  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  return (
    <Modal className="cart" open={progress === 'cart'}>
      <h2>Your Cart</h2>

      {/* Cart Items List */}
      <ul>
        {/* Skeleton Cart Item 1 */}
        {items.length === 0 && <li>No items in cart</li>}
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
            <div className="cart-item-actions">
              <button onClick={() => removeItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addItem(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Cart Total */}
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>

      {/* Modal Actions */}
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
