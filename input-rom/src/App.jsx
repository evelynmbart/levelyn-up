import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <form>
          <label>Full Name</label>
          <input type="text" required placeholder="John Smith" />
          <label>Email Address</label>
          <input type="email" required placeholder="john.smith@smith.com" />
          <label>Phone Number</label>
          <input type="text" required placeholder="555-555-5555" />
          <label>Country</label>
          <input type="text" required placeholder="United States" />
          <div className="location">
            <div className="where">
              <label id="label">State</label>
              <input type="text" placeholder="Enter state" />
            </div>
            <div className="where">
              <label id="label">City</label>
              <input type="text" placeholder="Enter city" />
            </div>
            <div className="where">
              <label id="label">Zip Code</label>
              <input type="text" placeholder="Enter zip code" />
            </div>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
