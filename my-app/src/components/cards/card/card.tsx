import "./styled.scss"
import { addItem, removeItem } from "../../../redux/cart";
import { useDispatch } from "react-redux";

export default function Card ({card}:any){
    const dispatch= useDispatch()
    
    let i=0;
    const onClickAdd = (el:any)=>{
        console.log(el)
        const order = document.querySelector('#cardOrder')
        el = el.target.offsetParent;
        
        console.log(el)
        const item = {
            id: card.id,
            title: card.title,
            titleSpecification: card.titleSpecification,
            cardCountProduct: card.cardCountProduct,
            cardCountBonus: card.cardCountBonus,
            cardWeight: card.cardWeight,
            titleDescription: card.titleDescription 
        }
        if(i===0){
            dispatch(addItem(item));
            i++;
            el.classList.remove('card__item-container--default');
            el.classList.add('card__item-container--added');
            
            order!.textContent= card.cardAddedCart

        }
        else{
            dispatch(removeItem(item.id))
            i--;
            el.classList.remove('card__item-container--added');
            el.classList.add('card__item-container--default');
            order!.innerHTML='Чего сидишь? Порадуй котэ, <span class="card__order-link">купи</span><span class="card__order-doted">.</span>' 
        }
        
    }
   
    return(
        
            
        <li className="card card__item"   key={card.id}>
            <div className="card__item-container card__item-container--default"onClick={(el)=> onClickAdd(el)} id="itemContainer">
                <div className="card__ground"></div>
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
                <div className="card__count-product">
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
                    {card.cardWeight} 
                    <span className="card__weight-description">кг</span>
                </div>
                
                </div>
                <div className="card__order" id='cardOrder'>
                    Чего сидишь? Порадуй котэ, <span className="card__order-link">купи</span><span className="card__order-doted">.</span>
                </div>
            
            
            
        </li>
            
        
        
    )
}