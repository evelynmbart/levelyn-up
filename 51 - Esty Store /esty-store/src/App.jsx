import { useState } from "react";
import "./App.css";
import { ItemCard } from "./assets/ItemCard";

const EMPTY_FORM = {
  postTitle: "",
  shopName: "",
  price: "",
  freeShipping: false,
};

function App() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [shopItems, setShopItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  /* shop items should be an array of the previous 
    objects filled out
    - take the 
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    setShopItems([...shopItems, formData]);
    setFormData(EMPTY_FORM);
  };

  console.log(shopItems);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="content-container">
          <div className="user-input">
            <label>Title of Your Post: </label>
            <input
              type="text"
              placeholder="Crochet Bunnies"
              value={formData.postTitle}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  postTitle: e.target.value,
                })
              }
            />
          </div>
          <div className="user-input">
            <label>Shop Name: </label>
            <input
              type="text"
              placeholder="CrochetMania"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
            />
          </div>
          <div className="user-input">
            <label>Price: </label>
            <input
              type="text"
              placeholder="8.00"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="user-input">
            <label>Free Shipping: </label>
            Yes
            <input type="radio" name="freeShippingYes" />
            No
            <input type="radio" name="freeShippingNo" />
          </div>
          <button className="submit">Submit</button>
          <div className="shop-item-displayed">
            {shopItems.map((card, index) => {
              return <ItemCard key={index} card={card} />;
            })}
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
