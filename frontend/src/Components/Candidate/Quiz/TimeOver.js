import React from "react";
import TIMER from "./../../../Assets/Work time-pana.svg";
import { Link } from "react-router-dom";

function TimeOver({ timeLeft }) {
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };
  return (
    <div className="flex flex-row justify-around items-center w-full h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-black text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Time's Up!</h1>
        <p className="text-lg mb-8 text-blue-200">
          The quiz session has ended. Thanks for participating!
        </p>
        <Link to="/candidate/dashboard">
          <button
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out"
            onClick={exitFullScreen}
          >
            Back to Dashboard
          </button>
        </Link>
      </div>
      <img src={TIMER} alt="Time Over" className="w-2/5 mb-6 opacity-75" />
    </div>
  );
}

export default TimeOver;
