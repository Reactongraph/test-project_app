import React, { Suspense, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/organism/Sidebar";
import { LazyProjectList, LazyProjectEdit } from "./components/lazy";
import LoadingSpinner from "./components/LoadingSpinner";
import { useProjects } from "./hooks/useProjects";
import { useResponsive } from "./hooks/useResponsive";
import { createAppStyles } from "./styles/appStyles";

/**
 * Main application component that handles routing and layout
 * @returns {JSX.Element} The rendered App component
 */
const App = () => {
  const { projects, favoriteProjects, isLoading, error, handleSave } =
    useProjects();
  const isMobile = useResponsive();
  const styles = useMemo(() => createAppStyles(isMobile), [isMobile]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Sidebar favoriteProjects={favoriteProjects} />
        </div>
        <main style={styles.mainContent}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/"
                element={<LazyProjectList projects={projects} />}
              />
              <Route
                path="/edit/:id"
                element={
                  <LazyProjectEdit projects={projects} onSave={handleSave} />
                }
              />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
