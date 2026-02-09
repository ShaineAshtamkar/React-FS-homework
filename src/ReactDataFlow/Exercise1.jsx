import { useState } from "react";

export default function Exercise1() {

    const [data, setData] = useState({
        images: [
            "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
            "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
            "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
        ],
        currentImg: 0
    }
    )

    function shiftImageBack() {
        setData({ ...data, currentImg: Math.max(0, data.currentImg - 1) })
    }
    function shiftImageForward() {
        setData({ ...data, currentImg: Math.min(data.currentImg + 1, data.images.length - 1) })
    }

    return (
        <div>
            <button className="back" onClick={shiftImageBack}>Back</button>
            <button className="forward" onClick={shiftImageForward}>Forward</button>
            <img src={data.images[data.currentImg]} alt="fruit" width="250" />

        </div>

    )
}