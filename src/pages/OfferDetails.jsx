// react and router 
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"
import authAxios from "../api/axios"
// Components
import Header from "../components/Header"
import ApplyModal from "../components/applyModal"
import SuccessModal from "../components/SuccessModal"
import Message from "../components/message"
import { Sms, Timer1, Calendar, Briefcase, Book1 } from "iconsax-react"


const OfferDetails = () => {
  const [showApplyModal, setshowApplyModal] = useState(false)
  const [showSuccessModal, setshowSuccessModal] = useState(false)
  const [thisOffer, setThisOffer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isApplied, setIsApplied] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [messageType, SetMessageType] = useState('')
  const [CancelationMessage, setCancelationMessage] = useState('')

  const { id } = useParams()
  const { type } = useSelector((state) => state.auth)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/offers/${id}`)
      .then(res => {
        console.log(res.data)
        setThisOffer(res.data.offer)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
    //if the student is authenticated we check if he is already applied to this offer 

    if (isAuthenticated == true && type == 0) {
      authAxios.get(`offers/isApplied/${id}`)
        .then((res) => {
          console.log(res.data.isApplied)
          setIsApplied(res.data.isApplied)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }, [showMessage])


  const handleCancelApplication = () => {

    authAxios.delete(`applications/destroy/${id}`)
      .then(res => {
        if (res.status === 200) {
          setCancelationMessage('application canceled')
          SetMessageType('success')
          setShowMessage(true)

          setTimeout(() => {
            setShowMessage(false)
          }, 1300);
        }
      })
      .catch(err => {
        if (err.response.status === 403) {
          setCancelationMessage('application already accepted')
          SetMessageType('error')
          setShowMessage(true)

          setTimeout(() => {
            setShowMessage(false)
          }, 1300);

        } else {
          console.log(err)
        }
      })

  }


  return (
    <>
      {!loading && (
        <main className="bg-gray-50">
          <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />

          <div className="container mx-auto sm:py-10">
            <div className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-100 h-fit">
              <div className="flex gap-12 pt-6 pb-2 px-10  border-b border-gray-20 border-solid ">
                <div
                  className="w-24 md:w-1/6 lg:w-36 h-20 bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${thisOffer.supervisor.company.logo_link})` }}
                ></div>
                <div className="flex flex-col justify-evenly">
                  <h1 className="font-body text-text text-xl font-bold">
                    {thisOffer.supervisor.company.name}
                  </h1>
                  <p className="font-body text-lightText flex gap-2 text-sm">
                    {thisOffer.supervisor.company.address}
                  </p>
                </div>
              </div>
              <div className=" bodycont flex flex-col px-11 py-10">
                <div className="titleandbuttons flex items-center justify-between">
                  <h1 className="font-body text-text text-2xl font-bold">
                    {thisOffer.title}
                  </h1>
                  <div className="buttons flex items-center gap-8">

                    {
                      (isAuthenticated == true && type == 0 && isApplied != null) && (

                        (isApplied == false) ?
                          <button
                            className="primary-btn w-44 hidden sm:block"
                            onClick={() => setshowApplyModal(true)}
                          >
                            Apply
                          </button>
                          :
                          <button
                            className="primary-btn  hidden sm:block"
                            onClick={handleCancelApplication}
                          >
                            Cancel Application
                          </button>
                      )
                    }
                    {
                      isAuthenticated == false && (
                        <button
                          className="primary-btn w-44 hidden sm:block"
                          onClick={() => navigate('/login')}
                        >
                          Apply
                        </button>
                      )
                    }

                  </div>
                </div>
                <div className="infos flex gap-16 pb-10 pl-3">
                  <div className="flex flex-col items-start gap-3 mt-4">
                    <p className="font-body text-lightText flex gap-2 text-sm">
                      <Calendar color="#9D9CAC" size={18} />
                      {`Start date : ${thisOffer.start_date}`}
                    </p>
                    <p className="font-body text-lightText flex gap-2 text-sm">
                      <Calendar color="#9D9CAC" size={18} />
                      {`End date : ${thisOffer.end_date}`}

                    </p>
                    <p className="font-body text-lightText flex gap-2 text-sm">
                      <Timer1 color="#9D9CAC" size={18} />
                      {`Duration : ${thisOffer.duration} days`}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-3 mt-4">
                    <p className="font-body text-lightText flex gap-2 text-sm">
                      <Briefcase color="#9D9CAC" size={18} />
                      {`Available spots : ${thisOffer.available_spots}`}
                    </p>
                    {thisOffer.level && <p className="font-body text-lightText flex gap-2 text-sm">
                      <Book1 color="#9D9CAC" size={18} />
                      {`Required level : ${thisOffer.level}`}
                    </p>}
                  </div>
                </div>
                <h2 className="font-body text-text text-xl font-bold ">
                  Internship description
                </h2>
                <p className="font-body text-grayText my-8">
                  {thisOffer.description}
                </p>
                <div className="sm:hidden flex justify-center items-center bg-white sticky bottom-0 py-5 sm:static">

                  {
                    (isAuthenticated == true && type == 0 && isApplied != null) && (

                      (isApplied == false) ?
                        <button
                          className="primary-btn w-44 "
                          onClick={() => setshowApplyModal(true)}
                        >
                          Apply
                        </button>
                        :
                        <button
                          className="primary-btn "
                          onClick={handleCancelApplication}
                        >
                          Cancel Application
                        </button>
                    )
                  }
                  {
                    isAuthenticated == false && (
                      <button
                        className="primary-btn w-44"
                        onClick={() => navigate('/login')}
                      >
                        Apply
                      </button>
                    )
                  }

                </div>
              </div>
            </div>
          </div>
          {showApplyModal && (
            <ApplyModal
              offer_id={thisOffer.id}
              company={thisOffer.supervisor.company.name}
              setshowApplyModal={setshowApplyModal}
              setshowSuccessModal={setshowSuccessModal}
            />
          )}
          {showSuccessModal && (
            <SuccessModal setshowSuccessModal={setshowSuccessModal} />
          )}

          {showMessage == true && (
            <Message type={messageType} text={CancelationMessage} />
          )}

        </main>)}


    </>
  )
}

export default OfferDetails
