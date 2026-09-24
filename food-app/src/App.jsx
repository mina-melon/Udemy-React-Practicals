import Homepage from './components/Homepage';
import CartContext from './store/CartContext';

function App() {
  return (
    <CartContext>
      <Homepage />
    </CartContext>

  )

}

export default App;

