// React & Router
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../app/authSlice"
import { Cookies } from "react-cookie"
import authAxios from "../api/axios"

// Assets
import {
  User,
  Setting,
  Logout as LogoutIcon,
  ArrowDown2,
  HambergerMenu,
} from "iconsax-react"
import MobileNavigation from "./MobileNavigation"

// Plugins
import { motion, AnimatePresence } from "framer-motion"
import Avatar from "./Avatar"

const Header = ({ fontColor, bgColor, btnColor }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSideMenu, setShowSideMenu] = useState(false)

  const { isAuthenticated } = useSelector((state) => state.auth)
  const cookies = new Cookies()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Logout = () => {
    authAxios
      .post("/auth/logout")
      .then((res) => {
        if (res.status === 200) {
          console.log("logged out")
          cookies.remove("token")
          cookies.remove("type")
          dispatch(logout())
          setShowMenu(false)
          navigate("/")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <nav
        className="container mx-auto xl:px-3 flex items-center justify-between py-4 px-4 sm:px-0"
        onClick={() => {
          if (showMenu) {
            setShowMenu(false)
          }
        }}
      >
        <div className="hidden sm:flex gap-2 lg:gap-8">
          <Link
            to="/"
            className="font-header text-base font-semibold md:text-lg hover:scale-110 active:scale-90 transition sm:p-2 md:p-4"
            style={{ color: fontColor }}
          >
            {!isAuthenticated && "Home"}
            {isAuthenticated && "Dashboard"}
          </Link>
          <Link
            to="/internship/offers"
            className="font-header text-base font-semibold md:text-lg hover:scale-110 active:scale-90 transition  sm:p-2 md:p-4"
            style={{ color: fontColor }}
          >
            Offers
          </Link>
          <Link
            to="/internship/companies"
            className="font-header text-base font-semibold md:text-lg hover:scale-110 active:scale-90 transition  sm:p-2 md:p-4"
            style={{ color: fontColor }}
          >
            Companies
          </Link>
          <Link
            to="/contact"
            className="font-header text-base font-semibold md:text-lg hover:scale-110 active:scale-90 transition  sm:p-2 md:p-4"
            style={{ color: fontColor }}
          >
            Contact us
          </Link>
        </div>
        <button
          className="block sm:hidden"
          onClick={() => {
            setShowSideMenu(!showSideMenu)
          }}
        >
          <HambergerMenu size={35} color={fontColor} />
        </button>
        {!isAuthenticated && (
          <div className="flex gap-12 items-center">
            <Link
              to="/login"
              className="hidden sm:block font-header font-semibold text-base md:text-lg hover:scale-110 active:scale-90 transition  sm:p-2 md:p-4"
              style={{ color: fontColor }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-header text-white sm:font-semibold text-base md:text-lg px-4 sm:px-6 md:px-10 py-2 sm:py-3 rounded-lg bg-gray-300/10 hover:bg-gray-300/20 hover:scale-105 active:scale-95 transition"
              style={{ backgroundColor: btnColor }}
            >
              Sign up
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <>
            <button
              className="sm:flex hidden gap-2 items-center font-header text-lg transition p-4 cursor-default "
              style={{ color: fontColor }}
              onClick={() => setShowMenu(!showMenu)}
            >
              FirstName
              <AnimatePresence>
                {!showMenu && (
                  <motion.div
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 180, scale: 3 }}
                  >
                    <ArrowDown2 size={20} color={fontColor} variant="Bold" />
                  </motion.div>
                )}
                {showMenu && (
                  <motion.div
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 180, scale: 1 }}
                    exit={{ rotate: 180, scale: 0 }}
                  >
                    <ArrowDown2 size={20} color={fontColor} variant="Bold" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            {/* drop down button for small screens  */}
            <button
              className="block sm:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Avatar lastName={"damous"} firstName={"mohamed achraf"} />
            </button>
          </>
        )}
      </nav>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="menu"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={
              bgColor == "#FFFFFF"
                ? "rounded-xl bg-white shadow-lg shadow-gray-100 absolute right-10 top-20 w-72 transition z-[9998]"
                : "rounded-xl bg-white absolute right-10 top-20 w-72 transition z-[9998]"
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="block sm:hidden px-8 py-4 border-b border-b-gray-200"
            >
              <p className="text-lightText text-sm ">signed in as </p>
              <p>Mohamed Achraf Damous</p>
            </motion.div>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              href="/profile"
              className="font-body text-text flex items-center gap-4 px-8 py-4 border-b border-b-gray-50 hover:bg-gray-100/20 rounded-t-xl"
            >
              <User size={26} color="#272937" />
              My account
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              href="/settings"
              className="font-body text-text flex items-center gap-4 px-8 py-4 border-b border-b-gray-50 hover:bg-gray-100/20"
            >
              <Setting size={26} color="#272937" />
              Settings
            </motion.a>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              className="font-body text-red-500 flex items-center gap-4 px-8 py-4 w-full hover:bg-gray-100/20  rounded-b-xl"
              // onClick={() => {
              //   dispatch(logout())
              //   setShowMenu(false)
              //   navigate("/")
              // }}
              onClick={Logout}
            >
              <LogoutIcon size={26} color="#EF4444" />
              Logout
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* this is for side navigation for small screens  */}

      <MobileNavigation
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        fontColor={fontColor}
      />
    </div>
  )
}

export default Header
