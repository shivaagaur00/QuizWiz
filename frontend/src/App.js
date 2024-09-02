import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Main";
import Examiner from "./Components/Examiner/Main";
import Candidate from "./Components/Candidate/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage></Homepage>
              </>
            }
          ></Route>
          <Route
            path="/candidate"
            element={
              <>
                <Candidate></Candidate>
              </>
            }
          ></Route>
          <Route
            path="/examiner"
            element={
              <>
                <Examiner></Examiner>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
