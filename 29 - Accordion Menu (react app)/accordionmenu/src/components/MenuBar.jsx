import { useState } from "react";
import "./styles.css";

export default function MenuBar({ title, id, caption }) {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  function handleClick() {
    if (isDroppedDown) {
      setIsDroppedDown(false);
    } else {
      setIsDroppedDown(true);
    }
  }

  return (
    <div className="main" id={id} onClick={handleClick}>
      {title}
      <div
        className="subMenu"
        style={{ display: isDroppedDown ? "block" : "none" }}
      >
        {caption}
      </div>
    </div>
  );
}

// style={{ display: 1 === 1 ? "none" : "block" }}
// if menubar is clicked, one more menu bar should display.
// this should toggle isFoldedUp
// if isFoldedUp === true then change display to 'block'
// if isFoldedUp === false then change display to 'none'
