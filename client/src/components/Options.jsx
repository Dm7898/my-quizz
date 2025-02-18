const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
      {question.options.map((option, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer
            ${option === answer ? "border-2 border-white" : ""}
            ${
              hasAnswered
                ? option === question.answer
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-red-500 text-white border-red-500"
                : "bg-indigo-500 text-white hover:bg-indigo-600 border-indigo-500"
            } 
            border-2 shadow-md ${
              hasAnswered ? "cursor-not-allowed opacity-70" : "hover:scale-105"
            }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: option })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
