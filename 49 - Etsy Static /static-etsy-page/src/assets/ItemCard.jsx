import React from "react";
import { ArrowRight, Star } from "@phosphor-icons/react";

export function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img className="item-img" src={item.src} alt={item.alt} />
      <div className="card-info">
        <p className="item-title" title={item.title}>
          {item.title}
        </p>
        <span className="stats">
          <strong>{item.stats.rating}</strong>
          <Star weight="fill" size={16} />({item.stats.reviewCount})
        </span>
        <p className="name">{item.name}</p>
        <p className="price">
          <strong>${item.price.toFixed(2)}</strong>
        </p>
        <p className="shipping">{item.freeShipping ? "Free Shipping" : ""}</p>
        <p className="more">
          <strong>More like this</strong>
          <ArrowRight size={16} weight="bold" />
        </p>
      </div>
    </div>
  );
}
