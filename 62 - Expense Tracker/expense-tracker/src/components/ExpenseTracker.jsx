import { useState } from "react";

export function ExpenseTracker() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  return (
    <>
      <nav className="expense-navbar">
        <h4 className="expense-title">Expense Tracker</h4>
      </nav>
      <div className="expense-tracker-content">
        <button className="add-btn" onClick={() => setIsFormOpen(!isFormOpen)}>
          {isFormOpen ? "Close Transaction" : "Add Transaction"}
        </button>
        {isFormOpen && (
          <div className="expense-form">
            <form>
              <div className="date-and-transaction-type">
                <div className="date">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="type">
                  <label>Expense or Income</label>
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
              <div className="amount">
                <label>Amount $</label>
                <input type="text" placeholder="80.00" />
              </div>

              <div className="location">
                <label>Spending Location: </label>
                <input type="text" placeholder="Key Food" />
              </div>
              <div className="category">
                <select className="category-select">
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
                <textarea placeholder="Making a special occasion dinner.." />
              </div>
              <button className="add-transaction">Add Transaction</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
