import Card from "./card/card";
import './styled.scss'

export default function Cards ({mokeCards}:any){
    console.log(mokeCards)
    return(
        <section className="cards">
            <h1 className="cards__title">Ты сегодня покормил кота? </h1>
        
        <ul className="cards__list">
            {mokeCards.map((card:any) => {
                
                return <Card key={card.id} card={card}></Card>
            })}
            
        </ul>
        </section>
    )
}