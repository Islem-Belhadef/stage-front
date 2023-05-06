import { useState, useAffect } from "react"
import { useNavigate } from "react-router-dom"

const SuccessModal = ({ setshowSuccessModal }) => {
  return (
    <div className=" flex justify-center items-center fixed bg-slate-800 backdrop-blur-sm bg-opacity-70 top-0 bottom-0 right-0 left-0">
      <div
        className=" bg-white h-fit px-11 py-7 rounded-xl"
        style={{ width: "clamp(350px,46%,600px)" }}
      >
        <h1 className="font-header text-text text-xl font-bold mb-4">
          Success
        </h1>
        <p className="font-body text-grayText text">
          Your application has been registered, the people in charge will handle
          it. Make sure you check your dashboard to stay informed about the
          status of your application
        </p>
        <div className="flex w-full items-center justify-center mt-8">
          <button
            className="primary-btn px-16"
            onClick={() => {
              setshowSuccessModal(false)
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
