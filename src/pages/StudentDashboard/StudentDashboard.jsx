// React & Router
import {NavLink, Outlet } from "react-router-dom"

// Components
import Header from "../../components/Header"


const StudentDashboard = () => {

  

  return (
    <div className="bg-gray-50">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container mx-auto flex flex-col gap-3 py-6">
        <div className="tabs bg-white rounded-xl w-fit h-fit">
          <nav className="flex gap-5 items-center px-1 py-1">
            <NavLink
            to={"mydemands"}
              className={({ isActive }) => `${isActive? "text-primary bg-primary bg-opacity-10":"text-lightText"} font-medium font-header px-4 py-2 rounded-lg`}
            >
              demands
            </NavLink>
            <NavLink
              to={"myapplications"}
              className={({ isActive }) => `${isActive? "text-primary bg-primary bg-opacity-10":"text-lightText"} font-medium font-header px-4 py-2 rounded-lg`}>
              applications
            </NavLink>
            <NavLink
              to={"/myinternships"}
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

export default StudentDashboard
