// const Progressbar = ({ noOfQuestions, index, points, totalPoints, answer }) => {
//   return (
//     <header>
//       <progress
//         className="w-full h-3 bg-gray-300 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-blue-500"
//         max={noOfQuestions}
//         value={index + Number(answer !== null)}
//       />
//       <p>
//         Quesiton <strong>{index + 1}</strong> / noOfQuestions
//       </p>
//       <p>
//         <strong>{points}</strong>/{totalPoints}
//       </p>
//     </header>
//   );
// };

// export default Progressbar;
const Progressbar = ({ noOfQuestions, index, points, totalPoints, answer }) => {
  return (
    <header className="w-full max-w-xl mx-auto bg-gray-800 p-4 rounded-lg shadow-md text-white">
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 transition-all duration-300"
          style={{
            width: `${
              ((index + Number(answer !== null)) / noOfQuestions) * 100
            }%`,
          }}
        ></div>
      </div>

      {/* Question Progress & Score */}
      <div className="flex justify-between items-center mt-3 text-sm md:text-base font-medium">
        <p>
          📌 Question <strong className="text-indigo-400">{index + 1}</strong> /{" "}
          {noOfQuestions}
        </p>
        <p>
          ⭐ <strong className="text-yellow-400">{points}</strong> /{" "}
          {totalPoints}
        </p>
      </div>
    </header>
  );
};

export default Progressbar;
