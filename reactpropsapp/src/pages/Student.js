function Student({Students}) {
    return ( 
        <div className="student-list">
            <h2>Student List</h2>
            <ul>
                {Students.map((student) => (
                    <li key={student.id}>
                        <h3>{student.name}</h3>
                        <p>Age: {student.age}</p>
                        <p>Grade: {student.grade}</p>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default Student;