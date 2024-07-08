import { useState } from 'react';
import './App.css';


function Card({ file, text }) {
  const [isTextShown, setIsTextShown] = useState(false);
  function handleClick() {
    console.log(isTextShown);
    setIsTextShown(!isTextShown);
  }
  if (isTextShown) {
    return (<button className="card" onClick={handleClick}><div className='text'>{text}</div></button>)
  } else {
    return (
      <button className="card" onClick={handleClick}><img src={`birdImages/${file}`}></img></button>
    )
  }
}

const DATA = [
  {
    file: "ElegantTerns.png",
    text: "Elegant terns, with striking orange bills and black crests, breed in dense colonies and engage in unique courtship rituals where males present fish to females."
  },
  {
    file: "Hummingbird.png",
    text: "Anna's hummingbirds, known for their iridescent emerald feathers and rose-pink throats, can hover mid-air and are capable of flying backward, showcasing remarkable agility and speed."
  },
  {
    file: "limpkin.png",
    text: "Limpkin's get might get their name from their unexpectedly high speed gallop/limp while being chased."
  },
  {
    file: "White-tailed Ptarmigan.webp",
    text: "White-tailed ptarmigans, found in alpine regions, have feathered feet that act like snowshoes and change their plumage seasonally for camouflage, turning white in winter and brown in summer."
  },
  {
    file: "macaw.png",
    text: "Scarlet macaws, known for their vibrant red, blue, and yellow feathers, are highly intelligent, social birds often seen flying in pairs and capable of mimicking human speech."
  },
  {
    file: "Scissor-tailed Flycatcher.png",
    text: "Scissor-tailed flycatchers, with their long, forked tails, perform acrobatic flights to catch insects mid-air and are known for their graceful aerial displays."
  },
  {
    file: "Wood duck.webp",
    text: "Wood ducks, known for their stunning iridescent plumage, nest in tree cavities near water and have sharp claws for perching on branches, unlike most waterfowl."
  },
  {
    file: "turnstone&sandpiper.png",
    text: "Ruddy turnstones, with their distinctive orange legs, and sandpipers, often migrate long distances and display intricate plumage patterns during breeding season."
  },
  {
    file: "Little Blue Heron.png",
    text: "Little blue herons, with their striking slate-blue plumage, transition from white as juveniles to blue as adults, and skillfully hunt fish and insects in shallow waters."
  }
]

export default function App() {
  return (
    <div className="App">
      <div className="gallery">
        {
          DATA.map((data) => {
            return <Card file={data.file} text={data.text} />
          })
        }
      </div>

    </div>
  );
}
