import { useEffect, useState } from "react";
// Timer component
const Timer = ({
  dispatch,
  index,
  noOfQuestions,
  question,
  userAnswer,
  setUserAnswer,
}) => {
  const [timer, setTimer] = useState(30);

  //timer
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
      // if user eneters the answer he forget to click next or finish it will grab the value
      if (userAnswer !== "") {
        const isCorrect = Number(userAnswer) === question.answer;
        dispatch({
          type: "newAnswer",
          payload: isCorrect ? Number(userAnswer) : null,
        });
        setUserAnswer(""); // Clear input
      }
      // here check the index
      if (index == noOfQuestions - 1) {
        dispatch({ type: "finish" });
      } else {
        dispatch({ type: "nextQuestion" });
      }
    }
  }, [
    setUserAnswer,
    userAnswer,
    question,
    index,
    noOfQuestions,
    timer,
    dispatch,
  ]);

  return (
    <div className="text-lg font-semibold text-red-400">
      ⏳ Time Left: <span className="font-bold">{timer}s</span>
    </div>
  );
};

export default Timer;
