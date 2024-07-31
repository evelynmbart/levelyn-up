export function TodoItem() {
  return (
    <div className="item">
      <input type="checkbox" className="checkbox" />{" "}
      {/* when clicked, strikethrough the item */}
      <h2 className="title">Laundry</h2>
      <button className="deleteButton">Delete</button>
    </div>
  );
}
