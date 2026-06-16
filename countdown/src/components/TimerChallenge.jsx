import { useRef } from "react";
import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerOn, setTimer] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimer(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimer(false);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>

      <p>
        <button onClick={timerOn ? handleStop : handleStart}>
          {timerOn ? "Stop" : "Start"} Challenge
        </button>
      </p>

      <p className={timerOn ? "active" : undefined}>
        {timerOn ? "Timer is running" : "Timer inactive"}
      </p>
    </section>
  );
}
