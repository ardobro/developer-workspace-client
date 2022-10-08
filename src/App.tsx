import { Routes, Route } from "react-router-dom";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <h1 className="title">Welcome back, Artyom Dobrodomov!</h1>
              </div>
            }
          />
          <Route
            path="dashboard"
            element={
              <div className="content">
                <h1 className="title">Dashboard</h1>
              </div>
            }
          />
          <Route
            path="schedule"
            element={
              <div className="content">
                <h1 className="title">Schedule</h1>
              </div>
            }
          />
          <Route
            path="talent-manager"
            element={
              <div className="content">
                <h1 className="title">Talent Manager</h1>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
