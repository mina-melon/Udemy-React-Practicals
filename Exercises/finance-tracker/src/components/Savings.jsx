import Button from "../styling/Button";
import NewSavings from "./NewSavings";

export default function Savings({ savings, onAdd, onDelete }) {
  return (
    <section>
      <div className="mb-4">
        <hr className="my-6 border-zinc-300 mb-2" />
        <h3>SAVINGS</h3>
      </div>
      <NewSavings onAdd={onAdd} />
      {savings.length === 0 ? (
        <p className="text-xs text-gray-400">
          There is no savings in this entry yet. Add savings.
        </p>
      ) : (
        <ul>
          {savings.map((saving) => {
            const formattedDate = new Date(saving.date)
              .toISOString()
              .split("T")[0];

            return (
              <li key={saving.id}>
                <div className="flex flex-row justify-between">
                  <p>${saving.savings}</p>
                  <p>{formattedDate}</p>

                  <Button disappearing onClick={() => onDelete(saving.id)}>
                    Clear
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
