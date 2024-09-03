import React from "react";
import { ArrowRight, Star } from "@phosphor-icons/react";

export function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img className="item-img" src={item.src} alt={item.alt} />
      <p>{item.title}</p>
      <span>
        <strong>{item.stats.rating}</strong>
        <Star weight="fill" />({item.stats.reviewCount})
      </span>
      <p>{item.name}</p>
      <p>
        <strong>${item.price.toFixed(2)}</strong>
      </p>
      <p>{item.freeShipping ? "Free Shipping" : ""}</p>
      <p>
        <strong>More like this</strong>
        <ArrowRight size={16} weight="bold" />
      </p>
    </div>
  );
}
