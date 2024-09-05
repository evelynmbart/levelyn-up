import "./App.css";

function App() {
  return (
    <>
      <nav>Blog</nav>
      <form>
        <div className="content-container">
          <div className="user-input">
            <label>
              Blog-post title:
              <input type="text" placeholder="Day One" />
            </label>
            <div className="user-input" id="second-label">
              <label>Write away...</label>
              <textarea placeholder="Today was a doozy...." />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
