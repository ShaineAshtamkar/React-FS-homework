export const initialState = {
    tweets: [],
};

export function tweetsReducer(state, action) {
    switch (action.type) {
        case "ADD_TWEET":
            return {
                ...state, tweets: [action.data, ...state.tweets]
            };
        case "SET_TWEETS":
            return {
                ...state, tweets: [action.data]
            }
        default:
            return state;
    }

}