import { useEffect, useReducer, useState } from "react";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Question from "./components/Question";
import Startscreen from "./components/Startscreen";
import Progressbar from "./components/Progressbar";
import Scoreboard from "./components/Scoreboard";
import { saveAttempt } from "./db";
import AttemptHistory from "./components/AttemptHistory";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.answer
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      const attempt = {
        attemptId: Date.now(),
        timestamp: new Date().toLocaleString(),
        score: state.points,
        totalPoints: state.questions.reduce(
          (prev, cur) => prev + cur.points,
          0
        ),
        questions: state.questions.map((q) => ({
          question: q.question,
          correctAnswer: q.answer,
          userAnswer: state.answer,
        })),
      };

      saveAttempt(attempt);
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action Unkown");
  }
}

function App() {
  const [{ questions, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok) throw new Error("Failed to fetch questions");
        const data = await response.json();
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.error(err);
        dispatch({ type: "dataFailed" });
      }
    };
    fetchData();
  }, []);
  const noOfQuestions = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  console.log(points, highscore);
  return (
    <section className="flex flex-col items-center  min-h-screen bg-[#0c1523] pt-4">
      {/* <h2 className="text-3xl font-bold text-white mb-6">Quizz</h2> */}

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <Startscreen noOfQuestions={noOfQuestions} dispatch={dispatch} />
            <div className="mt-6 flex justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => setShowHistory(!showHistory)}
              >
                {showHistory ? "⬅ Back to Quiz" : "📜 View History"}
              </button>
            </div>

            {showHistory && <AttemptHistory />}
          </>
        )}
        {status === "active" && (
          <>
            <Progressbar
              noOfQuestions={noOfQuestions}
              index={index}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              index={index}
              noOfQuestions={noOfQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <Scoreboard
            points={points}
            totalPoints={totalPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </section>
  );
}

export default App;
