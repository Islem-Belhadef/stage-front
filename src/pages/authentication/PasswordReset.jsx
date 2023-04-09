// React & Router
import { useState, useRef } from "react"
import { Link } from "react-router-dom"

// Assets
import { Key, ArrowLeft, Eye, EyeSlash } from "iconsax-react"
import image from "../../assets/informations-cover.jpg"

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex sm:items-center justify-center sm:bg-[url('/src/assets/informations-cover.jpg')]"
     
    >
      <div
        className="relative top-10 sm:static w-full px-10 sm:min-w-[36rem] rounded-xl bg-white sm:w-min max-w-fit py-8 sm:px-24 flex flex-col items-center"
       
      >
        <div className="flex justify-center items-center mb-5">
          <Key size={50} color="#7CDF64" className="m-6 z-50" variant="Bold" /> 
          <span className=" w-32 h-20 rounded-[50%] -rotate-[17deg] absolute" style={{backgroundColor:"rgba(48, 147, 58, 0.08)"}}></span>
          <span className=" w-28 h-20 rounded-[50%] rotate-[22deg] absolute" style={{backgroundColor:"rgba(48, 147, 58, 0.08)"}}></span>
        </div>

        <h1 className="font-header text-2xl text-text font-semibold mb-2">
          Reset password
        </h1>

        <p className="font-body text-lightText">
          Enter your new password, make sure you write down somewhere safe
        </p>

        <form className="flex flex-col items-center mt-6 w-full mb-6">
          <label htmlFor="code-1" className="label">
            New password
            <div className="flex flex-col items-end">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="input mt-2"
              />
              {!showPassword ? 
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
              
               :
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
              }
            </div>
          </label>
          <label htmlFor="confirm-password" className="label">
            Confirm password
            <input
              type={showPassword ? "text" : "password"}
              name="confirm-password"
              id="confirm-password"
              className="input mt-2"
            />
          </label>
          <button type="submit" className="primary-btn w-full mt-8">
            Save
          </button>
        </form>
        <Link
          to="/login"
          className="text-primary font-body flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={20} color="#383EBE" />
          Back to log in
        </Link>
      </div>
    </div>
  )
}

export default PasswordReset
