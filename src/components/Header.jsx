// React & Router
import { useState } from "react"
import { Link } from "react-router-dom"

// Assets
import { User, Setting, Logout } from "iconsax-react"

// Plugins
import { motion, AnimatePresence } from "framer-motion"

const Header = ({ fontColor, bgColor, btnColor }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div style={{ backgroundColor: bgColor }}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex gap-8">
          <Link
            to="/"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition p-4"
            style={{ color: fontColor }}
          >
            Home
          </Link>
          <Link
            to="/internship/offers"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition p-4"
            style={{ color: fontColor }}
          >
            Offers
          </Link>
          <Link
            to="/internship/companies"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition p-4"
            style={{ color: fontColor }}
          >
            Companies
          </Link>
          <Link
            to="/contact"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition p-4"
            style={{ color: fontColor }}
          >
            Contact us
          </Link>
        </div>
        {!isAuthenticated && (
          <div className="flex gap-12 items-center">
            <Link
              to="/login"
              className="font-header text-lg hover:scale-110 focus:scale-90 transition p-4"
              style={{ color: fontColor }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-header text-white text-lg px-10 py-3 rounded-lg bg-gray-300/10 hover:bg-gray-300/20 hover:scale-105 focus:scale-95 transition"
              style={{ backgroundColor: btnColor }}
            >
              Sign up
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <div
            to="/login"
            className="font-header text-lg transition p-4 cursor-default"
            style={{ color: fontColor }}
            onMouseEnter={() => setShowMenu(true)}
          >
            FirstName
          </div>
        )}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              key="menu"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className={
                bgColor == "#FFFFFF"
                  ? "rounded-xl bg-white shadow-lg shadow-gray-100 absolute right-10 top-20 w-72 transition"
                  : "rounded-xl bg-white absolute right-10 top-20 w-72 transition"
              }
              onMouseLeave={() => setShowMenu(false)}
            >
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                href="/user/1526"
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
              >
                <Logout size={26} color="#EF4444" />
                Logout
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

export default Header
