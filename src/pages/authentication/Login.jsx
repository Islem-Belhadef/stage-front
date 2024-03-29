// React & Router
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import { useDispatch } from "react-redux"
import { login } from "../../app/authSlice"
import { useCookies } from "react-cookie"

// Assets
import logo from "/logo.svg"
import image from "../../assets/login-cover.jpg"
import { Eye, EyeSlash } from "iconsax-react"
import Message from "../../components/message"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [text, setText] = useState("")
  const [messageType, SetMessageType] = useState()

  const [cookies, setCookie, removeCookie] = useCookies()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()

    axios
      .post("http://127.0.0.1:8000/api/auth/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setCookie("token", res.data.token)
          setCookie("type", res.data.role)
          setCookie("firstName", res.data.user.first_name)
          setCookie("lastName", res.data.user.last_name)
          dispatch(login())
          setText("successfuly logged in")
          SetMessageType("success")
          setShowMessage(true)
          setTimeout(async () => {
            setShowMessage(false)
            if(res.data.isVerified==true){
              window.location.replace("/")
            }else{
              window.location.replace("/signup/confirm")
            }
          }, 1500)
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setText("invalid credentials please try again")
          SetMessageType("error")
          setShowMessage(true)
          setTimeout(() => {
            setShowMessage(false)
          }, 3000)
          console.log("invalid credentials")
        } else {
          console.log("login failed")
        }
      })
  }

  return (
    <div className="w-screen h-screen flex">
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
            Sign in
          </h1>
          <p className="sm:hidden font-body text-lightText text-sm">
            Enter your login info to proceed{" "}
          </p>
          <p className="hidden sm:block font-body text-lightText">
            Enter your login information to continue looking for internship
            opportunities alongside{" "}
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
            onSubmit={handleLogin}
          >
            <label htmlFor="email" className="label mb-4">
              Email address
              <input
                type="email"
                name="email"
                id="email"
                className="input mt-2"
                onChange={(e) => {
                  setEmail(e.target.value)
                  console.log(email)
                }}
              />
            </label>
            <label htmlFor="password" className="label">
              Password
              <div className="flex flex-col items-end">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="input mt-2 pl-10"
                  onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(password)
                  }}
                />
                {!showPassword ? (
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
                ) : (
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
            <div className="flex justify-between w-full">
              <label htmlFor="remember-me" className="text-sm text-grayText">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="mr-1"
                />
                Remember me
              </label>
              <Link to="/login/password" className="text-sm text-grayText">
                Forgot password
              </Link>
            </div>

            <input
              className="primary-btn mt-10 cursor-pointer w-full max-w-sm"
              type="submit"
              value="Login"
            />
          </form>
          <Link to="/signup" className="text-secondary font-semibold">
            I don't have an account
          </Link>
        </div>
      </div>

      <div
        className="hidden sm:block flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {showMessage && <Message type={messageType} text={text} />}
    </div>
  )
}

export default Login
