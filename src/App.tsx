
import './App.css'

function App() {
  const studentName: string = "Jennelyn Flordeliz";
  const course: string = "Bachelor of Science in Information Technology";
  const isEnrolled: boolean = true;

   const subjects: string[] = [
    "Networking and Communication",
    "Introduction to Applications Development and Emerging Technologies",
    "Database Management and Web Systems",
    "PROPHY2",
  ];

  return (
    <>
<h1>{studentName}</h1>
<p>{course}</p>
<p>{isEnrolled ? "Student is enrolled" : "Student is not enrolled"}</p>
<ul>
{subjects.map((subject, index) => (
<li key={index}>{subject}</li>
))}
</ul>
</>
  )
}

export default App
