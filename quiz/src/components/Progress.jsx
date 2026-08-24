import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [progressTimer, setProgressTimer] = useState(timeout);

  useEffect(() => {
    console.log("INTERVAL STARTS");
    const interval = setInterval(() => {
      setProgressTimer((prevProgressTimer) => prevProgressTimer - 150);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("TIMEOUT STARTS");
    const timeoutt = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timeoutt);
  }, [onTimeout, timeout]);

  return <progress id="question-time" max={timeout} value={progressTimer} />;
}
