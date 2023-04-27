// React & Router
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"



const MobileNavigation = ({ showSideMenu, setShowSideMenu}) => {

    const { isAuthenticated } = useSelector((state) => state.auth)
    return (
        <div className={showSideMenu ? "fixed bg-black bg-opacity-25 top-0 bottom-0 left-0 right-0 pointer-events-auto transition-colors duration-700 " : "fixed top-0 bottom-0 left-0 right-0 pointer-events-none"}
            onClick={() => { setShowSideMenu(!showSideMenu)
                 
            }}
        >
            <div className={showSideMenu ? " w-80 h-full fixed top-0 left-0 py-4 pr-4 pl-6 bg-gray-50  transition-all  duration-700" : " w-72 h-full fixed top-0 left-0 py-4 pr-4 pl-6 bg-gray-50 -translate-x-72  transition-all duration-700"}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full flex justify-end mb-2">
                    <button className=" bg-gray-50 text-lg flex items-end"
                        onClick={() => { setShowSideMenu(!showSideMenu); 
                           
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18">
                            </line><line x1="6" y1="6" x2="18" y2="18">
                            </line>
                        </svg>

                    </button>
                </div>
                <nav className="flex flex-col gap-2 ">
                    <Link
                        to="/"
                        className="font-header text-xl px-2 py-3 font-medium"
                    >
                        {!isAuthenticated && "Home"}
                        {isAuthenticated && "Dashboard"}
                    </Link>
                    <Link
                        to="/internship/offers"
                        className="font-header text-xl px-2 py-3 font-medium"
                        
                    >
                        Offers
                    </Link>
                    <Link
                        to="/internship/companies"
                        className="font-header text-xl px-2 py-3 font-medium"

                    >
                        Companies
                    </Link>
                    <Link
                        to="/contact"
                        className="font-header text-xl px-2 py-3 font-medium"

                    >
                        Contact us
                    </Link>
                </nav>


            </div>
        </div>

    )
}

export default MobileNavigation