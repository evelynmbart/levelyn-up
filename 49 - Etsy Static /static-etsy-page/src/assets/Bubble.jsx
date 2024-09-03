import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

export function Bubble({ bubble }) {
  return (
    <div className="bubble">
      <img className="bubble-images" src={bubble.src} />
      <button className="bubble-btn">
        {bubble.title}
        <ArrowRight className="arrow" size={16} weight="bold" />
      </button>
    </div>
  );
}
