export function TopComp() {
  return (
    <div>
      <button className="top">
        <h1 className="top-text">Discover back-to-school deals you'll love</h1>
        <button className="top-shop-btn">Shop now</button>
      </button>
      <div className="bottom">
        <div className="first-half">
          <div>
            <img
              className="teacher-img"
              src="https://s7.orientaltrading.com/is/image/OrientalTrading/91_6097?$PDP_VIEWER_IMAGE$"
              alt="teacher mug"
            />
          </div>
          <p>Back to school</p>
          <h3>Teacher gifts up to 40% off</h3>
          <button>
            Shop now
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div>
          <img />
        </div>
        <div className="second-half">
          <p>Back to college</p>
          <h3>Printable wall art under $20</h3>
          <button>
            Shop now
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
