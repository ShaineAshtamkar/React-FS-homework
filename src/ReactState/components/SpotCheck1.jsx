export default function SpotCheck1() {
    const logHover = () => {
        console.log("I was hovered!")
    }

    return (
        <button onMouseEnter={logHover}>Hover over me</button>
    );

}