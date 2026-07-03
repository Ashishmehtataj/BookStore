import Home from "../src/home/Home"
import { Route, Routes,Navigate } from 'react-router-dom'
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import Contacts from "./Contactus/Contacts"
import Abouts from "./abouts/Abouts"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider"

function App() {
  const [authUser,setAuthUser]=useAuth()
    console.log(authUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/about" element={<Abouts/>} />
      </Routes>
        <Toaster />

    </>
  )
}

export default App
