import { useState } from "react"
import authAxios from "../api/axios"

const ApplyModal = ({ offer_id, company, setshowApplyModal, setshowSuccessModal }) => {

  const [processing , setProcessing]= useState(false)

  const applyToOffer = () => {
    setProcessing(true)
    authAxios.post('applications/new', { offer_id: offer_id })
      .then(res => {
        if (res.status == 201) {
          setProcessing(false)
          console.log('application created')
          setshowApplyModal(false)
          setshowSuccessModal(true)

        }

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className=" flex justify-center items-center fixed bg-slate-800 backdrop-blur-sm bg-opacity-70 top-0 bottom-0 right-0 left-0">
      <div
        className=" bg-white h-fit px-10 py-8 rounded-xl "
        style={{ width: "clamp(350px,46%,600px)" }}
      >
        <h1 className="font-header text-text text-xl font-bold mb-4">
          Apply to offer {offer_id}
        </h1>
        <p className="font-body text-grayText">
          Are you sure you want to apply to this internship offer from
          <span className="font-body text-primary font-bold ml-2">
            {company}
          </span>
        </p>
        <div className="flex gap-8 w-full items-center justify-center mt-8">
          <button
            className="secondary-btn px-16"
            onClick={() => {
              setshowApplyModal(false)
              console.log("ok")
            }}
          >
            Cancel
          </button>
          <button
            disabled={processing}
            type="submit"
            className="primary-btn px-16"
            onClick={applyToOffer}
          >
            {processing == true ? 'processing' :'Confirm'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplyModal
