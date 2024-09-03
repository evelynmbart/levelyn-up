import { useState } from "react";
import "./App.css";
import { Bubble } from "./assets/Bubble";
import "./assets/Bubble.css";
import { SlidersHorizontal } from "@phosphor-icons/react";

const bubbleData = [
  {
    title: "Home Decor",
    src: "https://i.etsystatic.com/47611919/r/il/a83de7/5554500852/il_340x340.5554500852_4ywg.jpg",
    alt: "fancy vase with flowers.",
  },
  {
    title: "Wall Art",
    src: "https://i.etsystatic.com/15884465/r/il/0c439d/4727223839/il_340x340.4727223839_7v0p.jpg",
    alt: "framed paintings on a wall.",
  },
  {
    title: "Kitchen & Dining",
    src: "https://i.etsystatic.com/31624546/r/il/e52c9b/4937666499/il_340x340.4937666499_6gyj.jpg",
    alt: "glass cups on a table.",
  },
  {
    title: "Furniture",
    src: "https://i.etsystatic.com/16847577/r/il/d33cba/3848635301/il_340x340.3848635301_dyv8.jpg",
    alt: "wooden stools in the sunlight.",
  },
  {
    title: "Area Rugs",
    src: "https://i.etsystatic.com/27669059/r/il/5731cd/4101595481/il_340x340.4101595481_tjvf.jpg",
    alt: "person holding up area rug.",
  },
  {
    title: "Lighting",
    src: "https://i.etsystatic.com/14008245/r/il/2af07e/4395286665/il_340x340.4395286665_rq5a.jpg",
    alt: "hanging chandelier.",
  },
  {
    title: "Bedding",
    src: "https://i.etsystatic.com/10728836/r/il/bf6128/3931249414/il_340x340.3931249414_307j.jpg",
    alt: "bedsheets.",
  },
  {
    title: "Storage & Organization",
    src: "https://i.etsystatic.com/6338904/r/il/571c6f/6223820321/il_340x340.6223820321_4ze7.jpg",
    alt: "hanging shelf storage.",
  },
  {
    title: "Home Improvement",
    src: "https://i.etsystatic.com/12462721/r/il/0340f9/4315509798/il_340x340.4315509798_oap5.jpg",
    alt: "cabinet doorknobs.",
  },
  {
    title: "Bathroom",
    src: "https://i.etsystatic.com/25567919/r/il/8b31bd/4532040323/il_340x340.4532040323_8z5c.jpg",
    alt: "stack of washcloths.",
  },
  {
    title: "Curtains",
    src: "https://i.etsystatic.com/6199618/r/il/e19808/6232745419/il_340x340.6232745419_kufj.jpg",
    alt: "hanging curtains.",
  },
  {
    title: "Outdoor & Garden",
    src: "https://i.etsystatic.com/23301702/r/il/a87ee7/2580118473/il_340x340.2580118473_fe5k.jpg",
    alt: "potted plant.",
  },
];

const shoppingData = [
  {
    title: "Fall wreath for Front Door.",
    src: "https://i.etsystatic.com/22836680/r/il/e3413f/6140168042/il_300x300.6140168042_gugh.jpg",
    alt: "fall wreath.",
    stats: {
      rating: 4.7,
      reviewCount: 203,
    },
    name: "LuxePetalsHomeDecor",
    price: 138.0,
    freeShipping: true,
  },
  {
    title: "Fall Wreath, Fall Pampas Wreath, Wreath Autumn",
    src: "https://i.etsystatic.com/22533494/r/il/5208f1/5214784204/il_300x300.5214784204_gvdu.jpg",
    alt: "fall leafy wreath.",
    stats: {
      rating: 4.7,
      reviewCount: 181,
    },
    name: "RusticByRichard",
    price: 65.0,
    freeShipping: true,
  },
  {
    title: "Pumpkin Candles / Fall Decor",
    src: "https://i.etsystatic.com/17195470/c/2000/2000/0/674/il/b6da92/5148206630/il_300x300.5148206630_428l.jpg",
    alt: "pumpkin shaped candles on wooden stoop",
    stats: {
      rating: 4.7,
      reviewCount: 585,
    },
    name: "ShopOfHappyGifts",
    price: 4.0,
    freeShipping: false,
  },
  {
    title: "MADE TO ORDER- Trio Oval Serving Plates",
    src: "https://i.etsystatic.com/13724564/r/il/6632e6/4381965322/il_300x300.4381965322_3hny.jpg",
    alt: "lemons on speckled oval serving plates stacked together.",
    stats: {
      rating: 4.9,
      reviewCount: "1.8K",
    },
    name: "SenayCeramics",
    price: 98.83,
    freeShipping: true,
  },
];

function App() {
  return (
    <>
      <div className="background-div">
        <div className="home-favorites">
          Home Favorites
          <p className="sub-title">
            Every room is a new opportunity to express yourself with incredible
            style from incredible sellers.
          </p>
        </div>
        <div className="search-bubbles">
          {bubbleData.map((bubble, index) => {
            return <Bubble key={index} bubble={bubble} />;
          })}
        </div>
        <div className="fall-decor-container">
          <div>Fall Entertaining & Decor</div>
        </div>
        <button className="filters-btn">
          <SlidersHorizontal size={32} />
          Filters
        </button>
      </div>
    </>
  );
}

export default App;
