import { Link } from "react-router-dom";

export function GetStarted() {
  return (
    <div className="main-div">
      <nav className="get-started-navbar">
        <h1 className="get-started-title">Expense Tracker</h1>
      </nav>
      <div className="welcome-content">
        <div className="welcome-div">
          <div className="welcome-text">
            <p>Welcome to Expense Tracker</p>
            <button>
              <Link id="getting-started-link" to="/user-page">
                Let's get started!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
