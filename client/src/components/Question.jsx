import { useState, useMemo } from "react";
import Options from "./Options";
import NextButton from "./NextButton";
import Timer from "./Timer";

function Question({ question, dispatch, answer, index, noOfQuestions }) {
  const [userAnswer, setUserAnswer] = useState("");

  const memoizedOptions = useMemo(
    () => <Options question={question} dispatch={dispatch} answer={answer} />,
    [dispatch, question, answer]
  );

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto text-center">
      {/* Timer */}
      <Timer dispatch={dispatch} index={index} noOfQuestions={noOfQuestions} />

      {/* Question */}
      <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
        {question.question}
      </h3>

      {/* Multiple-Choice Options or Numeric Input */}
      {question.options ? (
        memoizedOptions
      ) : (
        <input
          type="number"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Enter your answer"
          className="w-full p-3 mt-2 text-lg text-gray-900 bg-white rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      )}

      {/* Next Button */}
      <div className="mt-6">
        <NextButton
          dispatch={dispatch}
          answer={answer}
          index={index}
          setUserAnswer={setUserAnswer}
          userAnswer={userAnswer}
          question={question}
          noOfQuestions={noOfQuestions}
        />
      </div>
    </div>
  );
}

export default Question;
