import { useRef, useState } from "react";

export default function Workout({ title, description, time, onComplete }) {
  const timer = useRef();
  const [timerOn, setTimer] = useState(false);
  function handleStartWorkout() {
    // Todo: Start timer
    timer.current = setTimeout(() => {
      onComplete();
    }, time);

    setTimer(true);
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    clearTimeout(timer.current);
    onComplete();
    setTimer(false);
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
      <p>{timerOn ? "Timer On" : "Timer Off"}</p>
    </article>
  );
}
