import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ExpenseTracker } from "./components/ExpenseTracker";
import "./components/ExpenseTracker.css";
import { GetStarted } from "./components/GetStarted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
