// React & Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import NotFound from "./pages/404"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import PersonalInformation from "./pages/PersonalInformation"
import ConfirmEmail from "./pages/ConfirmEmail"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/confirm" element={<ConfirmEmail />} />
          <Route path="/signup/info" element={<PersonalInformation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
