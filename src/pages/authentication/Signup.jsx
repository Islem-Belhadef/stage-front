// React & Router
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useCookies } from "react-cookie"

// Assets
import logo from "/logo.svg"
import { Eye, EyeSlash } from "iconsax-react"
import image from "../../assets/login-cover.jpg"
import Message from "../../components/message"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [passwordMatch, setPasswordMatch] = useState()
  const [showMessage, setShowMessage] = useState(false)
  const [messageType, setMessageType] = useState()
  const [text, setText] = useState("")

  const [cookies, setCookie, removeCookie] = useCookies()

  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9_.+-]+@univ-constantine2.dz$/
    return pattern.test(email)
  }

  const handleSignup = (e) => {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setError("* invalid email please use your university email")
    } else if (confirmPassword != password) {
      setPasswordMatch(false)
    } else {
      axios
        .post("http://127.0.0.1:8000/api/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.status === 201) {
            console.log(res.data)
            setCookie("token", res.data.token, { path: "/" })
            setCookie("firstName", res.data.user.first_name)
            setCookie("lastName", res.data.user.last_name)
            setText("successfuly signed up")
            console.log("successfuly signed up")
            setMessageType("success")
            setShowMessage(true)

            setTimeout(() => {
              setShowMessage(false)
              window.location.replace("/signup/confirm")
            }, 1500)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
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
          <form
            className="flex flex-col items-center text-center font-body w-full mt-8 mb-6"
            onSubmit={handleSignup}
          >
            <label
              htmlFor="email"
              className="flex flex-col text-left text-grayText font-medium w-full mb-4"
            >
              Email address
              <input
                type="email"
                name="email"
                id="email"
                className={`${
                  error &&
                  "ring-red-500 ring-1 focus:ring-1 focus:ring-red-500 focus:border-lightGray"
                } input mt-2`}
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError(null)
                }}
              />
              {error && (
                <p className="text-xs sm:text-sm text-red-500 mt-2">{error}</p>
              )}
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
                  required
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
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
                className={`${
                  passwordMatch == false &&
                  "ring-red-500 ring-1 focus:ring-1 focus:ring-red-500 focus:border-lightGray"
                } input mt-2`}
                required
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                  if (e.target.value === password) {
                    setPasswordMatch(true)
                  } else {
                    setPasswordMatch(false)
                  }
                }}
              />
              {passwordMatch == false && (
                <p className="text-xs sm:text-sm text-red-500 mt-2">
                  * password do not match
                </p>
              )}
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
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {showMessage == true && <Message type={messageType} text={text} />}
    </div>
  )
}

export default Signup
