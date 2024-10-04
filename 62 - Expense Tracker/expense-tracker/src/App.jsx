import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { GetStarted } from "./components/GetStarted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/user-page" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
