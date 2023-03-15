// React & Router
import { Link } from "react-router-dom"

// Assets
import logo from "/logo.svg"
import { Eye } from "iconsax-react"

const Login = () => {
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
            Sign in
          </h1>
          <p className="font-body text-lightText">
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
          <form className="flex flex-col items-center text-center font-body w-full mt-8 mb-6">
            <label
              htmlFor="email"
              className="flex flex-col text-left text-grayText font-medium w-full mb-4"
            >
              Email address
              <input
                type="text"
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
                />
                <Eye
                  color="#383EBE"
                  size={26}
                  style={{
                    position: "relative",
                    left: "-10px",
                    top: "-38px",
                    cursor: "pointer",
                  }}
                />
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
              <Link
                to="/login/forogt-password"
                className="text-sm text-grayText"
              >
                Forgot password
              </Link>
            </div>
            <button
              type="submit"
              className="px-16 py-3 rounded-lg bg-primary text-white font-body font-medium mt-10"
            >
              Login
            </button>
          </form>
          <Link to="/signup" className="text-secondary font-semibold">
            I don't have an account
          </Link>
        </div>
      </div>

      <div className="cover" id="login-cover"></div>
    </div>
  )
}

export default Login
