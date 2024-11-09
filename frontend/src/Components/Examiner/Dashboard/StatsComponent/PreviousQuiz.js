import React from "react";
import Slider from "./Slider";
const slides = [
  {
    image: "https://picsum.photos/id/1015/200/300", // Image for the card
    title: "default",
    startingTime: "10:00 AM",
    startingDate: "2024-11-01", // Add starting date
    duration: "30 min",
    numberOfParticipants: 20,
    code: "JS101",
    clickEvent: () => console.log("Clicked on JavaScript Fundamentals"),
  },
  {
    image: "https://picsum.photos/id/1016/200/300",
    title: "React Basics",
    startingTime: "11:00 AM",
    startingDate: "2024-11-01", // Add starting date
    duration: "45 min",
    numberOfParticipants: 25,
    code: "REACT202",
    clickEvent: () => console.log("Clicked on React Basics"),
  },
  {
    image: "https://picsum.photos/id/1018/200/300",
    title: "CSS Styling Quiz",
    startingTime: "1:00 PM",
    startingDate: "2024-11-01", // Add starting date
    duration: "20 min",
    numberOfParticipants: 18,
    code: "CSS303",
    clickEvent: () => console.log("Clicked on CSS Styling Quiz"),
  },
  {
    image: "https://picsum.photos/id/1019/200/300",
    title: "Node.js Quiz",
    startingTime: "3:00 PM",
    startingDate: "2024-11-01", // Add starting date
    duration: "35 min",
    numberOfParticipants: 30,
    code: "NODE404",
    clickEvent: () => console.log("Clicked on Node.js Quiz"),
  },
  {
    image: "https://picsum.photos/id/1020/200/300",
    title: "Database Basics",
    startingTime: "4:30 PM",
    startingDate: "2024-11-01", // Add starting date
    duration: "40 min",
    numberOfParticipants: 22,
    code: "DB505",
    clickEvent: () => console.log("Clicked on Database Basics"),
  },
  {
    image: "https://picsum.photos/id/1021/200/300",
    title: "Python Essentials",
    startingTime: "6:00 PM",
    startingDate: "2024-11-01", // Add starting date
    duration: "50 min",
    numberOfParticipants: 45,
    code: "PYTHON606",
    clickEvent: () => console.log("Clicked on Python Essentials"),
  },
  {
    image: "https://picsum.photos/id/1022/200/300",
    title: "Web Development Best Practices",
    startingTime: "7:00 PM",
    startingDate: "2024-11-01", // Add starting date
    duration: "60 min",
    numberOfParticipants: 15,
    code: "WEB707",
    clickEvent: () => console.log("Clicked on Web Development Best Practices"),
  },
  {
    image: "https://picsum.photos/id/1023/200/300",
    title: "AI for Beginners",
    startingTime: "8:00 PM",
    startingDate: "2024-11-01", // Add starting date
    duration: "90 min",
    numberOfParticipants: 10,
    code: "AI808",
    clickEvent: () => console.log("Clicked on AI for Beginners"),
  },
];

function PreviousQuiz() {
  return (
    <div className="mt-20 pl-10 pr-10 ">
      <Slider slides={slides} />
    </div>
  );
}

export default PreviousQuiz;
