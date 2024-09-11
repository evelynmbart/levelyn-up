import { useState } from "react";
import { Item } from "./assets/Item";
import "./App.css";
import "./assets/Item.css";
/*
  i need this to become second nature

  - so the item is being set to the user input.
  - then we need items array to be updated so that on each submit, the items Array gets item added 
    instead of changing it
  - with the delete button we will filter out the index we don't want
*/

function App() {
  const [item, setItem] = useState("");
  const [itemsArray, setItemsArray] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = () => {
    setItemsArray((prevItems) => [...itemsArray, item]);
    setItem("");
  };

  const handleDelete = (indexToDelete) => {
    setItemsArray(itemsArray.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="content-container">
        <label>
          Todo:
          <input
            type="text"
            value={item}
            name="item"
            onChange={handleChange}
            placeholder="do laundry"
          />
        </label>
        <button className="submit-btn" onClick={handleClick}>
          Submit
        </button>
        <div className="list-of-items">
          {itemsArray.map((item, index) => {
            return (
              <Item
                key={index}
                id={index}
                item={item}
                handleDelete={() => handleDelete(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
