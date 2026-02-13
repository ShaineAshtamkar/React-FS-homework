import { useState, useEffect } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [isSmall, setIsSmall] = useState(window.innerWidth < 200)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => data.slice(0, 10))
            .then((slicedData) => setPosts(slicedData))
    }, [])
    useEffect(() => {
        function updateResize() {
            setIsSmall(window.innerWidth < 200)
        }
        updateResize()
        window.addEventListener("resize", updateResize)
        return () => window.removeEventListener("resize", updateResize)
    }, [])
    return (

        <div style={{ display: "flex", gap: 10, border: "black", flexWrap: isSmall ? "nowrap" : "wrap", flexDirection: isSmall ? "column" : "row" }}>{posts.map(p =>
            <div style={{
                border: "1px solid black", padding: 10, width: 220
            }}>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
            </div>)
        }
        </div>
    )
}