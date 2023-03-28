// React & Router
import { Link } from "react-router-dom"

// Components
import Header from "../components/Header"

// Assets
import emptyBox from "../assets/empty-box.svg"

const StudentDashboard = () => {
  return (
    <div className="bg-gray-50">
      <Header fontColor="#272937" bgColor="#FFFFFF" />
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-10">
        <div className="w-3/12 flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200 py-10 px-6 h-fit min-w-max">
            <h1 className="font-header text-text text-2xl font-bold">
              Demands
            </h1>
            <div className="flex flex-col mt-3 font-body text-text gap-2">
              <p className="mb-3">You have :</p>
              <div className="flex justify-between">
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
                <button className="text-secondary font-semibold">check</button>
              </div>
              <div className="flex justify-between">
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
                  0 approved demands
                </p>
                <button className="text-secondary font-semibold">check</button>
              </div>
              <div className="flex justify-between">
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
                <button className="text-secondary font-semibold">check</button>
              </div>
              <button className="primary-btn mt-6">Add new demand</button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200  py-10 px-6 h-fit min-w-max">
            <h1 className="font-header text-text text-2xl font-bold">
              Offer applications
            </h1>
            <div className="flex flex-col mt-3 font-body text-text gap-2">
              <p className="mb-3">You have :</p>
              <div className="flex justify-between">
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
                  1 pending application
                </p>
                <button className="text-secondary font-semibold">check</button>
              </div>
              <div className="flex justify-between">
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
                  0 approved applications
                </p>
                <button className="text-secondary font-semibold">check</button>
              </div>
              <div className="flex justify-between">
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
                  1 rejected application
                </p>
                <button className="text-secondary font-semibold">check</button>
              </div>
              <Link
                className="text-primary mt-6 text-center"
                to="/internship/offers"
              >
                Check offers
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg shadow-gray-200  w-9/12 pb-10 px-10 flex flex-col justify-center items-center">
          <img src={emptyBox} alt="empty box" className="w-2/3" />
          <h1 className="font-header text-text text-2xl font-bold mb-4">
            Nothing
          </h1>
          <p className="font-body text-lightText">
            There are no corresponding internship offers with the filters you
            entered, try removing filters
          </p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
