import React, { useState } from "react";

function ConfirmationAndDetails() {
  const [scheduleTime, setScheduleTime] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [quizName, setQuizName] = useState("");
  const [quizDuration, setQuizDuration] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [quizCode, setQuizCode] = useState("");
  const [questionShuffle, setQuestionShuffle] = useState("");
  const [optionShuffle, setOptionShuffle] = useState("");
  const questions = JSON.parse(localStorage.getItem("questions") || "[]");

  const handleCreateQuiz = () => {
    // Save or submit quiz details logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2 max-w-md mt-10 mb-10 mx-4">
        <h1 className="text-2xl font-bold mb-6 text-purple-700 text-center">Quiz Creation Details</h1>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Schedule Time:</label>
          <input 
            type="date" 
            value={scheduleTime} 
            onChange={(e) => setScheduleTime(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Subject Name:</label>
          <input 
            type="text" 
            value={subjectName} 
            onChange={(e) => setSubjectName(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Quiz Name:</label>
          <input 
            type="text" 
            value={quizName} 
            onChange={(e) => setQuizName(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
        </div>
        
        <div className="mb-4">
  <label className="block text-gray-800">Quiz Description:</label>
  <textarea
    className="border border-purple-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
    rows="3"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-800">Target Audience:</label>
  <input 
    type="text" 
    className="border border-purple-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
  />
</div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Quiz Duration (mins):</label>
          <input 
            type="number" 
            value={quizDuration} 
            onChange={(e) => setQuizDuration(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
        </div>
 

        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Number of Questions:</label>
          <input 
            type="number" 
            value={numQuestions} 
            onChange={(e) => setNumQuestions(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Quiz Code (6 Digit Code):</label>
          <input 
            type="text" 
            value={quizCode} 
            onChange={(e) => setQuizCode(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
            maxLength="6"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Question Shuffle:</label>
          <select 
            value={questionShuffle} 
            onChange={(e) => setQuestionShuffle(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          >
            <option value="">Select Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm">Option Shuffle:</label>
          <select 
            value={optionShuffle} 
            onChange={(e) => setOptionShuffle(e.target.value)} 
            className="border border-purple-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          >
            <option value="">Select Option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button 
          onClick={handleCreateQuiz} 
          className="bg-purple-600 text-white px-6 py-2 rounded mt-4 hover:bg-purple-700 transition duration-200 w-full"
        >
          Confirm and Create Quiz
        </button>
      </div>
    </div>
  );
}

export default ConfirmationAndDetails;
