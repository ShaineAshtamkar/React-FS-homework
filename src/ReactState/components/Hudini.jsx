import { useState } from "react";


export function Hudini() {
    let [show, setShow] = useState(false)

    function update() {
        setShow(!show)
    }

    return (
        <div>
            <button onClick={update}>Click me</button>
            <div>{show ? "Now you see me" : "Now you don't"}</div>
        </div>

    )
}
