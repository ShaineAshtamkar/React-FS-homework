import { useState } from 'react'

export function InputTest() {
    const [text, setText] = useState("")
    const [checkbox, setCheckBox] = useState(false)

    const updateText = (event) => {
        setText(event.target.value);
    }
    const updateTick = (event) => {
        setCheckBox(event.target.checked)
    }


    return (
        <div>
            <input type="text" value={text} onChange={updateText} />
            <button>Alert</button>

            <input type="checkbox" checked={checkbox} onChange={updateTick} />

        </div>
    )
}


