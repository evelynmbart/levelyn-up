export function Card({ card }) {
    return (
        <div className="card">
            <div>
                <img className='front' src={cards.src} alt='card-front' />
                <img className='back' src='/img/cover.png' alt='card-back' />
            </div>

        </div>
    )
}