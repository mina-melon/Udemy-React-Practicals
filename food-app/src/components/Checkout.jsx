import { use, useState } from 'react';
import Modal from './UI/Modal';
import Button from './UI/Button';
import Input from './UI/Input';
import { userProgressContext } from '../store/UserProgress';
import { CartContext } from '../store/CartContext';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function Checkout({ open, onClose }) {
  const { progress, hideCheckout } = use(userProgressContext);
  const { items, clearCart } = use(CartContext);
  const [PageError, setPageError] = useState(null);

  const { data, isLoading, error, sendRequest, clearData } = useHttp(
    'http://localhost:3000/orders',
    requestConfig
  );

  function handleClose() {
    setPageError(null);
    hideCheckout();
    if (onClose) {
      onClose();
    }
  }

  function handleFinish() {
    hideCheckout();
    clearCart();
    clearData();
    if (onClose) {
      onClose();
    }
  }

  async function checkoutAction(formData) {
    const customerData = Object.fromEntries(formData.entries());

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
      setPageError('Please provide valid details (all fields are required and email must contain @).');
      return;
    }

    setPageError(null);

    // send POST Request
    await sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );
  }

  if (data && !error) {
    return (
      <Modal open={open ?? progress === 'checkout'} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next few
          minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={open ?? progress === 'checkout'} onClose={handleClose}>
      <form action={checkoutAction}>
        <h2>Checkout</h2>
        <p>Total Amount: $8.99</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {PageError && <Error title="Invalid details" message={PageError} />}
        {error && <Error title="Failed to place order!" message={error} />}

        {!isLoading && (
          <p className="modal-actions">
            <Button type="button" textOnly onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" disabled={isLoading}>Submit Order</Button>
          </p>
        )}
        {isLoading && (
          <span>Submitting...</span>
        )}
      </form>
    </Modal>
  );
}
