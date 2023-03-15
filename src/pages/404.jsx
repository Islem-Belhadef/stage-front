import { Link } from "react-router-dom"
import { Warning2, ArrowLeft } from "iconsax-react"

const Error404 = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Warning2 color="#383EBE" size={140} className="m-8" />
      <h1 className="text-text font-header text-3xl font-bold">
        Oops! page not found
      </h1>
      <p className="text-lightText font-body p-10 text-center">
        Looks like you got lost, click the link below <br />
        to navigate back to home{" "}
      </p>
      <Link to="/" className="text-secondary flex items-end gap-2">
        <ArrowLeft color="#7CDF64" size={20} />
        Take me back home
      </Link>
    </div>
  )
}

export default Error404
