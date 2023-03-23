import { Link } from "react-router-dom"

// Assets
import { Key, ArrowLeft } from "iconsax-react"
import image from "../assets/informations-cover.jpg"
import { useState } from "react"

const ForgotPassword = () => {
  const [resetSent, setResetSent] = useState(true)

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="rounded-xl bg-white w-min max-w-fit py-8 px-24 flex flex-col items-center"
        style={{ minWidth: "36rem" }}
      >
        <Key size={50} color="#7CDF64" className="m-6" />
        {!resetSent && (
          <h1 className="font-header text-2xl text-text font-semibold mb-2">
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
            Please enter your university email address so we can send you a
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
              Didn't recieve the code?
            </p>
            <button className="text-primary font-body text-sm mb-4">
              Resend code
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
