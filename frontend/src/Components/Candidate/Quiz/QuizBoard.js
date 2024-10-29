import React, { useEffect, useState } from "react";
import WaitingPage from "./WaitingPage";
import QuestionCard from "./QuestionCard";
import TimeOver from "./TimeOver";

function QuizBoard({ quiz }) {
  const startingTime = new Date(quiz.startingTime).getTime();
  const [timeLeft, setTimeLeft] = useState(startingTime - Date.now());
  const [CurrIndex, setCurrIndex] = useState(0);
  const [QuizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingTime = startingTime - Date.now();
      setTimeLeft(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [startingTime]);

  useEffect(() => {
    if (timeLeft <= 0 && !QuizEnded) {
      const timer = setTimeout(() => {
        setCurrIndex((prevIndex) => {
          if (prevIndex < quiz.numberOfQuestions - 1) {
            return prevIndex + 1;
          } else {
            setQuizEnded(true);
            return prevIndex;
          }
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [CurrIndex, timeLeft, quiz.numberOfQuestions, QuizEnded]);

  useEffect(() => {
    if (QuizEnded) {
      console.log("The quiz has ended!");
    }
  }, [QuizEnded]);

  return (
    <div className="bg-blue-950 text-white">
      {timeLeft > 0 ? (
        <WaitingPage timeLeft={timeLeft} />
      ) : QuizEnded ? (
        <TimeOver></TimeOver>
      ) : (
        <QuestionCard question={quiz.questions[CurrIndex]} />
      )}
    </div>
  );
}

export default QuizBoard;
