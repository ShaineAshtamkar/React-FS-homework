import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./App.css";
import TweetList from "./components/TweetList";
import TweetMaker from "./components/TweetMaker";

export default function App() {
    return (
        <BrowserRouter basename="/React-FS-homework">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}