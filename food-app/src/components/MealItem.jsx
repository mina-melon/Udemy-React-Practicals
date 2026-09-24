import { currencyFormatter } from '../util/currencyFormatter';

export default function MealItem({ meal, FALLBACK_IMAGE }) {
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
          <button className="button">Add to Cart</button>
        </p>
      </article>
    </li>
  )
}