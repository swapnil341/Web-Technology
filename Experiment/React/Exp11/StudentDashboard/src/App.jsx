import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter } from 'react'
import { Navbar } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // State to store student list
  const [students, setStudents] = useState([]);

  return (
    // Router enables page navigation
    <BrowserRouter>

      {/* Navbar will be visible on all pages */}
      <Navbar />

      {/* Routes define different pages */}
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Student List Page (data passed as props) */}
        <Route path="/students" element={<StudentList students={students} />} />

        {/* Add Student Page (passing state + function) */}
        <Route
          path="/add"
          element={<AddStudent students={students}
            setStudents={setStudents} />} />
      </Routes>
    </BrowserRouter>

);}

export default App
