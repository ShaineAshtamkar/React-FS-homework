export default function Conversation({ convo, otherName, displayCon }) {
    return <div>
        {convo.map((msg, idx) => (
            <div key={idx}>
                <strong>{msg.sender == "other" ? otherName : "me"}:</strong> {msg.text}
                <button onClick={() => displayCon(null)} className="back">Back</button>
            </div>
        ))}
    </div>;
}