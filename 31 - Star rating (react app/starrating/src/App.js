import './App.css';
import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { useState } from 'react';


function Rating({ hoveredStar, mouseLeave, mouseEnter, starNumber }) {
  return (
    <>
      <Star className="star" size={70} color={"gold"} weight={hoveredStar && hoveredStar >= starNumber ? "fill" : undefined} onMouseEnter={() => mouseEnter(starNumber)} onMouseLeave={mouseLeave} />
    </>
  )
}

export default function App() {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [filledStars, setFilledStars] = useState(false);
  function mouseEnter(starNumber) {
    setHoveredStar(starNumber)
  }
  function mouseLeave() {
    setHoveredStar(null)
  }


  return (
    <div className="App">
      <Rating hoveredStar={hoveredStar} mouseLeave={mouseLeave} mouseEnter={mouseEnter} starNumber={1} />
      <Rating hoveredStar={hoveredStar} mouseLeave={mouseLeave} mouseEnter={mouseEnter} starNumber={2} />
      <Rating hoveredStar={hoveredStar} mouseLeave={mouseLeave} mouseEnter={mouseEnter} starNumber={3} />
      <Rating hoveredStar={hoveredStar} mouseLeave={mouseLeave} mouseEnter={mouseEnter} starNumber={4} />
      <Rating hoveredStar={hoveredStar} mouseLeave={mouseLeave} mouseEnter={mouseEnter} starNumber={5} />
    </div>
  );
};

// create stars (either dark or transparent)
// when hovered, change their background color to gold
// when clicked, change their background color to gold 
// use state to remember the number of stars clicked