import CartModal from './components/CartModal';
import Homepage from './components/Homepage';
import CartContext from './store/CartContext';
import UserProgressContextProvider from './store/UserProgress';

function App() {
  return (
    <CartContext>
      <UserProgressContextProvider>
        <Homepage />
        <CartModal />
      </UserProgressContextProvider>
    </CartContext>

  )

}

export default App;

