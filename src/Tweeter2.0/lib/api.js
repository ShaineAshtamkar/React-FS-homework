const BASE = "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets"
const API_KEY = "sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export async function fetchTweets() {
    const res = await fetch(`${BASE}?select=*&order=date.desc`, { headers })
    return await res.json();

}