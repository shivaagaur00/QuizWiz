import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { sampleUsers } from "./dummyData";
import { LineChart } from "@mui/x-charts/LineChart";
import { Modal, Box, CircularProgress, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const getProgressColor = (score) => {
  if (score >= 75) return "#4caf50";
  if (score >= 50) return "#ffeb3b";
  return "#f44336";
};
const Statistics = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const scrollSlider = (direction) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += direction * 500;
  };

  const handleOpenModal = (quiz) => {
    setSelectedQuiz(quiz);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedQuiz(null);
    setOpenModal(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl flex space-x-4">
          {/* Line Chart */}
          <div className="w-1/2 flex flex-col justify-center items-center ml-10">
            <LineChart
              xAxis={[
                {
                  label: "Quiz Attempts",
                  data: [0, 1, 2, 4, 10, 12, 45, 65],
                },
              ]}
              series={[
                {
                  label: "Score",
                  data: [0, 2, 5, 3, 5, 5, 6, 2],
                  color: "#965fe3",
                },
              ]}
              width={600}
              height={300}
              title="Candidate's Performance"
              yAxisLabel="Score"
              xAxisLabel="Quiz Number"
            />
            <h2 className="text-lg font-semibold text-purple-900 mb-4">
              Candidate Performance Over Time
            </h2>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <div className="ml-20 mb-0">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 70, color: "#5dd469" },
                      { id: 1, value: 30, color: "#f54c4c" },
                    ],
                  },
                ]}
                width={300}
                height={300}
              />
            </div>
            <h2 className="text-lg font-semibold text-purple-900 mb-4">
              Candidate Performance Over Time
            </h2>
          </div>
        </div>
      </div>

      {/* Attended Quizzes Section */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold text-purple-900 mb-4">
          Attended Quizzes
        </h2>
        <div className="relative flex items-center">
          <MdChevronLeft
            size={40}
            className="slider-icon left-0 hover:opacity-100 absolute rounded-full opacity-75 bg-blue-50 text-blue-800"
            onClick={() => scrollSlider(-1)}
          />
          <div
            id="slider"
            className="w-full whitespace-nowrap bg-blue-50 p-2 pt-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100"
          >
            {sampleUsers.quizzesAttended.map((quiz, index) => {
              const percentageScore = Math.round(
                (quiz.score / quiz.totalMarks) * 100
              );
              return (
                <div
                  key={index}
                  className="relative w-80 h-28 bg-gray-50 border border-gray-200 rounded-lg ml-2 mr-2 shadow-lg inline-block transition-transform duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleOpenModal(quiz)}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-between text-gray-800">
                    <h3 className="font-bold text-purple-700 text-xl">
                      {quiz.code}
                    </h3>
                    <p className="text-gray-600 font-semibold">{quiz.topic}</p>
                    <p className="text-gray-600 text-sm">{quiz.date}</p>
                  </div>

                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <CircularProgress
                      variant="determinate"
                      value={percentageScore}
                      size={50}
                      style={{ color: getProgressColor(percentageScore) }}
                    />
                    <Typography
                      variant="caption"
                      component="div"
                      color="textSecondary"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {`${percentageScore}%`}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <MdChevronRight
            size={40}
            className="slider-icon right-0 hover:opacity-100 absolute rounded-full opacity-75 bg-blue-50 text-blue-800"
            onClick={() => scrollSlider(1)}
          />
        </div>
      </div>

      {/* Modal for Quiz Details */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="quiz-modal-title"
        aria-describedby="quiz-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
          {selectedQuiz && (
            <>
              <h2 className="text-lg font-bold mb-4" id="quiz-modal-title">
                {selectedQuiz.code}
              </h2>
              <p id="quiz-modal-description" className="text-gray-600 mb-2">
                Topic: {selectedQuiz.topic}
              </p>
              <p className="text-gray-600 mb-2">Date: {selectedQuiz.date}</p>
              <p className="text-gray-600 mb-2">
                Score: {selectedQuiz.score} / {selectedQuiz.totalMarks}
              </p>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Statistics;
