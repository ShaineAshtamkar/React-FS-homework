import { useState } from "react";
import { useTweets } from "../context/TweetsContext";

export default function TweetMaker() {

    const [text, setText] = useState("")
    const { addTweet } = useTweets()

    const tooLong = text.length > 140
    const empty = text.trim().length == 0
    const disabled = tooLong || empty


    function handleTweet() {
        if (disabled) return

        addTweet(text, "yonatan")
        setText("")

    }

    return (
        <div className="Maker">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What you have in mind..."
            />
            <div className="makerError">
                {tooLong ?
                    <div className="error">The tweet can't contain more then 140 chars.</div>
                    : null
                }
            </div>
            <button onClick={handleTweet} disabled={disabled}>Tweet</button>

        </div >

    )



}