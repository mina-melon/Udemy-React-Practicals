import { useEffect, useState } from "react";
import MealItem from "./MealItem";

// Fallback image in case the server is not running.
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";

export default function Meals() {
  const [availableFoods, setAvailableFoods] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();
      setAvailableFoods(resData)
    }
    fetchMeals();
  }, [])
  return (
    <ul id="meals">
      {availableFoods.length < 0 ? <p className="center">Fetching meals...</p>
        :
        availableFoods.map((meal) => (
          <MealItem key={meal.id} meal={meal} FALLBACK_IMAGE={FALLBACK_IMAGE} />
        ))
      }

    </ul>
  )
}