export function Item(props) {
    const finalPrice = props.isDiscount === true
        ? props.price * (1 - props.discount)
        : props.price

    return (
        <div key={props.item}>
            {props.item}:{finalPrice}
        </div>

    )

}

//props are read-only. Don’t change them.

// mistake: <div key={props.item}>
//         {props.item}:{props.price = props.shouldDiscount ? props.price * (1 - props.discount) : props.price}
//     </div>