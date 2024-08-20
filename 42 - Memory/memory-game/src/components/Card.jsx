export function Card({ cards }) {
  return (
    <div className="card-grid">
      {/*mapping through each card instead of copying and having messy code. 
        this will return each card + image of donut and display them on the screen (after css) */}
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img className="front" src={card.src} alt="card-front" />
            <img className="back" src="/img/cover.png" alt="card-back" />
          </div>
        </div>
      ))}
    </div>
  );
}
