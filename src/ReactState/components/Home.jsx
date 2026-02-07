import { Item } from "./Item"

export function Home(props) {
    return (
        <div>{props.store.map(i =>
            <Item key={i.item} item={i.item} price={i.price} discount={i.discount} isDiscount={props.isDiscount} />)}
        </div>
    )
} 