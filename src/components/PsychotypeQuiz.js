import React, { useState } from "react";

let questions = [
  {
    q: "When faced with a large, complex project, you:",
    ans: {
      a: "Break it down into smaller, manageable tasks and start with the easiest one.",
      b: "Dive right in and adjust your approach as you go along.",
    },
  },
  {
    q: "At social events, you usually:",
    ans: {
      a: "Stick to people you know and have deep conversations.",
      b: "Mingle and enjoy meeting as many new people as possible.",
    },
  },
  {
    q: "When making decisions, you:",
    ans: {
      a: "Rely on facts, data, and logic.",
      b: "Trust your instincts and how the decision feels emotionally.",
    },
  },
  {
    q: "In your free time, you'd rather:",
    ans: {
      a: "Engage in a hobby or activity you're familiar with.",
      b: "Try something new and adventurous.",
    },
  },
  {
    q: "When it comes to rules and regulations, you:",
    ans: {
      a: "Believe they are necessary and tend to follow them closely.",
      b: "Question their necessity and are comfortable bending them.",
    },
  },
  {
    q: "You prefer tasks that are:",
    ans: {
      a: "Structured and clear-cut.",
      b: "Open-ended and subject to interpretation.",
    },
  },
  {
    q: "When dealing with problems, you:",
    ans: {
      a: "Tend to keep your emotions in check and deal with the issue logically.",
      b: "Feel your emotions strongly and consider them in your resolution.",
    },
  },
  {
    q: "Your ideal vacation would be:",
    ans: {
      a: "A well-planned tour visiting historical sites.",
      b: "An impromptu adventure to an exotic location.",
    },
  },
  {
    q: "In discussions, you:",
    ans: {
      a: "Prefer to observe first and speak once you have formulated your thoughts.",
      b: "Dive into the conversation and formulate your ideas as you speak.",
    },
  },
  {
    q: "When learning something new, you prefer:",
    ans: {
      a: "Detailed instructions and guidelines.",
      b: "Figuring things out through trial and error.",
    },
  },
];

const PsychotypeQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswer = (questionIndex, selectedAnswer) => {
    setAnswers({ ...answers, [questionIndex]: selectedAnswer });
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.values(answers).forEach((answer) => {
      if (answer === "a") {
        totalScore += 1;
      } else if (answer === "b") {
        totalScore += 2;
      }
    });
    setScore(totalScore);
  };

  const resetQuiz = () => {
    setAnswers({});
    setScore(null);
  };

  const renderQuizQuestions = () => {
    return questions.map((question, index) => (
      <div key={index} className="bg-yellow-100 p-4 rounded-md shadow-md mb-4">
        <p className="text-lg font-bold">{question.q}</p>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`question${index}`}
              value="a"
              onChange={() => handleAnswer(index, "a")}
              checked={answers[index] === "a"}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="ml-2">{question.ans.a}</span>
          </label>
        </div>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`question${index}`}
              value="b"
              onChange={() => handleAnswer(index, "b")}
              checked={answers[index] === "b"}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="ml-2">{question.ans.b}</span>
          </label>
        </div>
      </div>
    ));
  };

  const renderResult = () => {
    if (score !== null) {
      let resultText = "";
      if (score >= 10 && score <= 12) {
        resultText =
          "You may be more introverted, pragmatic, and structured. You appreciate clarity, stability, and are thoughtful in your actions.";
      } else if (score >= 13 && score <= 16) {
        resultText =
          "You likely have a balance between introspection and extroversion, appreciate both structure and flexibility, and adapt based on the situation.";
      } else if (score >= 17 && score <= 20) {
        resultText =
          "You may lean towards extroversion, are adventurous, and value flexibility. You're likely to be spontaneous and rely on intuition in decision-making.";
      }
      return (
        <div className="mt-4 p-5">
          <p className="text-xl font-bold">Your score: {score}</p>
          <p className="text-lg underline-offset-auto">{resultText}</p>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Take Again
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      {score === null ? (
        <div>
          <h2 className="text-3xl font-bold mb-4 flex justify-center mt-5">Psychotype Quiz</h2>
          <div>{renderQuizQuestions()}</div>
          <button
            onClick={calculateScore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-5 text-3xl"
          >
            Submit
          </button>
        </div>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default PsychotypeQuiz;
