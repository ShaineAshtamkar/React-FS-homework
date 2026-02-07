export function Calendar(props) {
    return (
        <div id="calendar">
            {props.reservations.map(r => <div key={r.name}>
                {r.name} has a reservation on {r.day} {r.time}
            </div>)}
        </div>
    )


}


