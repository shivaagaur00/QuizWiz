import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { sampleUsers } from "./dummyData";

const Statistics = () => {
  const scrollSlider = (direction) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += direction * 500;
  };
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
        <img
          src={sampleUsers.photo}
          alt="User Profile"
          className="w-24 h-24 rounded-full border-4 border-purple-500 mx-auto"
        />
        <h1 className="text-2xl font-bold text-blue-900 mt-4">
          {sampleUsers.firstName} {sampleUsers.lastName}
        </h1>
        <p className="text-gray-600">{sampleUsers.email}</p>
        <p className="text-gray-600">{sampleUsers.college}</p>
        <p className="text-gray-600 font-semibold">
          {sampleUsers.degree} in {sampleUsers.branch}, Year {sampleUsers.year}
        </p>
        <div className="flex flex-wrap justify-center mt-4 space-x-2">
          {sampleUsers.badges.map((badge, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Upcoming Quizzes */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold text-purple-900 ">Upcoming Quizzes</h2>
        <div id="main-slider-container" className="relative flex items-center">
          <MdChevronLeft
            size={40}
            className="slider-icon z-30 left hover:opacity-100 left-0 absolute rounded-full opacity-75 bg-blue-50 text-blue-800"
            onClick={() => scrollSlider(-1)}
          />
          <div
            id="slider"
            className="w-full whitespace-nowrap bg-blue-50 p-2 pt-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100"
          >
            {sampleUsers.upcomingQuizzes.map((quiz, index) => (
              <div
                key={index}
                className="relative w-80 h-28 bg-gray-50 border border-gray-200 rounded-lg ml-2 mr-2 shadow-lg cursor-pointer inline-block transition-transform duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-between text-gray-800">
                  <h3 className="font-bold">{quiz.code}</h3>
                  <p className="text-gray-600">Topic: {quiz.topic}</p>
                  <p className="text-gray-600">Date: {quiz.date}</p>
                  <p className="text-gray-600">Time: {quiz.time}</p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            size={40}
            className="slider-icon right hover:opacity-100 right-0 absolute rounded-full opacity-75 bg-blue-50 text-blue-800"
            onClick={() => scrollSlider(1)}
          />
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-purple-900 mb-4">Statistics Overview</h2>
        <p className="text-gray-700 font-medium">
          Average Score:{" "}
          <span className="text-purple-900 font-bold">{sampleUsers.avgScore}%</span>
        </p>
        <p className="text-gray-700 font-medium">
          Attendance Streak:{" "}
          <span className="text-purple-900 font-bold">{sampleUsers.attendanceStreak} quizzes</span>
        </p>
        <p className="text-gray-700 font-medium">
          Highest Score:{" "}
          <span className="text-purple-900 font-bold">{sampleUsers.highestScore}%</span>
        </p>
        <p className="text-gray-700 font-medium">
          Quiz Success Rate:{" "}
          <span className="text-purple-900 font-bold">{sampleUsers.quizSuccessRate}%</span>
        </p>
        <p className="text-gray-700 font-medium">
          Total Quiz Time:{" "}
          <span className="text-purple-900 font-bold">{sampleUsers.totalQuizTime}</span>
        </p>
        <p className="text-gray-700 font-medium">
          Favorite Topics:{" "}
          <span className="text-purple-900 font-bold">{sampleUsers.favoriteTopics.join(", ")}</span>
        </p>
      </div>

      {/* Quizzes Attended */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-purple-900 mb-4">Quizzes Attended</h2>
        <div className="space-y-4">
          {sampleUsers.quizzesAttended.map((quiz, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="font-bold text-gray-800">Quiz Code: {quiz.code}</h3>
                <p className="text-gray-600">Topic: {quiz.topic}</p>
                <p className="text-gray-600">Date: {quiz.date}</p>
                <p className="text-gray-600">Score: {quiz.score} / {quiz.totalMarks}</p>
                <p className="text-gray-600">Time: {quiz.time}</p>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full 
                  ${quiz.score >= 90 ? "bg-green-100 text-green-700" : quiz.score >= 75 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}
                  `}
                >
                  <span className="text-lg font-semibold">
                    {((quiz.score / quiz.totalMarks) * 100).toFixed(0)}%
                  </span>
                </div>
                {quiz.isCompleted && (
                  <button
                    className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 ml-4"
                    onClick={() => alert("Downloading Quiz Data...")}
                  >
                    Download answer sheet
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
