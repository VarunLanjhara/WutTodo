import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const Home = lazy(() => import("./pages/Home/Home"));
  const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
  const Auth = lazy(() => import("./pages/Auth/Auth"));
  const Tasks = lazy(() => import("./pages/Tasks/Tasks"));
  const TodayTaskSearch = lazy(() =>
    import("./pages/TodayTaskSearch/TodayTaskSearch")
  );
  const Project = lazy(() => import("./pages/Project/Project"));
  const ProjectSearch = lazy(() =>
    import("./pages/ProjectSearch/ProjectSearch")
  );
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/app/today" element={<Tasks />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/app/project/:projectId" element={<Project />} />
            <Route
              path="/app/today/search/:searchshit"
              element={<TodayTaskSearch />}
            />
            <Route
              path="/app/project/search/:searchshit"
              element={<ProjectSearch />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
