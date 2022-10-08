import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <div className="content">
          <h1 className="title">Welcome back, Artyom Dobrodomov!</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
