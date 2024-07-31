import { formatNumberAsMoney } from "../../utils/formatter";

export function Card({ item, addToCart }) {
  return (
    <div className="card">
      <div className="top-half">
        <img className="image" src={item.image} alt={item.name} />
      </div>
      <div className="bottom-half">
        <h2 className="title">{item.name}</h2>
        <p className="cost">{formatNumberAsMoney(item.cost)}</p>
        <button className="add-to-cart" onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
