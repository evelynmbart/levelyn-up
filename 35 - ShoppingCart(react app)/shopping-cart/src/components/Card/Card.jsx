import { formatNumberAsMoney } from "../../utils/formatters";
import "./Card.css";

export default function Card({ card, cart, setCart }) {
  const handleClick = () => {
    const newCart = { ...cart };
    if (card.name in newCart) {
      newCart[card.name] += 1;
    } else {
      newCart[card.name] = 1;
    }
    setCart(newCart);
  };
  return (
    <div className="card">
      <div className="top-half">
        <img className="image" src={card.image} alt={card.name} />
      </div>
      <div className="bottom-half">
        <h2 className="title">{card.name}</h2>
        <p className="cost">{formatNumberAsMoney(card.cost)}</p>
        <button className="add-to-cart" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
