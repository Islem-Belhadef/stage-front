import { useEffect, useState } from "react"
import authAxios from "../api/axios"
import axios from "axios"
//components and assets 
import { Calendar } from "iconsax-react"
import EvaluationForm from "./EvaluationForm"
import CertificateModal from "./CertificateModal"
import Message from "./message"

const SupervisorInternship = ({ internship }) => {

    const [showPresenceForm, setShowPresenceForm] = useState(false)
    const [showEvaluationForm, setShowEvaluationForm] = useState(false)
    const [showCertificate, setShowCertificate] = useState(false)
    const [isCertified, setIsCertified] = useState(null)
    const [isEvaluated, setIsEvaluated] = useState(null)
    const [presence, setPresence] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [error, setError] = useState('')


    // check if the internship has already a certification to change certificate button
    useEffect(() => {
        axios.all([
            authAxios.get(`internships/isCertified/${internship.id}`),
            authAxios.get(`internships/isEvaluated/${internship.id}`),
        ]).then(
            axios.spread((...allRes) => {
                if (allRes[0].status === 200 && allRes[0].status === 200) {
                    console.log(allRes[0].data.isCertified)
                    console.log(allRes[1].data.isEvaluated)
                    setIsCertified(allRes[0].data.isCertified)
                    setIsEvaluated(allRes[1].data.isEvaluated)
                }
            })
        ).catch(err => {
            console.log(err)
        })
    }, [])


    const handleMarkPresence = (e) => {
        e.preventDefault()

        authAxios.post('internships/presence',
            {
                internship_id: internship.id,
                presence: presence == true ? 1 : 0,
                date: new Date()
            })
            .then((res) => {
                if (res.status === 201) {
                    setShowMessage(true)
                    setTimeout(() => {
                        setShowMessage(false)
                        setShowPresenceForm(false)
                    }, 1000);

                } else if (res.status === 200) {
                    setError("*today's presence already marked")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="flex flex-col gap-3 mb-7">
            <div className="bg-white rounded-xl flex-col shadow-sm px-4 py-5 sm:px-10 sm:py-6">
                <div className="flex items-center justify-between mb-1">
                    <h1 className="text-text text-base sm:text-xl font-body font-bold my-1">
                        {internship.title}
                    </h1>

                    {showPresenceForm == false && (
                        <button className=" text-text text-sm font-medium hover:bg-gray-200 hover:bg-opacity-70 px-2 py-2 rounded-md cursor-pointer"
                            onClick={() => { setShowPresenceForm(true) }}
                        >
                            mark presence
                        </button>
                    )
                    }
                </div>

                <div className="mb-10 sm:mb-14">
                    <p className=" text-primary font-medium mr-5">
                        1 intern
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <p className="hidden sm:block text-grayText text-sm font-medium">
                        started
                    </p>
                    <Calendar size={18} color="#616373" className="sm:hidden " />
                    <p className="sm:text-text text-grayText text-sm sm:text-base font-medium">
                        {internship.start_date}
                    </p>
                </div>
            </div>
            {
                showPresenceForm == false &&
                (
                    <div className=" flex items-center justify-between bg-white shadow-sm rounded-md w-[90%] lg:w-3/4 ml-auto px-3 sm:px-10 py-3">
                        <p className="text-text text-base font-medium">{internship.student.user.first_name} {internship.student.user.last_name}</p>
                        {(isCertified != null && isEvaluated != null) && (
                            <div className="flex gap-2 items-center">
                                <button
                                    className={`${isEvaluated == false && 'hover:bg-gray-200 hover:bg-opacity-70 cursor-pointer'} flex text-text text-sm font-medium px-2 py-2 rounded-md`}
                                    onClick={() => setShowEvaluationForm(true)}
                                    disabled={isEvaluated}
                                >
                                    {isEvaluated == true ?
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="m7.75 12 2.83 2.83 5.67-5.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                            evaluated
                                        </>
                                        :
                                        'evaluate'}
                                </button>
                                <button
                                    className={`${isCertified == false && 'hover:bg-gray-200 hover:bg-opacity-70 cursor-pointer'} flex text-text text-sm font-medium px-2 py-2 rounded-md `}
                                    onClick={() => { setShowCertificate(true) }}
                                    disabled={isCertified}
                                >
                                    {isCertified == true ?
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="m7.75 12 2.83 2.83 5.67-5.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                            certified
                                        </>
                                        :
                                        'certificate'}
                                </button>
                            </div>
                        )}
                    </div>

                )
            }
            {

                (showPresenceForm == true) &&
                (
                    <div className="bg-white shadow-sm rounded-md w-full sm:w-[90%] lg:w-3/4 ml-auto px-3 sm:px-10 py-3">
                        <div className="flex items-center justify-between">
                            <p className="text-text text-sm md:text-base font-medium">
                                <span className="text-grayText font-normal text-sm md:text-base mr-2">for</span>
                                {`${new Date().getDate()} ${new Date().toLocaleString('en-US', { month: 'short' })} ${new Date().getFullYear()}`}
                            </p>
                            <p className="text-grayText text-sm md:text-base">presence</p>
                        </div>
                        <form>
                            <div className="flex justify-between items-center mt-5 mb-7 ml-2 md:ml-6">
                                <label className="text-text font-medium flex-1" htmlFor="presence">{internship.student.user.first_name} {internship.student.user.last_name}</label>
                                <input type="checkbox" name="presence" id="presence"
                                    onChange={(e) => setPresence(e.target.checked)}
                                />
                            </div>
                            {/* error message for presence that is already marked */}
                            <p className="text-xs md:text-base text-red-500">{error}</p>
                        </form>
                        <div className="flex gap-4 justify-end">
                            <button
                                className="text-primary text-sm md:text-base font-medium hover:bg-primary hover:bg-opacity-10 px-2 py-1 rounded-md cursor-pointer"
                                onClick={() => {setShowPresenceForm(false);setError('')}}

                            >
                                Cancel
                            </button>
                            <button
                                className="text-primary text-sm md:text-base font-medium hover:bg-primary hover:bg-opacity-10 px-2 py-1 rounded-md cursor-pointer"
                                onClick={handleMarkPresence}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                )
            }

            {
                showEvaluationForm == true && (
                    <EvaluationForm internship={internship} setShowEvaluationForm={setShowEvaluationForm} />
                )
            }
            {
                showCertificate == true && (
                    <CertificateModal internship={internship} setShowCertificate={setShowCertificate} />
                )
            }
            {showMessage == true && (
                <Message type={'success'} text={'presence saved'} />
            )}
        </div>

    )

}

export default SupervisorInternship