import './App.css';

function Image({ src, alt }) {
  return (
    <img src={src} alt={alt} />
  )
}

function App() {
  return (
    <div className="App">
      <div className="square">
        <div className="imageBox">
          <Image src={"./imagecarousel/bearImages/bear1copy.png"} />
        </div>
        <div className="textBox">This is the text box</div>
      </div>
    </div>
  );
}

export default App;
