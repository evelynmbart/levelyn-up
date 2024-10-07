export function ExpenseTracker() {
  return (
    <>
      <nav className="expense-navbar">
        <h4 className="expense-title">Expense Tracker</h4>
      </nav>
      <div className="expense-tracker-content">
        <button className="add-btn">Add Expense/Income</button>
        <div className="expense-form">
          <form>
            <div className="same-line">
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
              <label>Spending Location</label>
              <input type="text" placeholder="Sephora" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
