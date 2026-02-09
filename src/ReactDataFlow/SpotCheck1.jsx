import React, { useState } from 'react'
import Task from '../ReactInput/Task'
import { useEffect } from "react";

export default function SpotCheck1() {
    let [obj, setObj] = useState(
        {
            tasks: [
                { text: "Take out trash", complete: false },
                { text: "Trash talk Carrie", complete: true },
                { text: "Carry boxes upstairs", complete: false }
            ]
        }

    )

    const handleClick = function (text) {

        let newTasks = obj.tasks.map(t => {
            if (t.text === text) {
                return { ...t, complete: true }
            }
            else {
                return { ...t }
            }
        })
        setObj({ tasks: newTasks })
    }



    useEffect(() => {
        console.log("UPDATED tasks:", obj.tasks);
    }, [obj.tasks]);

    return (
        <div>
            {obj.tasks.
                filter(t => t.complete !== true)
                .map(t => <Task text={t.text} complete={t.complete} onClickEvent={handleClick} />)}

        </div>
    )

}


