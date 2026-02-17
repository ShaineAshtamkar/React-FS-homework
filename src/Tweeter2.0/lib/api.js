const BASE = "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets"
const API_KEY = "sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
};

export async function fetchTweets() {
    const res = await fetch(`${BASE}?select=*&order=date.desc`, { headers })
    if (!res.ok) throw new Error(await res.text());

    return await res.json();

}

export async function createTweet(tweet) {
    const res = await fetch(`${BASE}`, {
        method: "POST",
        headers: { ...headers, Prefer: "return=representation" },
        body: JSON.stringify(tweet),
    });
    if (!res.ok) throw new Error(await res.text());

    const data = await res.json()
    return data[0]

}