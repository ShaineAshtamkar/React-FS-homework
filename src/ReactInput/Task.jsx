import React from 'react'
export default function Task({ text, complete, onClickEvent }) {
    const handleClick = function () {
        onClickEvent(text);

    }

    return (
        <div>
            <span> {text}</span>
            <button onClick={handleClick} className="complete">Complete</button>
        </div >
    )
}