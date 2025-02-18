// function Scoreboard({ points, totalPoints, highscore, dispatch }) {
//   console.log(highscore);
//   return (
//     <div className="scoreboard">
//       <h2>Quiz Completed!</h2>
//       <p>
//         Your Score: {points}/{totalPoints}
//         Highscore:{highscore}
//       </p>
//       <button onClick={() => dispatch({ type: "restart" })}>
//         Restart Quiz
//       </button>
//     </div>
//   );
// }

// export default Scoreboard;
function Scoreboard({ points, totalPoints, highscore, dispatch }) {
  const percentage = (points / totalPoints) * 100;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed! 🎉</h2>
      <p className="text-lg">
        <span className="text-xl me-1">Your Score:</span>
        <span
          className={`font-medium px-2 py-1 rounded-md ${
            percentage >= 75
              ? "bg-green-500 text-white"
              : percentage >= 50
              ? "bg-yellow-500 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {points}/{totalPoints}
        </span>
      </p>
      <p className="text-xl mt-2">
        🏆 Highscore:{" "}
        <span className="font-semibold text-indigo-400">{highscore}</span>
      </p>

      <button
        onClick={() => dispatch({ type: "restart" })}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-pointer"
      >
        🔄 Restart Quiz
      </button>
    </div>
  );
}

export default Scoreboard;
