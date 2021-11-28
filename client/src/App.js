import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages//Home/Home";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/today" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
