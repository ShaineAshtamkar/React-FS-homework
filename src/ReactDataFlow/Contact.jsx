export default function Contact({ contact, displayCon }) {

    return (
        < div >
            <button onClick={() => displayCon(contact)}>{contact}</button>
            {contact}
        </div >
    )

}   