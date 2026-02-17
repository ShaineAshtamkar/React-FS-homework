import { createContext, useReducer, useContext, useEffect, useState } from "react";
import { tweetsReducer, initialState } from "./TweetsReducer";
import { fetchTweets, createTweet } from "../lib/api";



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

    async function addTweet(content) {
        const tweetToSend = {
            content,
            userName,
            date: new Date().toISOString()
        }
        dispatch({ type: "SET_POSTING", data: true })
        dispatch({ type: "SET_ERROR", data: null })

        try {
            const created = await createTweet(tweetToSend)
            dispatch({ type: "ADD_TWEET", data: created })
        } catch (err) {
            dispatch({ type: "SET_ERROR", data: err.message })
        } finally {
            dispatch({ type: "SET_POSTING", data: false })
        }
    }
    useEffect(() => {
        // const saved = localStorage.getItem("tweeter-tweets")
        // if (saved) {
        //     const parsed = JSON.parse(saved)
        //     dispatch({ type: "SET_TWEETS", data: parsed })
        // }
        async function load() {
            dispatch({ type: "SET_LOADING", data: true })
            dispatch({ type: "SET_ERROR", data: null })
            try {
                const tweets = await fetchTweets()
                dispatch({ type: "SET_TWEETS", data: tweets })
            } catch (err) {
                dispatch({ type: "SET_ERROR", data: err.message })
            } finally {
                dispatch({ type: "SET_LOADING", data: false })
            }
        }
        load()

    }, [])

    useEffect(() => {
        // localStorage.setItem("tweeter-tweets", JSON.stringify(state.tweets))

    }, [state.tweets])

    return (
        <TweetsContext.Provider value={{
            tweets: state.tweets, addTweet, dispatch, userName, setUserName, isLoading: state.isLoading, error: state.error,
            isPosting: state.isPosting,

        }}>
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