import { useState } from "react";

export function ExpenseTracker() {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
                <label>Category: </label>
                <input type="text" placeholder="Groceries" />
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
