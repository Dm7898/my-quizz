import { useEffect, useState } from "react";

const Timer = ({ dispatch, index, noOfQuestions }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    setTimer(30);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    if (timer === 0) {
      if (index == noOfQuestions - 1) {
        dispatch({ type: "finish" });
      } else {
        dispatch({ type: "nextQuestion" });
      }
    }
  }, [index, noOfQuestions, timer, dispatch]);

  return (
    <div className="text-lg font-semibold text-red-400">
      ⏳ Time Left: <span className="font-bold">{timer}s</span>
    </div>
  );
};

export default Timer;
