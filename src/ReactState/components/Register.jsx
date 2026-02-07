export function Register(props) {
    return (<div id="register">
        {/* your code here */}
        <h4>You cannot reserve during these times</h4>
        {props.reservations.map(r => <div key={r.name}>{r.day} @ {r.time}</div>)}

    </div>)
}