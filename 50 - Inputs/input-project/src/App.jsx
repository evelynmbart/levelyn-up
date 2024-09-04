import "./App.css";
import { useState } from "react";

const data = [{ firstName: "", lastName: "", email: "", newsletter: false }];

function App() {
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    setInput(input);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Input Project</h1>
        <div className="container">
          <div className="line">
            <label>First Name:</label>
            <input
              className="text"
              type="text"
              placeholder="Mack"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="line">
            <label>Last Name:</label>
            <input
              className="text"
              type="text"
              placeholder="Intosh"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="line">
            <label>Email:</label>
            <input
              className="text"
              type="email"
              placeholder="mack@intosh.com"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          {/* <div className="line">
            <label>Subsribe to newsletter?</label>
            <input className="check" type="checkbox" name="newsletter" />
          </div> */}
          <button className="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
