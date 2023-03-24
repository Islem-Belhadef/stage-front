import { Link } from "react-router-dom"

// Assets
import { Key, ArrowLeft, Eye } from "iconsax-react"
import image from "../assets/informations-cover.jpg"

const PasswordReset = () => {
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
          <label htmlFor="confirm-password" className="label">
            Confirm password
            <input
              type="confirm-password"
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
