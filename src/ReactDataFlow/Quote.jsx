import React from 'react'

export default function Quote(props) {
    console.log(props)
    const handleClick = () => {
        props.onClickEvent(props.quote.id)
    }
    return (
        <div>
            <div>{props.quote.text} : {props.quote.likes}</div>
            <button onClick={handleClick}> Like!</button >
        </div>
    )
}
