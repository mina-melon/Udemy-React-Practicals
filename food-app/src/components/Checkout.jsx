import { use } from 'react';
import Modal from './UI/Modal';
import Button from './UI/Button';
import Input from './UI/Input';
import { userProgressContext } from '../store/UserProgress';

export default function Checkout({ open, onClose }) {
  const { progress, hideCheckout } = use(userProgressContext);



  return (
    <Modal open={open ?? progress === 'checkout'}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: $8.99</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={onClose || hideCheckout}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
