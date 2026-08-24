import Button from "../utilities/Button";
import QUESTIONS from "../../questions.js";
import { useCallback, useState } from "react";
import CardTimer from "./CardTimer.jsx";
import Controlbuttons from "./ControlButtons.jsx";
import FinalPage from "./FinalPage.jsx";

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
      <FinalPage
        onReviewAgain={handleReviewAgain}
        masteredCards={masteredCards}
      />
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
        <Controlbuttons
          onYesClick={handleYesButtonClick}
          onNoClick={handleNoButtonClick}
        />
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
