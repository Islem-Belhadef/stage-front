// React & Router
import { Link } from "react-router-dom"

// Assets
import { ArrowLeft } from "iconsax-react"
import pageNotFound from "../assets/page-not-found.svg"

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src={pageNotFound} alt="page not found" className="h-1/2" />
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

export default NotFound
