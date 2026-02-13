import { useState, useEffect } from 'react'
import reactLogo from "../assets/react.svg";

import viteLogo from '/vite.svg'
import '../App.css'

import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Time from './Time.jsx';
import Posts from './Posts.jsx';


// export default function App() {
//     const [color, setColor] = useState("blue")

//     const toggleColor = () => { setColor(color === "blue" ? "red" : "blue") }

//     const [titleIndex, setTitleIndex] = useState(0)
//     const [size, setSize] = useState(100)

//     const updateTitle = () => {
//         console.log("update index", titleIndex + 1);
//         setTitleIndex(titleIndex + 1);
//     }

//     const updateSize = () => {
//         setSize(size + 20);
//     }

//     useEffect(() => {
//         setTimeout(updateTitle, 1000)
//     }, [titleIndex])

//     return (
//         <div>
//             <div> Current Color {color} </div>
//             <button onClick={toggleColor}> Toggle color </button>
//             {color === "blue" ? <Blue /> : <Red />}
//             <div>
//                 <button onClick={updateSize}>Change Size</button>
//                 <div className="box" style={{ width: size, height: size, backgroundColor: "lightblue" }}>{titleIndex}</div>
//             </div>
//         </div>
//     );
// }

// function getColors() {
//     return Promise.resolve()
//         .then(() => ["green", "blue", "pink", "purple", "gold", "white"])
// }

// export default function App() {
//     const [titleIndex, setTitleIndex] = useState(0)
//     const [titles, setTitles] = useState([])

//     const updateTitle = () => {
//         setTitleIndex(titleIndex + 1);
//     }

//     useEffect(() => {
//         async function getData() {
//             const colors = await getColors()
//             setTitles(colors)
//         }
//         getData()
//     }, [])

//     useEffect(() => {
//         setTimeout(updateTitle, 1000)
//     }, [titleIndex])

//     return (
//         <div>
//             <div className="box">{titles[titleIndex]}</div>
//         </div>
//     );
// }

// function App() {
//     const [shouldRemove, setShouldRemove] = useState(false)

//     const clickHandler = () => {
//         setShouldRemove(true)
//     }

//     return (
//         <div>
//             <button onClick={clickHandler}>Remove</button>
//             {shouldRemove ? null : <ClickReminder />}
//         </div>
//     );
// }
// function ClickReminder() {
//     const [timeoutId, setTimeoutId] = useState(null)

//     const clickHandler = () => {
//         console.log('clearing timeout');
//         clearTimeout(timeoutId)
//     }

//     useEffect(() => {
//         let timeoutId = setTimeout(() => { alert("remember to click") }, 2000)
//         setTimeoutId(timeoutId)

//         return () => {
//             clearTimeout(timeoutId)
//         }
//     }, [])

//     return (
//         <div>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     );
// }

///////////////////////////////////////////////////////////////////

// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);

//     useEffect(() => {
//         function handleStatusChange(status) {
//             setIsOnline(status.isOnline);
//         }
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

//         return function cleanup() {
//             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//         };
//     });

//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return <div>
//         Frind with id {props.friend.id} is {isOnline ? 'Online' : 'Offline'}
//     </div>
// }
// useEffect(() => {
//     function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//     }
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

//     return function cleanup() {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
// }, [props.friend.id]);

export default function App() {

    return (
        <div>
            <Time />
            <Posts />
        </div>

    )
}

