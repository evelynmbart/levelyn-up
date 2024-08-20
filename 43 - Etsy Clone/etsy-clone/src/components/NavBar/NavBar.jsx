export function NavBar() {
  return (
    <div className="navbar">
      <div className="topNav">
        <h1 className="web-title">Etsy</h1>
        <button className="categories">
          <i className="fa-solid fa-bars"></i>
          <p>Categories</p>
        </button>

        <input
          type="text"
          placeholder="Search for anything"
          className="search-bar"
        />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-gift"></i>
        <div className="notifications">
          <i className="fa-regular fa-bell"></i>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <i className="fa-solid fa-store"></i>
        <div className="profile">
          <i className="fa-regular fa-id-card"></i>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="bottomNav">
        <button className="nav-general-search-btns">
          <i className="fa-solid fa-gift"></i>
          Gift Mode
        </button>
        <button className="nav-general-search-btns">Shop Birthday Gifts</button>
        <button className="nav-general-search-btns">Home Favorites</button>
        <button className="nav-general-search-btns">Fashion Finds</button>
        <button className="nav-general-search-btns">Registry</button>
        <button className="nav-general-search-btns">Gifts</button>
      </div>
      <hr />
    </div>
  );
}
