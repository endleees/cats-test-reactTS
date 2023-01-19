import "./styled.scss"

export default function Card ({mokeCards}:any){
    
    
    return(
        mokeCards.map(function (card:any){
        
            
            return(
            <li className="card card__item" key={card.id}>
                <div className="card__item-container">
                    


                    <div className="card__corner"></div>
                    <div className="card__title-description">
                        {card.titleDescription}
                    </div>
                    <h2 className="card__title">
                        {card.title}
                    </h2>
                    <p className="card__title-specification">
                        {card.titleSpecification}
                    </p>
                    <div id="inner" className="card__count-product">
                        {
                           card.cardCountProduct
                        }
                        <span className="card__count-product-bonus">
                        {
                            card.cardCountBonus
                        }
                        </span>
                    </div>
                    <img className="card__image" src="./img/cat.png" width={320} height={272} alt="Кот."></img>
                    <div className="card__weight">
                        {card.cardWeight} <span className="card__weight-description">кг</span>
                    </div>
                </div>
                <div className="card__order">
                        Чего сидишь? Порадуй котэ, <a className="card__order-link" href="/">купи</a><span className="card__order-doted">.</span>
                </div>
                
            </li>
            )
        })
        
    )
}