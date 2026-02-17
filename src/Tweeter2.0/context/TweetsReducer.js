const savedTweets = (() => {
    const saved = localStorage.getItem("tweeter-tweets");
    const parsed = saved ? JSON.parse(saved) : []
    return parsed
})



export const initialState = {
    tweets: savedTweets()
};

export function tweetsReducer(state, action) {
    switch (action.type) {
        case "ADD_TWEET":
            return {
                ...state, tweets: [action.data, ...state.tweets]
            };
        case "SET_TWEETS":
            return {
                ...state, tweets: action.data
            }
        default:
            return state;
    }

}