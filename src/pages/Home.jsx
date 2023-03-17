import { Link } from "react-router-dom"

import TypewriterComponent from "typewriter-effect"

import image from "../assets/home-cover.jpg"

const Home = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-top"
      style={{ backgroundImage: `url(${image})` }}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex gap-14">
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
            to="/about"
            className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
          >
            Contact
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
      <div className="flex h-4/5 w-full items-center justify-center font-body font-medium text-white text-3xl">
        <div className="w-3/5 text-center">
          <TypewriterComponent
            onInit={(typerwriter) => {
              typerwriter
                .typeString("Take your first step ahead")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Move forward and find your career with ease")
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  "Connect to streamline your internship applications and stay notified"
                )

                .start()
            }}
            options={{ loop: true }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
