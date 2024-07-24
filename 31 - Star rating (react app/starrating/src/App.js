import './App.css';
import { Star } from 'phosphor-react';

export default function App() {
  return (
    <div className="App">
      <Star size={32} />
    </div>
  );
};

// create stars (either dark or transparent)
// when hovered, change their background color to gold
// when clicked, change their background color to gold 
// use state to remember the number of stars clicked