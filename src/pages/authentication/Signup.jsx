// React & Router
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"

// Assets
import logo from "/logo.svg"
import { Eye, EyeSlash } from "iconsax-react"
import image from "../../assets/login-cover.jpg"
import circles from "../../assets/circles.svg"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

  const handleSignup = (e) => {
    e.preventDefault()

    axios
      .post("http://127.0.0.1:8000/api/auth/signup", { email, password })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setCookie("token", res.data.token)
          setCookie("type", 0)
          dispatch(login())
          setText("successfuly logged in")
          setMessage(true)
          setTimeout(async () => {
            setMessage(false)
            window.location.replace("/")
          }, 1500)
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setText("invalid credentials please try again")
          setMessage(true)
          setTimeout(() => {
            setMessage(false)
          }, 3000)
          console.log("invalid credentials")
        } else {
          console.log("login failed")
        }
      })
  }

  return (
    <div className="h-screen w-screen flex">
      <div className="flex-1 flex flex-col items-center sm:justify-center text-center bg-primary sm:bg-white bg-[url('/src/assets/MobileCover.svg')] [background-position-x:center] sm:bg-none">
        <div className="flex justify-center items-center bg-primary sm:bg-transparent w-20 aspect-square rounded-full absolute top-8 left-1/2 sm:left-6 translate-x-[-50%] sm:translate-x-0">
          <img
            src={logo}
            alt="logo"
            className="brightness-[5] sm:filter-none w-[60px]"
          />
        </div>
        <div className="absolute sm:static top-36 w-11/12 sm:w-2/3 px-5 py-7 sm:p-0 rounded-2xl sm:rounded-none text-left sm:text-center bg-white sm:bg-transparent z-50">
          <h1 className="font-header text-text font-semibold text-xl sm:text-4xl mb-3 sm:mb-8">
            Create account
          </h1>
          <p className="sm:hidden font-body text-lightText text-sm">
            Create your account to start looking for internship opportunities
          </p>
          <p className=" hidden sm:block font-body text-lightText">
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="input mt-2"
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
                type={showPassword ? "text" : "password"}
                name="confirm-password"
                id="confirm-password"
                className="input mt-2"
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
        className="hidden sm:block flex-1 bg-[cover,cover] bg-center"
        style={{ backgroundImage: `url(${circles}),url(${image})` }}
      ></div>
    </div>
  )
}

export default Signup
