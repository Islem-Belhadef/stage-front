// React & Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import NotFound from "./pages/404"
import Home from "./pages/Home"
import Login from "./pages/authentication/Login"
import Signup from "./pages/authentication/Signup"
import Contact from "./pages/Contact"
import PersonalInformation from "./pages/authentication/PersonalInformation"
import ConfirmEmail from "./pages/authentication/ConfirmEmail"
import ForgotPassword from "./pages/authentication/ForgotPassword"
import PasswordReset from "./pages/authentication/PasswordReset"
import Companies from "./pages/Companies"
import Offers from "./pages/Offers"
import StudentDashboard from "./pages/StudentDashboard"
import HODDashboard from "./pages/HODDashboard"
import SupervisorDashboard from "./pages/SupervisorDashboard"
import SuperAdminDashboard from "./pages/SuperAdminDashboard"
import AddDemand from "./pages/AddDemand"

function App() {
  const isAuthenticated = false
  const type = "student"
  let dashboard

  dashboard =
    type === "student" ? (
      <StudentDashboard />
    ) : type === "hod" ? (
      <HODDashboard />
    ) : type === "supervisor" ? (
      <SupervisorDashboard />
    ) : (
      <SuperAdminDashboard />
    )

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? dashboard : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/password" element={<ForgotPassword />} />
          <Route path="/login/reset" element={<PasswordReset />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/confirm" element={<ConfirmEmail />} />
          <Route path="/signup/info" element={<PersonalInformation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship/companies" element={<Companies />} />
          <Route path="/internship/offers" element={<Offers />} />
          <Route path="/internship/demand" element={<AddDemand />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
