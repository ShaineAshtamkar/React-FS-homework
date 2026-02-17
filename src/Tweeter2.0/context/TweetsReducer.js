const savedTweets = (() => {
    const saved = localStorage.getItem("tweeter-tweets");
    const parsed = saved ? JSON.parse(saved) : []
    return parsed
})



export const initialState = {
    tweets: savedTweets(),
    isLoading: false,
    error: null
};

export function tweetsReducer(state, action) {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state, isLoading: action.data
            }
        case "SET_ERROR":
            return {
                ...state, error: action.data
            };

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