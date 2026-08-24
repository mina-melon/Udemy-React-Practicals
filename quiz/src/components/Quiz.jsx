import { useCallback, useState } from "react";
import QUESTIONS from "../../questions";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./Progress";
export default function Quiz() {
  const [answersState, setAnswersState] = useState([]);
  const currentAnswersCount = answersState.length;
  const currentQuestion = QUESTIONS[currentAnswersCount];

  const quizComplete = currentAnswersCount === QUESTIONS.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    setAnswersState((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  }, []);

  const handleTimeout = useCallback(function handleTimeout() {
    handleAnswerClick(null);
  }, []);

  if (quizComplete) {
    return (
      <main id="summary">
        <img src={QuizCompleteImg} alt="quiz-complete" />
        <h2>Quiz Complete.</h2>
      </main>
    );
  }

  const options = [...currentQuestion.answers];
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  return (
    <main id="quiz">
      <div id="question">
        <h2>{currentQuestion.text}</h2>
        <ul id="answers">
          {shuffledOptions.map((option) => (
            <li key={option} className="answer">
              <button onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
        <QuestionTimer
          key={currentAnswersCount}
          timeout={1500}
          onTimeout={handleTimeout}
        />
      </div>
    </main>
  );
}
