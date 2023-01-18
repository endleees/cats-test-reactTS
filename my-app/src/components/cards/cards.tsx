import Card from "./card/card";
import { CardList } from "./styled";

export default function Cards ({mokeCards}:any){
    return(
        <CardList>
            <Card mokeCards={mokeCards}></Card>
        </CardList>
    )
}