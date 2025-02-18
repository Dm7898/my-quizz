const NextButton = ({
  question,
  dispatch,
  answer,
  index,
  noOfQuestions,
  userAnswer,
  setUserAnswer,
}) => {
  const isLast = index === noOfQuestions - 1;

  function handleClick() {
    const isCorrect = Number(userAnswer) === question.answer;
    dispatch({
      type: "newAnswer",
      payload: isCorrect ? Number(userAnswer) : null,
    });
    setUserAnswer("");
    if (isLast) {
      dispatch({ type: "finish" });
    } else {
      dispatch({ type: "nextQuestion" });
    }
  }

  if (answer === null && !question.options) {
    return (
      <button
        className="bg-indigo-500 text-white px-6 py-2 rounded-md text-lg font-semibold 
      hover:bg-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    );
  }

  if (answer === null) return null;

  return (
    <button
      className="bg-indigo-500 text-white px-6 py-2 rounded-md text-lg font-semibold 
    hover:bg-indigo-600 transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {isLast ? "Finish" : "Next"}
    </button>
  );
};

export default NextButton;
