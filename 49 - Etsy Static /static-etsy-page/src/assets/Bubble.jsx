import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

export function Bubble({ bubble }) {
  return (
    <button className="bubble">
      <img className="bubble-images" src={bubble.src} alt={bubble.alt} />
      <div className="bubble-arrow">
        {bubble.title}
        <ArrowRight className="arrow" size={16} weight="bold" />
      </div>
    </button>
  );
}
