import Card from "./card/card";
import './styled.scss'

export default function Cards ({mokeCards}:any){
    return(
        <section className="cards">
            <h1 className="cards__title">Ты сегодня покормил кота? </h1>
        
        <ul className="cards__list">
            <Card mokeCards={mokeCards}></Card>
        </ul>
        </section>
    )
}