import { useEffect, useState } from "react";

export default function CardTimer({ timer, onTimerExpire }) {
  const [timerState, setTimerState] = useState(timer);
  // increase the timer every 150 milliseconds
  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onTimerExpire();
    }, 10000);

    return () => clearTimeout(timeout);
  }, [onTimerExpire]);
  return (
    <>{timerState === 0 ? null : <progress max={10000} value={timerState} />}</>
  );
}
