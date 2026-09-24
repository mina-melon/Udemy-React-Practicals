import Header from "./Header";
import Meals from "./Meals";

export default function Homepage() {

  return (
    <>
      {/* Main Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main>
        {/*
          Error State Skeleton (Styled by .error in index.css):
          <div className="error">
            <h2>Failed to fetch meals</h2>
            <p>Could not load meals. Please check your backend connection.</p>
          </div>
          ==========================================================
        */}

        {/* Meals Grid - Styled by #meals in index.css */}
        <Meals />
      </main>

      {/*
        ========================================================================
        MODAL SKELETON REFERENCE (styled by index.css)
        You can extract these into modal components when building functionality:
        ========================================================================

        1. CART MODAL SKELETON:
        <dialog className="modal">
          <div className="cart">
            <h2>Your Cart</h2>
            <ul>
              <li className="cart-item">
                <p>Mac & Cheese - 1 x $8.99</p>
                <div className="cart-item-actions">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </li>
            </ul>
            <p className="cart-total">$8.99</p>
            <p className="modal-actions">
              <button className="text-button">Close</button>
              <button className="button">Go to Checkout</button>
            </p>
          </div>
        </dialog>

        2. CHECKOUT MODAL SKELETON:
        <dialog className="modal">
          <form>
            <h2>Checkout</h2>
            <p>Total Amount: $8.99</p>

            <div className="control">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="control">
              <label htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" required />
            </div>

            <div className="control">
              <label htmlFor="street">Street</label>
              <input type="text" id="street" required />
            </div>

            <div className="control-row">
              <div className="control">
                <label htmlFor="postal-code">Postal Code</label>
                <input type="text" id="postal-code" required />
              </div>
              <div className="control">
                <label htmlFor="city">City</label>
                <input type="text" id="city" required />
              </div>
            </div>

            <p className="modal-actions">
              <button type="button" className="text-button">Close</button>
              <button className="button">Submit Order</button>
            </p>
          </form>
        </dialog>
        ========================================================================
      */}
    </>
  );
}
