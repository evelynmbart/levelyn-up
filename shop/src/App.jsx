import "./App.css";
import { ItemCard } from "./components/ItemCard";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="store-container">
        <ItemCard />
      </div>
    </>
  );
}

export default App;
