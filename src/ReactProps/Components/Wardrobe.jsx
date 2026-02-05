import { Article } from "./Article"

export function Wardrobe() {

    let wardrobe = [
        { type: "shirt", color: "red", size: "Medium" },
        { type: "shirt", color: "blue", size: "Medium" },
        { type: "pants", color: "blue", size: "Medium" },
        { type: "accessory", color: "sapphire", size: "" },
        { type: "accessory", color: "lilac", size: "" }
    ]
    return (
        wardrobe.map((i, idx) => <Article type={i.type} color={i.color} size={i.size} key={i.color + i.type} />)
        //wardrobe.map((i, idx) => <Article type={i.type} color={i.color} size={i.size} key={idx} />)
        // wardrobe.map(c => <Article info={c} key={c.color + c.type} />)
    )




}


