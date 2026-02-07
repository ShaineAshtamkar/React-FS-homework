import { useState } from 'react';

const ClassRoom = () => {
    const [classRoom, setClassRoom] = useState({ students: [] });

    const addStudent = (student) => {
        let newClassroom = { ...classRoom }
        newClassroom.students = [...classRoom.students, student]
        setClassRoom(newClassroom);
    }
    return <div></div>
}

export default ClassRoom;
