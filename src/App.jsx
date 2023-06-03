// React & Router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

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
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard"
import HODDashboard from "./pages/HODDashboard/HODDashboard"
import SupervisorDashboard from "./pages/SupervisorDashboard/SupervisorDashboard"
import SupervisorOffers from "./pages/SupervisorDashboard/SupervisorOffers"
import SupervisorApplications from "./pages/SupervisorDashboard/SupervisorApplications"
import SupervisorInternships from "./pages/SupervisorDashboard/SupervisorInternships"
import SuperAdminDashboard from "./pages/SuperAdminDashboard"
import AddDemand from "./pages/AddDemand"
import AddOffer from "./pages/AddOffer"
import OfferDetails from "./pages/OfferDetails"
import Profile from "./pages/Profile"
import StudentApplications from "./pages/StudentDashboard/StudentApplications"
import StudentDemands from "./pages/StudentDashboard/StudentDemands"
import HODDemands from "./pages/HODDashboard/HODDemands"
import HODApplications from "./pages/HODDashboard/HODApplications"
import AddAccount from "./pages/AddAccount"
import StudentInternships from "./pages/StudentDashboard/StudentInternships"
import SupervisorDemands from "./pages/SupervisorDashboard/SupervisorDemands"



function App() {

const { isAuthenticated } = useSelector((state) => state.auth)
const { type } = useSelector((state) => state.auth)


let dashboard

// type is return from cookie type string so we use ==
// 0 => student | 1 => hod | 2 => supervisor| 3 => superAdmin

  dashboard =
    type == 0 ? (
      <StudentDashboard />
    ) : type == 1 ? (
      <HODDashboard />
    ) : type == 2 ? (
      <SupervisorDashboard />
    ) : type == 3 ?(
      <SuperAdminDashboard />)
      :<NotFound />
    

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? dashboard : <Home />} >
            {type == 0 &&(
               <> 
                 <Route path="mydemands" element={<StudentDemands />} />
                 <Route path="myapplications" element={<StudentApplications />} />
                 <Route path="myinternships" element={<StudentInternships />} />
                 <Route index element={<Navigate to="/mydemands" />} />
              </> 
             )} 
            {type == 1 &&(
              <>
                 <Route path="mydemands" element={<HODDemands />} />
                 <Route path="myapplications" element={<HODApplications />} />
                 <Route index element={<Navigate to="/mydemands" />} />
              </>
            )}
            {type == 2 &&(
              <>
                 <Route path="myoffers" element={<SupervisorOffers />} />
                 <Route path="myapplications" element={<SupervisorApplications />} />
                 <Route path="mydemands" element={<SupervisorDemands />} />
                 <Route path="myinternships" element={<SupervisorInternships />} />
                 <Route index element={<Navigate to="/myoffers"/>} />
              </>
            )}
           
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/login/password" element={<ForgotPassword />} />
          <Route path="/login/reset" element={<PasswordReset />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/confirm" element={<ConfirmEmail />} />
          <Route path="/signup/info" element={<PersonalInformation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship/companies" element={<Companies />} />
          <Route path="/internship/offers" element={<Offers />} />
          <Route path="/internship/demand" element={<AddDemand />} />
          <Route path="/internship/offer" element={type == 2 ? <AddOffer /> : <NotFound />} />
          <Route path="/internship/offer/:id" element={<OfferDetails />} />
          <Route path="/addaccount" element={<AddAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
