import Home from "../src/home/Home"
import { Route, Routes } from 'react-router-dom'
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import Contacts from "./Contactus/Contacts"
import Abouts from "./abouts/Abouts"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/about" element={<Abouts/>} />
      </Routes>

    </>
  )
}

export default App
