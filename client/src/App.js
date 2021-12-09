import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages//Home/Home";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";
import Project from "./pages/Project/Project";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/app/today" element={<Tasks />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/app/project/:projectId" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
