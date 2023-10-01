import React from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import JobFeed from "./components/JobFeed/JobFeed";
import Main from "./pages/Main";
import JobOffer from "./pages/JobOffer";
import Training from "./pages/Training";
import DeveloperPath from "./pages/DeveloperPath";
import Events from "./pages/Events";
import DiscussionCircle from "./pages/DiscussionCircle";
import Projects from "./pages/Projects";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <React.StrictMode>
        <Router>
          <div>
            <Header />

            <hr />

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
