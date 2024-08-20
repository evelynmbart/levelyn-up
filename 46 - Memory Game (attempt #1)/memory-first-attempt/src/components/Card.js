export function Card({ card }) {

    const handleClick = () => {
        console.log('iwasclicked')
    }

    return (
        <div className='card'>
            <div>
                <img className='front' src={card.src} alt="card front" />
                <img className='back' src='/img/cover.png' onClick={handleClick} alt="card cover" />
            </div>
        </div>
    )
}