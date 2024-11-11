import { useState } from "react";
import "./App.css";

const data = [
  {
    name: "",
    email: "",
    number: "",
    country: "",
    state: "",
    city: "",
    zip: "",
  },
];

function App() {
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    setInput(input);
  };

  console.log(input);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            required
            placeholder="John Smith"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <label>Email Address</label>
          <input
            type="email"
            required
            placeholder="john.smith@smith.com"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <input
            type="text"
            required
            placeholder="555-555-5555"
            name="number"
            value={data.number}
            onChange={handleChange}
          />
          <label>Country</label>
          <input
            type="text"
            required
            placeholder="United States"
            name="country"
            value={data.country}
            onChange={handleChange}
          />
          <div className="location">
            <div className="where">
              <label id="label">State</label>
              <input
                type="text"
                placeholder="Enter state"
                name="state"
                value={data.state}
                onChange={handleChange}
              />
            </div>
            <div className="where">
              <label id="label">City</label>
              <input
                type="text"
                placeholder="Enter city"
                name="city"
                value={data.city}
                onChange={handleChange}
              />
            </div>
            <div className="where">
              <label id="label">Zip Code</label>
              <input
                type="text"
                placeholder="Enter zip code"
                name="zip"
                value={data.zip}
                onChange={handleChange}
              />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
