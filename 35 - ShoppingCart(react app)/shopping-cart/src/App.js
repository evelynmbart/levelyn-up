import "./App.css";
import Card from "./components/Card/Card";
import { useState } from "react";
import { formatNumberAsMoney } from "./utils/formatters";

const ITEMS = [
  {
    name: "Banana",
    cost: 5,
    image: "https://www.kroger.com/product/images/xlarge/back/0000000004011",
  },
  {
    name: "Apple",
    cost: 2.3,
    image:
      "https://www.shutterstock.com/image-photo/funny-shaped-red-apple-butt-260nw-987210.jpg",
  },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState({}); // { name: quantity }
  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const clearCart = () => {
    // when clicked, clear cart
    setCart({});
  }

  let sum = 0;
  let numItems = 0;
  for (const key of Object.keys(cart)) {
    const quantity = cart[key];
    const element = ITEMS.find((item) => item.name === key);
    sum += quantity * element.cost;
    numItems += quantity;
  }


  return (
    <div>
      <div className="navbar">
        <h1>Mr. Kiwi&apos;s Frutta</h1>
        <button className="cart-button" onClick={handleCartButtonClick}>
          {isCartOpen ? "Hide" : "View"} Shopping Cart ({numItems})
        </button>
      </div>
      {isCartOpen && (
        <div className="cart">
          {Object.keys(cart).length > 0 ? (
            <>
              {Object.keys(cart).map((key) => {
                const quantity = cart[key];
                const element = ITEMS.find((item) => item.name === key);
                return (
                  <div className="cart-item">
                    <span>({quantity}){element.name}</span>
                    <span>{formatNumberAsMoney(element.cost * quantity)}</span>
                  </div>
                );
              })}
              <hr />
              <div className="cart-item">
                <span>Total</span>
                <span>{formatNumberAsMoney(sum)}</span>
              </div>
              <button onClick={clearCart}>Clear Cart</button>
            </>
          ) : (
            <div>Your cart is empty!</div>
          )}
        </div>
      )}
      <div className="card-container">
        {ITEMS.map((element) => {
          return <Card card={element} cart={cart} setCart={setCart} />;
        })}
      </div>
    </div>
  );
}

export default App;
