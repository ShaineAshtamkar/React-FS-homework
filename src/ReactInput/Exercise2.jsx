import { useState } from "react";

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const handleFruitChange = function (e) {
        setFruit(e.target.value)

        const selectedFruit = e.target.value
        console.log(`${name} selected ${selectedFruit}`);

    }

    return (
        <div>
            <input
                id="name-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <select
                id="select-input"
                onChange={handleFruitChange}
                value={fruit}
            >
                <option value="" disabled>
                    Choose a fruit
                </option>
                <option value="orange">Orange</option>
                <option value="apple">Apple</option>
                <option value="grapes">Grapes</option>
                <option value="banana">Banana</option>
            </select>
        </div>
    );
};
export default Exercise2;
