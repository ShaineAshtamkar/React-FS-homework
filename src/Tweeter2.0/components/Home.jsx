import "../App.css";
import { useTweets } from "../context/TweetsContext";
import TweetList from "./TweetList";
import TweetMaker from "./TweetMaker";




export default function Home() {
    const error = useTweets()
    return (
        <div className="page">
            <h1>Home</h1>
            <TweetMaker />
            {error & <div className="error"  >{error}</div>}
            <TweetList />
        </div>
    );
}
