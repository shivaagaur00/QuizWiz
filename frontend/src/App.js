import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Main";
import Examiner from "./Components/Examiner/Dashboard/Main";
import Candidate from "./Components/Candidate/Dashboard/Main";
import AuthenticationCandidate from "./Components/Authentication/CandidateAuth";
import AuthenticationExaminer from "./Components/Authentication/ExaminerAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/auth" element={<Homepage />} />

          <Route path="/auth/candidate" element={<AuthenticationCandidate />} />

          <Route path="/auth/examiner" element={<AuthenticationExaminer />} />

          <Route path="/candidate/dashboard" element={<Candidate />} />

          <Route path="/examiner/dashboard" element={<Examiner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
