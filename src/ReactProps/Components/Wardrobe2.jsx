import { Article } from "./Article"

export function Wardrobe2() {
    let wardrobe = [
        { type: "shirt", color: "red", size: "Medium" },
        { type: "shirt", color: "blue", size: "Medium" },
        { type: "pants", color: "blue", size: "Medium" },
        { type: "accessory", color: "sapphire", size: "" },
        { type: "accessory", color: "lilac", size: "" }
    ]
    return (wardrobe.filter(i => {
        return i.color === "blue"
    }).map((i, idx) => <Article type={i.type} color={i.color} size={i.size} key={idx} />))

}
