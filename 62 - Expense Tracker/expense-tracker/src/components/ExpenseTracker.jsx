import { useState } from "react";

const transactionCategories = {
  bills: "Bills",
  groceries: "Groceries",
  gifts: "Gifts",
  transportation: "Transportation",
  travel: "Travel / Vacation",
  entertainment: "Entertainment",
  personalCare: "Personal Care",
  goingOut: "Going Out",
  insurance: "Insurance",
  paycheck: "Paycheck",
  parking: "Parking",
  petSupplies: "Pet Supplies",
  health: "Health and Wellness",
};

export function ExpenseTracker() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [input, setInput] = useState([]);

  const data = [
    {
      date: "",
      income: false,
      amount: 0,
      location: "",
      category: "",
      notes: "",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleTransactionTypeChange = () => {
    setInput((prevInput) => ({
      ...prevInput,
      income: !prevInput.income,
    }));
  };

  const handleSubmit = () => {
    setInput(input);
  };

  console.log(data.income);

  return (
    <>
      <nav className="expense-navbar">
        <h4 className="expense-title">Expense Tracker</h4>
      </nav>
      <div className="expense-tracker-content">
        <button className="add-btn" onClick={() => setIsFormOpen(!isFormOpen)}>
          {isFormOpen ? "Close Transaction" : "Add New Transaction"}
        </button>
        {isFormOpen && (
          <div className="transaction-form">
            <form onSubmit={handleSubmit} className="form">
              <div className="date-and-transaction-type">
                <div className="date">
                  <label>Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={data.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="type">
                  <label>Income or Expense</label>
                  <button
                    type="button"
                    style={{
                      backgroundColor: data.income ? "lightgreen" : "white",
                    }}
                    title="Income"
                    onClick={handleTransactionTypeChange}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    style={{
                      backgroundColor: !data.income ? "#fc6e6e" : "white",
                    }}
                    title="Expense"
                    onClick={handleTransactionTypeChange}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="amount">
                <label>Amount $</label>
                <input
                  type="text"
                  placeholder="80.00"
                  name="amount"
                  value={data.amount}
                  onChange={handleInputChange}
                />
              </div>

              <div className="location">
                <label>Spending Location: </label>
                <input
                  type="text"
                  placeholder="Key Food"
                  name="location"
                  value={data.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="category">
                <label>Category: </label>
                <select
                  className="category-select"
                  name="category"
                  value={data.category}
                  onChange={handleInputChange}
                >
                  <option value={transactionCategories.bills}>
                    {transactionCategories.bills}
                  </option>
                  <option value={transactionCategories.groceries}>
                    {transactionCategories.groceries}
                  </option>
                  <option value={transactionCategories.paycheck}>
                    {transactionCategories.paycheck}
                  </option>
                  <option value={transactionCategories.insurance}>
                    {transactionCategories.insurance}
                  </option>
                  <option value={transactionCategories.transportation}>
                    {transactionCategories.transportation}
                  </option>
                  <option value={transactionCategories.goingOut}>
                    {transactionCategories.goingOut}
                  </option>
                  <option value={transactionCategories.travel}>
                    {transactionCategories.travel}
                  </option>
                  <option value={transactionCategories.entertainment}>
                    {transactionCategories.entertainment}
                  </option>
                  <option value={transactionCategories.personalCare}>
                    {transactionCategories.personalCare}
                  </option>
                  <option value={transactionCategories.health}>
                    {transactionCategories.health}
                  </option>
                  <option value={transactionCategories.petSupplies}>
                    {transactionCategories.petSupplies}
                  </option>
                  <option value={transactionCategories.gifts}>
                    {transactionCategories.gifts}
                  </option>
                  <option value={transactionCategories.parking}>
                    {transactionCategories.parking}
                  </option>
                </select>
              </div>
              <div className="notes">
                <label>Additional Notes: </label>
                <textarea
                  placeholder="Making a special occasion dinner.."
                  onChange={handleInputChange}
                  name="notes"
                  value={data.notes}
                />
              </div>
              <button className="add-transaction">Add Transaction</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
