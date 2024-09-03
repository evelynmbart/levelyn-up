import { useState } from "react";
import "./App.css";
import { Bubble } from "./assets/Bubble";
import "./assets/Bubble.css";

const bubbleData = [
  {
    title: "Home Decor",
    src: "https://i.etsystatic.com/47611919/r/il/a83de7/5554500852/il_340x340.5554500852_4ywg.jpg",
  },
  {
    title: "Wall Art",
    src: "https://i.etsystatic.com/15884465/r/il/0c439d/4727223839/il_340x340.4727223839_7v0p.jpg",
  },
  {
    title: "Kitchen & Dining",
    src: "https://i.etsystatic.com/31624546/r/il/e52c9b/4937666499/il_340x340.4937666499_6gyj.jpg",
  },
  {
    title: "Furniture",
    src: "https://i.etsystatic.com/16847577/r/il/d33cba/3848635301/il_340x340.3848635301_dyv8.jpg",
  },
  {
    title: "Area Rugs",
    src: "https://i.etsystatic.com/27669059/r/il/5731cd/4101595481/il_340x340.4101595481_tjvf.jpg",
  },
  {
    title: "Lighting",
    src: "https://i.etsystatic.com/14008245/r/il/2af07e/4395286665/il_340x340.4395286665_rq5a.jpg",
  },
  {
    title: "Bedding",
    src: "https://i.etsystatic.com/10728836/r/il/bf6128/3931249414/il_340x340.3931249414_307j.jpg",
  },
  {
    title: "Storage & Organization",
    src: "https://i.etsystatic.com/6338904/r/il/571c6f/6223820321/il_340x340.6223820321_4ze7.jpg",
  },
  {
    title: "Home Improvement",
    src: "https://i.etsystatic.com/12462721/r/il/0340f9/4315509798/il_340x340.4315509798_oap5.jpg",
  },
  {
    title: "Bathroom",
    src: "https://i.etsystatic.com/25567919/r/il/8b31bd/4532040323/il_340x340.4532040323_8z5c.jpg",
  },
  {
    title: "Curtains",
    src: "https://i.etsystatic.com/6199618/r/il/e19808/6232745419/il_340x340.6232745419_kufj.jpg",
  },
  {
    title: "Outdoor & Garden",
    src: "https://i.etsystatic.com/23301702/r/il/a87ee7/2580118473/il_340x340.2580118473_fe5k.jpg",
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
      </div>
    </>
  );
}

export default App;
