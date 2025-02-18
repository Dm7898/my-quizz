import { useEffect, useState } from "react";
import { getAttempts } from "../db";

const AttemptHistory = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const fetchAttempts = async () => {
      const data = await getAttempts();
      setAttempts(data.reverse());
    };
    fetchAttempts();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">
        📜 Quiz Attempt History
      </h2>
      {attempts.length === 0 ? (
        <p className="text-gray-400 text-center py-4">
          🚀 No attempts yet. Start a quiz!
        </p>
      ) : (
        <ul className="space-y-4">
          {attempts.map((attempt) => (
            <li
              key={attempt.attemptId}
              className="border border-gray-700 p-4 rounded-md bg-gray-800 shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <p className="text-sm text-gray-400">{attempt.timestamp}</p>
              <p className="text-lg font-semibold">
                Score:
                <span
                  className="ml-2 px-2 py-1 rounded-md text-white 
                  ${
                    attempt.score >= (attempt.totalPoints * 0.75)
                      ? 'bg-green-500' // Good performance
                      : attempt.score >= (attempt.totalPoints * 0.5)
                      ? 'bg-yellow-500' // Average performance
                      : 'bg-red-500' // Low performance
                  }
                "
                >
                  {attempt.score}/{attempt.totalPoints}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AttemptHistory;
