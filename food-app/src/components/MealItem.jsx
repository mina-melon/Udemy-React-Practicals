import { use } from 'react';
import { currencyFormatter } from '../util/currencyFormatter';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';

export default function MealItem({ meal, FALLBACK_IMAGE }) {
  const { items, addItem } = use(CartContext);
  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
          onError={(e) => {
            // Fallback to placeholder if backend (localhost:3000) is not running yet
            e.currentTarget.onerror = null;
            e.currentTarget.src = { FALLBACK_IMAGE };
          }}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => addItem(meal)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  )
}