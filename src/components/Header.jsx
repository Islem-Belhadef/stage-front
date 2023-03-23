import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex gap-14">
        <Link
          to="/"
          className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
        >
          Home
        </Link>
        <Link
          to="/internship/offers"
          className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
        >
          Offers
        </Link>
        <Link
          to="/internship/companies"
          className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
        >
          Companies
        </Link>
        <Link
          to="/contact"
          className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
        >
          Contact us
        </Link>
      </div>
      <div className="flex gap-14 items-center">
        <Link
          to="/login"
          className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="font-header text-white text-lg px-10 py-3 rounded-lg bg-gray-300/10 hover:bg-gray-300/20 hover:scale-105 focus:scale-95 transition"
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}

export default Header
