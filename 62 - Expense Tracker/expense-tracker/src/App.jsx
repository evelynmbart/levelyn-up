import "./App.css";

function App() {
  return (
    <div className="main-div">
      <nav className="navbar">
        <h1 className="title">Expense Tracker</h1>
      </nav>
      <div className="welcome-content">
        <div className="welcome-div">
          <div className="welcome-text">
            <p>Welcome to Expense Tracker</p>
            <button onClick={handleClick}>Let's get started!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
