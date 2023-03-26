import { Link } from "react-router-dom"

const Header = ({ fontColor, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex gap-14">
          <Link
            to="/"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition"
            style={{ color: fontColor }}
          >
            Home
          </Link>
          <Link
            to="/internship/offers"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition"
            style={{ color: fontColor }}
          >
            Offers
          </Link>
          <Link
            to="/internship/companies"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition"
            style={{ color: fontColor }}
          >
            Companies
          </Link>
          <Link
            to="/contact"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition"
            style={{ color: fontColor }}
          >
            Contact us
          </Link>
        </div>
        <div className="flex gap-14 items-center">
          <Link
            to="/login"
            className="font-header text-lg hover:scale-110 focus:scale-90 transition"
            style={{ color: fontColor }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-header text-lg px-10 py-3 rounded-lg bg-gray-300/10 hover:bg-gray-300/20 hover:scale-105 focus:scale-95 transition"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
