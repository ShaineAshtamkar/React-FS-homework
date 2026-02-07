export function Landing(props) {
    let hottestItem = props.page.store.find(i => i.hottest == true)

    return (<div>
        <div>Welcome, {props.page.user}. The hottest item is {hottestItem.item}
            for ${hottestItem.price}.
        </div>

    </div>

    )
}
