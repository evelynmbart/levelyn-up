import { useState } from "react";
import "./App.css";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };
  // loop through the array and on each click the function should display the index
  // as well as increment the index by 1

  return (
    <>
      <h3>Generate a Random Quote</h3>
      <button onClick={generateRandomQuote}>Click Here!</button>
      <p>{quote}</p>
    </>
  );
}

export default App;
