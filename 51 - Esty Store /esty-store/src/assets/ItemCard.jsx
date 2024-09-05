import React from "react";
import { ArrowRight, Star } from "@phosphor-icons/react";

export function ItemCard({ card }) {
  return (
    <div className="item-card">
      <img className="item-img" />
      <div className="card-info">
        <p className="item-title" title={card.postTitle}>
          {card.postTitle}
        </p>
        {/* <span className="stats">
          <strong>{item.stats.rating}</strong>
          <Star weight="fill" size={16} />({item.stats.reviewCount})
        </span> */}
        <p className="name">{card.shopName}</p>
        <p className="price">
          <strong>${card.price}</strong>
        </p>
        <p className="shipping">{card.freeShipping ? "Free Shipping" : ""}</p>
        <p className="more">
          <strong>More like this</strong>
          <ArrowRight size={16} weight="bold" />
        </p>
      </div>
    </div>
  );
}
