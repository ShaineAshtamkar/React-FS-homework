import { useState } from "react";
import "../App.css";
import { useTweets } from "../context/TweetsContext";

export default function Profile() {
    const { userName, setUserName } = useTweets()
    const [name, setName] = useState(userName);

    function handleSaveProfile() {
        setUserName(name.trim() || "Shaine");
    }


    return (
        <div className="page">
            <h1>Profile</h1>
            <label className="label">User Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSaveProfile}>
                Save
            </button>
        </div>
    );
}
