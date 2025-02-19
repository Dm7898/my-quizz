//initial screen
const Startscreen = ({ noOfQuestions, dispatch }) => {
  return (
    <div className="bg-gray-900 text-white text-center p-8 rounded-lg shadow-lg w-full max-w-lg ">
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">
        Welcome to the Quizz
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        Total Questions: <span className="font-semibold">{noOfQuestions}</span>
      </p>

      <button
        className="bg-indigo-500 text-white text-lg font-semibold px-8 py-3 rounded-md shadow-md 
      hover:bg-indigo-600 transition duration-300 transform hover:scale-105 cursor-pointer"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz 🚀
      </button>
    </div>
  );
};

export default Startscreen;
