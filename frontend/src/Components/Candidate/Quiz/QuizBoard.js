import React, { useEffect, useState } from "react";
import WaitingPage from "./WaitingPage";
import QuestionCard from "./QuestionCard";
import TimeOver from "./TimeOver";

function QuizBoard({ quiz }) {
  const startingTime = new Date(quiz.startingTime).getTime();
  const activeDuration = quiz.activeTime * 60000;
  const endingTime = startingTime + activeDuration;
  const timePerQuestion = quiz.TimePerQuestion * 1000;
  const [timeLeftToStart, setTimeLeftToStart] = useState(
    startingTime - Date.now()
  );
  const [timeLeftToEnd, setTimeLeftToEnd] = useState(endingTime - Date.now());
  const [currIndex, setCurrIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [result, setResult] = useState(0);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (timeLeftToStart > 0) {
      setInterval(() => {
        setTimeLeftToStart(startingTime - Date.now());
      }, 1000);
    } else if (timeLeftToEnd <= 0) {
      setQuizEnded(true);
    }
  }, [timeLeftToStart, startingTime, timeLeftToEnd, currIndex]);

  useEffect(() => {
    if (nextQuestion) {
      setNextQuestion(false);
      if (currIndex < quiz.questions.length - 1) {
        setCurrIndex(currIndex + 1);
      } else {
        setQuizEnded(true);
      }
    }
  }, [nextQuestion]);

  return (
    <div className="bg-blue-950 text-white">
      {timeLeftToStart > 0 ? (
        <WaitingPage timeLeftToStart={timeLeftToStart} />
      ) : quizEnded ? (
        <TimeOver
          result={result}
          registered={registered}
          totalMarks={quiz.numberOfQuestions}
          code={quiz.code}
        />
      ) : (
        <QuestionCard
          question={quiz.questions[currIndex]}
          index={currIndex}
          shuffle={quiz.shuffleQuestions}
          time={quiz.TimePerQuestion}
          setResult={setResult}
          setNextQuestion={setNextQuestion}
          setRegistered={setRegistered}
          setTimeLeftToEnd={setTimeLeftToEnd}
          setQuizEnded={setQuizEnded}
        />
      )}
    </div>
  );
}

export default QuizBoard;
