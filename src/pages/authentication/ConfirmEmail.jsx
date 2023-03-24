import { Link } from "react-router-dom"

// Assets
import { Sms, ArrowLeft } from "iconsax-react"
import image from "../assets/informations-cover.jpg"

const ConfirmEmail = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="rounded-xl bg-white py-8 px-24 w-min flex flex-col items-center">
        <Sms size={50} color="#7CDF64" className="m-6" />
        <h1 className="font-header text-2xl text-text font-semibold mb-2">
          Confirm your email
        </h1>
        <p className="font-body text-lightText">
          Please enter the code sent to your school email address down below to
          continue
        </p>
        <form className="flex flex-col items-center mt-6">
          <label htmlFor="code-1" className="label mb-2">
            Code
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              name="code-1"
              id="code-1"
              pattern="[0-9]*"
              min="0"
              max="9"
              maxlength="1"
              inputtype="numeric"
              required
              className="input"
              style={{ width: "3rem", height: "3rem", fontSize: "1.3rem" }}
            />
            <input
              type="text"
              name="code-2"
              id="code-2"
              pattern="[0-9]*"
              min="0"
              max="9"
              maxlength="1"
              inputtype="numeric"
              required
              className="input"
              style={{ width: "3rem", height: "3rem", fontSize: "1.3rem" }}
            />
            <input
              type="text"
              name="code-2"
              id="code-2"
              pattern="[0-9]*"
              min="0"
              max="9"
              maxlength="1"
              inputtype="numeric"
              required
              className="input"
              style={{ width: "3rem", height: "3rem", fontSize: "1.3rem" }}
            />
            <input
              type="text"
              name="code-4"
              id="code-4"
              pattern="[0-9]*"
              min="0"
              max="9"
              maxlength="1"
              inputtype="numeric"
              required
              className="input"
              style={{ width: "3rem", height: "3rem", fontSize: "1.3rem" }}
            />
            <input
              type="text"
              name="code-5"
              id="code-5"
              pattern="[0-9]*"
              min="0"
              max="9"
              maxlength="1"
              inputtype="numeric"
              required
              className="input"
              style={{ width: "3rem", height: "3rem", fontSize: "1.3rem" }}
            />
            <input
              type="text"
              name="code-6"
              id="code-6"
              pattern="[0-9]*"
              min="0"
              max="9"
              maxlength="1"
              inputtype="numeric"
              required
              className="input"
              style={{ width: "3rem", height: "3rem", fontSize: "1.3rem" }}
            />
          </div>
          <button type="submit" className="primary-btn my-6 w-full">
            Confirm
          </button>
        </form>
        <p className="font-body text-text text-sm">Didn't recieve the code?</p>
        <button className="text-primary font-body text-sm mb-4">
          Resend code
        </button>
        <Link
          to="/signup"
          className="text-primary font-body flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={20} color="#383EBE" />
          Back to signup
        </Link>
      </div>
    </div>
  )
}

export default ConfirmEmail
