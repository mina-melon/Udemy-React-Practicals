import { use, useState } from 'react';
import Modal from './UI/Modal';
import Button from './UI/Button';
import Input from './UI/Input';
import { userProgressContext } from '../store/UserProgress';
import { CartContext } from '../store/CartContext';

export default function Checkout({ open, onClose }) {
  const { progress, hideCheckout } = use(userProgressContext);
  const { items } = use(CartContext);
  const [error, setError] = useState(null);

  function handleClose() {
    setError(null);
    hideCheckout();
    if (onClose) {
      onClose();
    }
  }

  async function submitForm(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    // validate form data right after extracting
    if (
      !customerData.name ||
      customerData.name.trim() === '' ||
      !customerData.email ||
      !customerData.email.includes('@') ||
      !customerData.street ||
      customerData.street.trim() === '' ||
      !customerData['postal-code'] ||
      customerData['postal-code'].trim() === '' ||
      !customerData.city ||
      customerData.city.trim() === ''
    ) {
      setError('Please provide valid details (all fields are required and email must contain @).');
      return;
    }

    setError(null);

    // send POST Request
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order: {
            items,
            customer: customerData,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order.');
      }

      alert('Order placed successfully');
      handleClose();
    } catch (err) {
      setError(err.message || 'Something went wrong while submitting the order.');
    }
  }

  return (
    <Modal open={open ?? progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={submitForm}>
        <h2>Checkout</h2>
        <p>Total Amount: $8.99</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <p className="error">{error}</p>}

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
