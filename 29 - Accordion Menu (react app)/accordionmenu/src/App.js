import './App.css';
import MenuBar from './components/MenuBar';

const data = [
  {
    title: "DOGS",
    caption: "dogs are super cute"
  },
  {
    title: "CATS",
    caption: "cats are even cuter"
  },
  {
    title: "DUCKS",
    caption: "we like most ducks, pretty cute"
  },
  {
    title: "TURTLES",
    caption: "turtles are only kinda cute"
  }
]


export default function App() {
  return (
    <div className="App">
      {data.map((element) => {
        return (
          <MenuBar title={element.title} caption={element.caption} />
        )
      })}
    </div>
  );
}

const myarray = [1, 4, 5, 2, 3]

const newarray = myarray.map((element) => {
  return element * 3
});

// newarray = [3, 12, 15, 6, 9]