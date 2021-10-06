import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export const Card = ({ card }) => {
    const handleClick = () => {
        setIsVisible(!isVisible)
        console.log('hej')
    }
    const [isVisible, setIsVisible] = useState(false)
    return (
        <ReactCardFlip isFlipped={isVisible} flipDirection="vertical">
            <div onClick={handleClick}>
                <img
                    src={card.front}
                    style={{ width: '300px', height: '300px' }}
                    alt={'-.--'}
                />
            </div>
            <div>
                <img
                    src={card.back}
                    style={{ width: '300px', height: '300px' }}
                    alt={'-.-'}
                />
                <h3>{card.info}</h3>
            </div>
        </ReactCardFlip>
    )
}
