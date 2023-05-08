//React and router 
import { Link } from "react-router-dom"
//assets
import { Add } from "iconsax-react"

const DemandStats = ({ showButton }) => {


  return (
    <div className="flex sm:flex-row lg:flex-col items-center sm:items-center lg:items-start justify-between bg-white rounded-xl shadow-lg shadow-gray-200 py-5 pr-3 pl-5 sm:pl-10 sm:pr-5 lg:px-6 lg:py-10 h-fit min-w-max ">
      <div className="flex sm:flex-col gap-3 w-full">
        <h1 className="font-header text-text text-lg sm:text-xl  font-bold mr-3 sm:m-0">
          3 Demands
        </h1>
        <div className="hidden lg:flex lg:flex-col mt-3 font-body text-text gap-2">
          <p className="mb-3">You have :</p>
          <div className="flex justify-between gap-12">
            <p className="flex gap-4 items-center text-sm">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#D9D9D9" />
              </svg>
              1 pending demand
            </p>
            <button className="text-secondary font-semibold hidden lg:block">check</button>
          </div>
          <div className="flex justify-between gap-12">
            <p className="flex gap-4 items-center text-sm">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#50E379" />
              </svg>
              0 approved demand
            </p>
            <button className="text-secondary font-semibold hidden lg:block">check</button>
          </div>
          <div className="flex justify-between gap-12">
            <p className="flex gap-4 items-center text-sm">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#F64A4A" />
              </svg>
              1 rejected demand
            </p>
            <button className="text-secondary font-semibold hidden lg:block">check</button>
          </div>

        </div>
        <div className="lg:hidden flex items-center sm:gap-5">
          <p className="flex items-center text-text font-semibold mr-2">
            <div className="flex items-center justify-center w-3 h-3 rounded-full bg-[#D9D9D9] mr-1 sm:mr-3"></div>

            0
            <p className="ml-1 hidden sm:block font-normal">pending</p>
          </p>
          <p className="flex items-center text-text font-semibold mr-2">
            <div className="flex items-center justify-center w-3 h-3 rounded-full bg-[#50E379] mr-1 sm:mr-3"></div>

            1
            <p className="ml-1 hidden sm:block font-normal">approved</p>
          </p>
          <p className="flex items-center text-text font-semibold mr-2">
            <div className="flex items-center justify-center w-3 h-3 rounded-full bg-[#F64A4A] mr-1 sm:mr-3"></div>

            4
            <p className="ml-1 hidden sm:block font-normal">rejected</p>
          </p>
        </div>
      </div>

      {showButton && (
        <>
          <Link
            to={"/internship/demand"}
            className="hidden lg:block primary-btn lg:mt-6 lg:w-full">Add new demand</Link>
          <Link
            to={"/internship/demand"}
            className="lg:hidden primary-btn !px-4 !py-2 flex items-center ml-auto !rounded-xl text-base">
            <Add size={30} className="sm:mr-2" />
            <span className="hidden sm:block">demand</span>
          </Link>
        </>
      )}

    </div>
  )
}

export default DemandStats 