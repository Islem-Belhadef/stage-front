// React & Router
import {NavLink, Outlet } from "react-router-dom"

// Components
import Header from "../../components/Header"

const SupervisorDashboard = () => {
  return (
    <div className="bg-bg">
    <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
    <div className="container mx-auto flex flex-col gap-3 py-6">
      <div className="tabs bg-white rounded-xl w-fit h-fit">
        <nav className="flex sm:gap-5 gap-1 items-center px-1 py-1">
          <NavLink
          to={"myoffers"}
            className={({ isActive }) => `${isActive? "text-primary bg-primary bg-opacity-10":"text-lightText"} font-medium font-header px-4 py-2 rounded-lg`}
          >
            my offers
          </NavLink>
          <NavLink
            to={"myapplications"}
            className={({ isActive }) => `${isActive? "text-primary bg-primary bg-opacity-10":"text-lightText"} font-medium font-header px-4 py-2 rounded-lg`}>
            applications
          </NavLink>
          <NavLink
            to={"mydemands"}
            className={({ isActive }) => `${isActive? "text-primary bg-primary bg-opacity-10":"text-lightText"} font-medium font-header px-4 py-2 rounded-lg`}>
            demands
          </NavLink>
          <NavLink
            to={"myinternships"}
            className={({ isActive }) =>`${isActive? "text-primary bg-primary bg-opacity-10":"text-lightText"} font-medium font-header px-4 py-2 rounded-lg`}>
            internships
          </NavLink>

        </nav>
      </div>
    
      
      <Outlet/>
      
    </div>
  </div>
  )
}

export default SupervisorDashboard

