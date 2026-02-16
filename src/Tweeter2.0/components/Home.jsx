import "../App.css";
import { useTweets } from "../context/TweetsContext";
import TweetList from "./TweetList";
import TweetMaker from "./TweetMaker";




export default function Home() {
    return (
        <div className="page">
            <h1>Home</h1>
            <TweetMaker />
            <TweetList />
        </div>
    );
}
