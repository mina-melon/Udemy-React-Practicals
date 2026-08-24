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
  const [currentCard, setCurrentCard] = useState(remainingCards[0]);
  // flip card
  const [showAnswer, setShowAnswer] = useState(false);

  // const [cards, setCards] = useState([...QUESTIONS]);
  // // get the current flashcard array index
  // const [viewedCards, setViewedCards] = useState([]);
  // // get remaining cards
  // const remainingCards = cards.filter((card) => !viewedCards.include(card))
  // // get total length of cards
  // const currentCard = viewedCards.length;

  // current question on the card
  const question = currentCard.question;
  // current answer on the card
  const answer = currentCard.answer;
  // display content
  let content = !showAnswer ? question : answer;

  function handleCardClick() {
    if (!showAnswer) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }

  // move to the next card when button is clicked
  function handleYesButtonClick(question) {
    setMasteredCards((prev) => [...prev, question]);
    setRemainingCards((prev) => {
      return prev.filter((question) => !masteredCards.includes(question));
    });
    setRemainingCards((prev) => {
      const [nextCard, ...rest] = prev;

      setCurrentCard(nextCard);

      return rest;
    });

    setShowAnswer(false);
  }

  // add question to the remaining questions and move on to the next question when no is clicked

  // show answer when timer expires
  const handleTimerExpire = useCallback(function handleTimerExpire() {
    setShowAnswer(true);
  }, []);

  // shuffle cards
  function handleShuffle() {
    setRemainingCards([...remainingCards].sort(() => Math.random() - 0.5));
  }

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
            <Button secondary>Not Really</Button>
            <Button secondary>No</Button>
          </div>
        </div>
      )}

      <CardTimer
        key={currentCard}
        timer={10000}
        onTimerExpire={handleTimerExpire}
      />
    </section>
  );
}
