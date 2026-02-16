import { NavLink } from "react-router-dom";
import "../App.css";


export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/profile" end>Profile</NavLink>
        </div>
    )
}