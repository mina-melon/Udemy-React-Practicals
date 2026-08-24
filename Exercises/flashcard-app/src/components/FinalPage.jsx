export default function FinalPage({ masteredCards, onReviewAgain }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-emerald-50 px-8 py-12 text-center shadow-sm border border-emerald-200">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
        🎉
      </div>

      <h2 className="text-2xl font-bold text-emerald-800">
        You've mastered {masteredCards.length} cards!
      </h2>

      <p className="max-w-md text-sm text-emerald-700">
        Congratulations! You made it through the entire deck.
      </p>

      <button
        className="mt-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 cursor-pointer"
        onClick={onReviewAgain}
      >
        Review Again
      </button>
    </div>
  );
}
