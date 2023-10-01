import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import JobOffer from "./pages/JobOffer";
import Training from "./pages/Training";
import DeveloperPath from "./pages/DeveloperPath";
import Events from "./pages/Events";
import DiscussionCircle from "./pages/DiscussionCircle";
import Projects from "./pages/Projects";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <React.StrictMode>
        <Router>
          <div>
            <div aria-hidden="true" className="rectangle rectangle-1"></div>
            <div aria-hidden="true" className="rectangle rectangle-2"></div>
            <div aria-hidden="true" className="circle circle-1"></div>
            <div aria-hidden="true" className="circle circle-2"></div>
            <Header />

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/job-offer" element={<JobOffer />} />
              <Route path="/trainings" element={<Training />} />
              <Route path="/developer-path" element={<DeveloperPath />} />
              <Route path="/events" element={<Events />} />
              <Route path="/discussion-circles" element={<DiscussionCircle />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>
        </Router>
      </React.StrictMode>
    </>
  );
}

export default App;
