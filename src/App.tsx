import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "components/Sidebar";
// import Dashboard from "pages/Dashboard";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

// function App() {
//   return (
//     <div className="layout">
//       <Sidebar />
//       <main className="main">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route
//             path="schedule"
//             element={
//               <div className="content">
//                 <h1 className="title">Schedule</h1>
//               </div>
//             }
//           />
//           <Route
//             path="talent-manager"
//             element={
//               <div className="content">
//                 <h1 className="title">Talent Manager</h1>
//               </div>
//             }
//           />
//         </Routes>
//       </main>
//     </div>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
