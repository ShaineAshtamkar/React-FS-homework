import { useTweets } from "../context/TweetsContext";
import { useState } from "react";


export default function TweetList() {
    const { tweets, isLoading, error } = useTweets();

    if (isLoading) return (<div>Loading...</div>)
    if (error) return (<div className="error">{error}</div>)
    return (
        <div className="tweets">
            {tweets.map((tweet, index) => {
                return (
                    <div key={index} className="tweetCard">
                        <div className="tweetDetails">
                            <div>{tweet.userName}</div>
                            <div>{tweet.date}</div>
                        </div>
                        <div className="content">{tweet.content}</div>
                    </div>
                )

            })}
        </div>
    )
}


