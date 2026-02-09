import Contact from "./Contact";

export default function List({ contacts, displayCon }) {
    return <div>{contacts.map(w => <Contact contact={w} displayCon={displayCon} />)}</div>;
}
