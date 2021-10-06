import styled from 'styled-components'
import './flip.css'

import { Card } from './card'
import { ConfettiCanvas } from 'react-raining-confetti'
function App() {
    const cards = [
        {
            front:
                'https://www.researchgate.net/profile/Francisco-Perales-3/publication/334204491/figure/fig1/AS:776599045697537@1562167049292/Question-card-Symbol-question-mark-example-card.jpg',
            back:
                'https://i.pinimg.com/originals/90/67/f2/9067f2186110180182c842f3f62a2743.png',
            info: 'Presentkort på 400kr hos Rituals!',
        },
        {
            front:
                'https://www.researchgate.net/profile/Francisco-Perales-3/publication/334204491/figure/fig1/AS:776599045697537@1562167049292/Question-card-Symbol-question-mark-example-card.jpg',
            back:
                'https://pyxis.nymag.com/v1/imgs/a97/87d/6c2dc847e2e2252d803464bacc9a1d855a-airforce1.rsquare.w600.jpg',
            info: 'Valfria sneakers från valfri butik!',
        },
    ]

    return (
        <Wrapper>
            <h1 style={{ textAlign: 'center', fontSize: '41px' }}>
                Gabriela fyller 30!!!
            </h1>
            <h2 style={{ textAlign: 'center', fontSize: '30px' }}>
                Klicka för att se vad du får!
            </h2>
            <Container>
                <ConfettiCanvas
                    active={true}
                    fadingMode="LIGHT"
                    stopAfterMs={0}
                />
                {cards.map((card) => (
                    <Card card={card}></Card>
                ))}
            </Container>
        </Wrapper>
    )
}

export default App

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 80px;
`
const Wrapper = styled.div`
    padding: 40px;
`
