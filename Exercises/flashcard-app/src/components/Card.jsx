import Button from "../utilities/Button";
import QUESTIONS from "../../questions.js";
import { useCallback, useState } from "react";
import CardTimer from "./CardTimer.jsx";

export default function Card() {
  // cards to display
  const [remainingCards, setRemainingCards] = useState([...QUESTIONS]);
  // mastered cards
  const [masteredCards, setMasteredCards] = useState([]);
  // get current card
  const currentCard = remainingCards[0];
  // flip card
  const [showAnswer, setShowAnswer] = useState(false);
  // set Timer value
  const [cardClicked, setCardClicked] = useState(false);
  const masteryComplete = remainingCards.length === 0;

  function handleCardClick() {
    setCardClicked(true);
    if (!showAnswer) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }

  // move to the next card when button is clicked
  function handleYesButtonClick() {
    setMasteredCards((prev) => [...prev, currentCard]);

    setRemainingCards((prev) => {
      const updatedCards = prev.filter((card) => card.id !== currentCard.id);

      return updatedCards;
    });

    setShowAnswer(false);
    setCardClicked(false);
    console.log(currentCard);
  }

  // add question to the remaining questions and move on to the next question when no is clicked
  function handleNoButtonClick() {
    setRemainingCards((prev) => {
      const updatedCards = prev.filter((card) => card.id !== currentCard.id);
      return [...updatedCards, currentCard];
    });

    setShowAnswer(false);
    setCardClicked(false);
  }
  // show answer when timer expires
  const handleTimerExpire = useCallback(function handleTimerExpire() {
    setShowAnswer(true);
  }, []);

  // shuffle cards
  function handleShuffle() {
    setRemainingCards([...remainingCards].sort(() => Math.random() - 0.5));
  }

  function handleReviewAgain() {
    setRemainingCards([...QUESTIONS]);
    setMasteredCards([]);
    setShowAnswer(false);
    setCardClicked(false);
  }

  if (masteryComplete) {
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
          onClick={handleReviewAgain}
        >
          Review Again
        </button>
      </div>
    );
  }

  // current question on the card
  const question = currentCard.question;
  // current answer on the card
  const answer = currentCard.answer;
  // display content
  let content = !showAnswer ? question : answer;

  return (
    <section id="card">
      <div className="shuffle-container">
        <Button primary onClick={handleShuffle}>
          Shuffle
        </Button>
      </div>
      <div className="card" onClick={handleCardClick}>
        <p>{content}</p>
      </div>
      {showAnswer && (
        <div className="buttons-container">
          <h3>Do you think you've mastered this now?</h3>
          <div>
            <Button primary onClick={handleYesButtonClick}>
              Yes
            </Button>
            <Button secondary onClick={handleNoButtonClick}>
              Not Really
            </Button>
            <Button secondary onClick={handleNoButtonClick}>
              No
            </Button>
          </div>
        </div>
      )}

      <CardTimer
        key={currentCard.id}
        timer={10000}
        cardClicked={cardClicked}
        onTimerExpire={handleTimerExpire}
      />
    </section>
  );
}
