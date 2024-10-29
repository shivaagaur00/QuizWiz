import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function FullScreenApp() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [IsValidCode, setIsValidCode] = useState(false);
  const location = useLocation();
  const code = location.pathname.split("/")[3];
  const enterFullScreen = () => {
    const elem = document.documentElement;
    const request =
      elem.requestFullscreen ||
      elem.mozRequestFullScreen ||
      elem.webkitRequestFullscreen ||
      elem.msRequestFullscreen;

    if (request) {
      request
        .call(elem)
        .then(() => setIsFullScreen(true))
        .catch((err) => console.error("Error enabling fullscreen:", err));
    }
  };

  const exitFullScreen = () => {
    const exit =
      document.exitFullscreen ||
      document.mozCancelFullScreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;

    if (exit) {
      exit
        .call(document)
        .then(() => setIsFullScreen(false))
        .catch((err) => console.error("Error exiting fullscreen:", err));
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  useEffect(() => {
    const getQuizDetails = async () => {
      let QuizDetails = await QuizDetails({ Code: code });
      console.log(QuizDetails);
    };
    getQuizDetails();
  }, [code]);

  return (
    <div>
      {isFullScreen ? (
        <div>
          {IsValidCode ? <div>Contest timer</div> : <div>Not a valid Code</div>}
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl">Click below to toggle Full Screen!</h1>
          <button
            onClick={isFullScreen ? exitFullScreen : enterFullScreen}
            className="bg-blue-500 text-white p-3 mt-4 rounded"
          >
            {isFullScreen ? "Exit Full Screen" : "Go Full Screen"}
          </button>
        </div>
      )}
    </div>
  );
}

export default FullScreenApp;
