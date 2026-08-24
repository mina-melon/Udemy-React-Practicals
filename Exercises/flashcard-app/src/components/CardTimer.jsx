import { useEffect, useState } from "react";

export default function CardTimer({ timer, onTimerExpire, cardClicked }) {
  const [timerState, setTimerState] = useState(timer);
  // increase the timer every 150 milliseconds
  useEffect(() => {
    if (cardClicked) {
      return;
    }

    const interval = setInterval(() => {
      setTimerState((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          return 0;
        }

        return prevTimer - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [cardClicked]);

  useEffect(() => {
    if (cardClicked) return;
    const timeout = setTimeout(() => {
      onTimerExpire();
    }, 10000);

    return () => clearTimeout(timeout);
  }, [onTimerExpire, cardClicked]);
  return (
    <>
      {timerState === 0 || cardClicked ? null : (
        <progress max={10000} value={timerState} />
      )}
    </>
  );
}
