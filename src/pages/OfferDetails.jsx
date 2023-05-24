// react and router 
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"
// Components
import Header from "../components/Header"
import { Sms, Timer1, Calendar, Briefcase, Book1 } from "iconsax-react"
import ApplyModal from "../components/applyModal"
import SuccessModal from "../components/SuccessModal"
import offers from "../offersData"



const OfferDetails = () => {
  const [showApplyModal, setshowApplyModal] = useState(false)
  const [showSuccessModal, setshowSuccessModal] = useState(false)
  const [thisOffer, setThisOffer] = useState(null)
  const [loading, setLoading] = useState(true)
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
  }, [])

  console.log(thisOffer)
  //const thisOffer = offers.find((offer) => offer.id == id)

  return (
    <>
      {!loading && (<main className="bg-gray-50">
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
                  <Sms
                    color="#7CDF64"
                    size={38}
                    className="cursor-pointer hover:scale-110 transition"
                  />
                  {(type == null || type == 0) && (
                    <button
                      className="primary-btn w-44 hidden sm:block"
                      onClick={() => isAuthenticated == true ? setshowApplyModal(true) : navigate('/login')}
                    >
                      Apply
                    </button>
                  )}

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
                {(type == null || type == 0) && (
                  <button
                    type="submit"
                    className="primary-btn w-44"
                    onClick={() => setshowApplyModal(true)}
                  >
                    Apply
                  </button>

                )}

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

      </main>)}


    </>
  )
}

export default OfferDetails
