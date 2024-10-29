import React from "react";

function QuizBoard({ quiz }) {
  console.log(quiz);
  return <div>{quiz.startTime}</div>;
}

export default QuizBoard;
