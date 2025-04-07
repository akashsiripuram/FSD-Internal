import logo from "./logo.svg";
import "./App.css";
import Student from "./pages/Student";
import {  useState } from "react";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 20,
      grade: "A",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 22,
      grade: "B",
    },
    {
      id: 3,
      name: "Sam Brown",
      age: 19,
      grade: "C",
    },
  ]);
  return (
    <div className="App">
      <Student Students={students} />
    </div>
  );
}

export default App;
