export function Navbar() {
  return (
    <nav>
      <div className="title">Store</div>
      <div className="links">
        <span>Products</span>
        <span>Company</span>
        <span>Contact Us</span>
      </div>
      <div className="cart">
        <button id="profile">Profile</button>
        <button id="cart">Cart</button>
      </div>
    </nav>
  );
}
