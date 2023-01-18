
import "./styled.scss"

export default function Card ({mokeCards}:any){
    console.log(mokeCards)
    return(
        mokeCards.map(function (card:any){
            return(
            <div className="cards__item" key={card.id}>
                <div className="cards__corner"></div>
                <div className="cards__title-Description">
                    {card.titleDescription}
                </div>
                <h2>
                    {card.title}
                </h2>
                <p>
                    {card.titleSpecification}
                </p>
                <div>
                    {card.cardCountProduct}
                </div>
                <img src="./img/cat.png" alt="Кот."></img>
                <div className="cards__count">
                    {card.cardWeight} <span className="cards__count-description">кг</span>
                </div>
            </div>
            )
        })
        
    )
}