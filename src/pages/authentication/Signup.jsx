// React & Router
import { useState, useRef } from "react"
import { Link } from "react-router-dom"

// Assets
import logo from "/logo.svg"
import { Eye, EyeSlash } from "iconsax-react"
import image from "../../assets/login-cover.jpg"

const Signup = () => {
  const passwordInput = useRef()
  const confirmPasswordInput = useRef()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="h-screen w-screen flex">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-2/3">
          <img
            src={logo}
            alt="logo"
            style={{ width: "60px" }}
            className="fixed top-6 left-6"
          />
          <h1 className="font-header text-text font-semibold text-4xl mb-8">
            Create account
          </h1>
          <p className="font-body text-lightText">
            Create your account to start looking for internship opportunities
            alongside{" "}
            <Link
              to="https://www.univ-constantine2.dz/home"
              target="_blank"
              className="text-secondary font-semibold"
            >
              University of Constantine 2 Abdelhamid Mehri
            </Link>
          </p>
          <form className="flex flex-col items-center text-center font-body w-full mt-8 mb-6">
            <label
              htmlFor="email"
              className="flex flex-col text-left text-grayText font-medium w-full mb-4"
            >
              Email address
              <input
                type="email"
                name="email"
                id="email"
                className="input mt-2"
              />
            </label>
            <label
              htmlFor="password"
              className="flex flex-col text-left text-grayText font-medium w-full"
            >
              Password
              <div className="flex flex-col items-end">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input mt-2"
                  ref={passwordInput}
                />
                {!showPassword && (
                  <Eye
                    color="#383EBE"
                    size={26}
                    style={{
                      position: "relative",
                      left: "-10px",
                      top: "-38px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowPassword(true)
                      passwordInput.current.type = "text"
                      confirmPasswordInput.current.type = "text"
                    }}
                  />
                )}
                {showPassword && (
                  <EyeSlash
                    color="#383EBE"
                    size={26}
                    style={{
                      position: "relative",
                      left: "-10px",
                      top: "-38px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowPassword(false)
                      passwordInput.current.type = "password"
                      confirmPasswordInput.current.type = "password"
                    }}
                  />
                )}
              </div>
            </label>
            <label
              htmlFor="password"
              className="flex flex-col text-left text-grayText font-medium w-full"
            >
              Confirm password
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="input mt-2"
                ref={confirmPasswordInput}
              />
            </label>
            <button type="submit" className="primary-btn px-16 mt-10">
              Create account
            </button>
          </form>
          <Link to="/login" className="text-secondary font-semibold">
            I already have an account
          </Link>
        </div>
      </div>

      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  )
}

export default Signup
