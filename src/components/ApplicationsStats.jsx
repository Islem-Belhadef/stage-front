//React and router 
import { Link } from "react-router-dom"
//assets
import { Add } from "iconsax-react"

const ApplicationsStats = ({ showButton , total,pending,approved,rejected }) => {


    return (
        <div className="flex sm:flex-row lg:flex-col items-center sm:items-center lg:items-start justify-between bg-white rounded-xl shadow-lg shadow-gray-200 py-5 px-5 sm:pl-10 sm:pr-5 lg:px-6 lg:py-10 h-fit min-w-max ">
            <div className="flex sm:flex-col gap-3 ">
                <h1 className="font-header text-text text-lg sm:text-xl font-bold mr-3 sm:m-0">
                    {total} Applications
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
                            {pending} pending applications
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
                            {approved} approved applications
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
                            {rejected} rejected applications
                        </p>
                        <button className="text-secondary font-semibold hidden lg:block">check</button>
                    </div>

                </div>
                <div className="lg:hidden flex items-center sm:gap-5">
                    <p className="flex items-center text-text font-semibold mr-2">
                        <div className="flex items-center justify-center w-3 h-3 rounded-full bg-[#D9D9D9] mr-1 sm:mr-3"></div>

                        {pending}
                        <p className="ml-1 hidden sm:block font-normal">pending</p>
                    </p>
                    <p className="flex items-center text-text font-semibold mr-2">
                        <div className="flex items-center justify-center w-3 h-3 rounded-full bg-[#50E379] mr-1 sm:mr-3"></div>

                        {approved}
                        <p className="ml-1 hidden sm:block font-normal">approved</p>
                    </p>
                    <p className="flex items-center text-text font-semibold mr-2">
                        <div className="flex items-center justify-center w-3 h-3 rounded-full bg-[#F64A4A] mr-1 sm:mr-3"></div>

                        {rejected}
                        <p className="ml-1 hidden sm:block font-normal">rejected</p>
                    </p>
                </div>
            </div>

            {showButton && (
                <Link
                    to={"/internship/offers"}
                    className="text-primary text-center lg:mt-6 lg:w-full sm:text-lg lg:text-base ">
                     <p className="lg:hidden">Apply</p> <p className="hidden lg:block">Check offers</p>
                </Link>
            )}

        </div>
    )
}

export default ApplicationsStats 