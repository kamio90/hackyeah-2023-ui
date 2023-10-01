import React from 'react'
import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';
import JobFeed from './components/JobFeed/JobFeed';
import Main from './pages/Main';
import JobOffer from './pages/JobOffer';
import Training from './pages/Training';
import DeveloperPath from './pages/DeveloperPath';
import Events from './pages/Events';
import DiscussionCircle from './pages/DiscussionCircle';
import Projects from './pages/Projects';
import Quiz from './pages/Quiz';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/job-offer",
    element: <JobOffer />
  },
  {
    path: "/trainings",
    element: <Training />
  },
  {
    path: "/developer-path",
    element: <DeveloperPath />
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/discussion-circles",
    element: <DiscussionCircle />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/quiz",
    element: <Quiz />
  }
]);

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  )
  
}

export default App;