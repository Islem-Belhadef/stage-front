import { Link } from "react-router-dom"

// Assets
import { Key, ArrowLeft } from "iconsax-react"
import image from "../../assets/informations-cover.jpg"
import { useState } from "react"

const ForgotPassword = () => {
  const [resetSent, setResetSent] = useState(false)

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex sm:items-center justify-center sm:bg-[url('/src/assets/informations-cover.jpg')]"
    >
      <div
        className="relative top-10 sm:static w-full sm:w-min px-10 rounded-xl bg-white sm:min-w-[36rem] max-w-fit py-8 sm:px-24 flex flex-col items-center"
      >
        <div className="flex justify-center items-center mb-5">
          <Key size={50} color="#7CDF64" className="m-6 z-50" variant="Bold" /> 
          <span className=" w-32 h-20 rounded-[50%] -rotate-[17deg] absolute" style={{backgroundColor:"rgba(48, 147, 58, 0.08)"}}></span>
          <span className=" w-28 h-20 rounded-[50%] rotate-[22deg] absolute" style={{backgroundColor:"rgba(48, 147, 58, 0.08)"}}></span>
        </div>
        
        {!resetSent && (
          <h1 className="font-header text-2xl text-text font-semibold mb-4 sm:mb-2">
            Forgot password ?
          </h1>
        )}
        {resetSent && (
          <h1 className="font-header text-2xl text-text font-semibold mb-2">
            Check your email
          </h1>
        )}
        {!resetSent && (
          <p className="font-body text-lightText">
            Please enter your account's email address so we can send you a
            password reset link
          </p>
        )}
        {resetSent && (
          <p className="font-body text-lightText">
            We sent you an email with your password reset link
          </p>
        )}
        {!resetSent && (
          <form className="flex flex-col items-center mt-6 w-full">
            <label htmlFor="email" className="label">
              Email address
              <input
                type="email"
                name="email"
                id="email"
                className="input mt-2"
              />
            </label>
            <button type="submit" className="primary-btn my-6 w-full">
              Send
            </button>
          </form>
        )}
        {!resetSent && (
          <Link
            to="/login"
            className="text-primary font-body flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={20} color="#383EBE" />
            Back to log in
          </Link>
        )}
        {resetSent && (
          <Link to="/login" className="primary-btn w-full my-6">
            Back to log in
          </Link>
        )}
        {resetSent && (
          <>
            <p className="font-body text-text text-sm">
              Didn't recieve the link?
            </p>
            <button className="text-primary font-body text-sm mb-4">
              Resend link
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
