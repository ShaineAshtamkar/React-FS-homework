import { createContext, useReducer, useContext, useEffect, useState } from "react";
import { tweetsReducer, initialState } from "./TweetsReducer";


const TweetsContext = createContext(null);

export function TweetsProvider({ children }) {
    const [userName, setUserName] = useState(loadUserName)
    const [state, dispatch] = useReducer(tweetsReducer, initialState)

    function loadUserName() {
        return localStorage.getItem("tweeter-username") || "yonatan"
    }

    useEffect(() => {
        localStorage.setItem("tweeter-username", userName);

    }, [userName])

    function addTweet(content) {
        const tweet = {
            content,
            userName,
            date: new Date().toISOString()
        }
        dispatch({ type: "ADD_TWEET", data: tweet })
    }
    useEffect(() => {
        const saved = localStorage.getItem("tweeter-tweets")
        if (saved) {
            const parsed = JSON.parse(saved)
            dispatch({ type: "SET_TWEETS", data: parsed })
        }

    }, [])

    useEffect(() => {
        localStorage.setItem("tweeter-tweets", JSON.stringify(state.tweets))
    }, [state.tweets])

    return (
        <TweetsContext.Provider value={{ tweets: state.tweets, addTweet, dispatch, setUserName }}>
            {children}
        </ TweetsContext.Provider>
    )

}



export function useTweets() {
    const tweetsCtx = useContext(TweetsContext)
    return tweetsCtx

}


//TweetsContext-A shared “pipe” that lets any component read tweets without prop-drilling.
//TweetsProvider-A wrapper component that stores the real state and the functions (dispatch actions) u can use for the state and gives it to the context.
//tweetsReducer-A function that decides how the state changes when you dispatch actions.

//TweetsProvider is just a helper component that returns this Provider so you don’t write it in main.jsx.
//TweetsContext.Provider = the built-in context mechanism it uses inside