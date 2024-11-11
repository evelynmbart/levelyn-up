export function ItemCard({ item }) {
  return (
    <button className="card-container">
      <img id="item-image" src={item.src} />
      <div className="item-info">
        <span id="name">{item.name}</span>
        <span id="price">${item.price}</span>
      </div>
    </button>
  );
}
