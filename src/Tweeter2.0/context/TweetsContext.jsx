import { useContext, useReducer, useState } from "react";

const TweetsContext = createContext(null);

export function TweetsProvider({ children }) {

    const [state, dispatch] = useReducer(tweetsReducer, initialState)

    function addTweet(content, userName) {
        const tweet = {
            content,
            userName,
            date: new Date().toISOString()
        }
        dispatch({ type: "ADD_TWEET", data: tweet })
    }
    return (
        <TweetsContext.Provider value={{ tweets: state.tweets, addTweet, dispatch }}>
            {children}
        </ TweetsContext.Provider>
    )

}
export function useTweets() {
    const tweetsCtx = useContext(TweetsContext)

}


//TweetsContext-A shared “pipe” that lets any component read tweets without prop-drilling.
//TweetsProvider-A wrapper component that stores the real state and the functions (dispatch actions) u can use for the state and gives it to the context.
//tweetsReducer-A function that decides how the state changes when you dispatch actions.
//TweetsProvider is just a helper component that returns this Provider so you don’t write it in main.jsx.
//TweetsContext.Provider = the built-in context mechanism it uses inside