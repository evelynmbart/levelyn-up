import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <button className="content"> How are you today?</button>
        <div className="faces">
          <button className="happy">
            <img src="happy.png" />
          </button>
          <button className="meh">
            <img src="meh.png" />
          </button>
          <button className="sad">
            <img src="sad.png" />
          </button>
          <button className="angry">
            <img src="angry.png" />
          </button>
        </div>

        <label>What's on your mind?</label>
        <textarea placeholder="Today was a doozy..."></textarea>
      </div>
    </>
  );
}

export default App;
