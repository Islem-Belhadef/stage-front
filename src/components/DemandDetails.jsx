import { Link, useNavigate } from "react-router-dom"
import Avatar from "./Avatar"
import { Document, Link1 } from "iconsax-react"
import authAxios from "../api/axios"
import Message from "./message"
import { useState } from "react"


const DemandDetails = ({ forUser, setShowDetails, demand }) => {

    const [showMessage, SetShowMessage] = useState(false)
    const [messageText, SetMessageText] = useState(false)
    const [showMotive, setShowMotive] = useState(false)
    const [processing , setProcessing]= useState(false)
    const [showAgreement , setShowAgreement]= useState(false)
    const [rejectionMotive, setRejectionMotive] = useState('')
    const navigate = useNavigate()

    const approve_status = forUser == 'hod' ? 1 : 3 // for hod approve status is 1 and for supervisor is 3
    const reject_status = forUser == 'hod' ? 2 : 4 // for hod reject status is 2 and for supervisor is 4


    const approveDemand = () => {
        setProcessing(true)
        authAxios.put(`demands/update/${demand.id}`, { status: approve_status })
            .then(res => {
                if (res.status == 200 || res.status ==201) {
                    setProcessing(false)
                    SetMessageText('demand approved')
                    SetShowMessage(true)
                    setTimeout(() => {
                        SetShowMessage(false)
                        navigate(0)
                    }, 1300);

                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(rejectionMotive)

    const rejectDemand = () => {
        authAxios.put(`demands/update/${demand.id}`, { status: reject_status, rejection_motive: rejectionMotive })
            .then(res => {
                if (res.status == 200) {
                    SetMessageText('demand rejected')
                    SetShowMessage(true)
                    setTimeout(() => {
                        SetShowMessage(false)
                        navigate(0)
                    }, 1300);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div className="flex justify-center items-center fixed bg-slate-800 backdrop-blur-sm bg-opacity-70 top-0 bottom-0 right-0 left-0">
            <div className=" bg-white h-fit rounded-xl sm:w-[75%] md:w-[45rem]">
                <div className="flex justify-between border-b border-b-gray-200 pl-6 md:pl-11 pr-5 py-5">
                    <h1 className="font-header font-semibold md:text-xl text-text">
                        {demand.title} internship demand
                    </h1>
                    <button className=" bg-gray-50 text-lg flex items-end"
                        onClick={() => setShowDetails(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18">
                            </line><line x1="6" y1="6" x2="18" y2="18">
                            </line>
                        </svg>
                    </button>
                </div>
                <div className="px-6 md:px-11 py-5">

                    <div className="flex flex-col gap-5  md:flex-row justify-between md:items-center">
                        <div className="flex gap-4 items-center">
                            <Avatar firstName={demand.student.user.first_name} lastName={demand.student.user.last_name} />
                            <div>
                                <h1 className="text-lg text-text font-medium">
                                    {demand.student.user.first_name} {demand.student.user.last_name}
                                </h1>
                                <p className=" text-sm text-primary">
                                    {demand.student.user.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {demand.student.cv &&
                                <Link className="flex gap-1 items-center px-2 font-medium text-grayText bg-lightText bg-opacity-30 hover:bg-opacity-60 rounded-md h-fit"
                                    to={demand.student.cv} target="_blank"
                                >
                                    <Document size={18} />
                                    CV
                                </Link>

                            }
                            {demand.student.github &&
                                <Link className="flex gap-1 items-center px-2 font-medium text-grayText bg-lightText bg-opacity-30 hover:bg-opacity-60 rounded-md h-fit"
                                    to={demand.student.github} target="_blank"
                                >
                                    <Link1 className=' -rotate-45' size={18} />
                                    Github
                                </Link>

                            }
                        </div>
                    </div>
                    <div className="grid  grid-cols-3 gap-y-2 gap-x-2 mt-8 ml-4">
                        <p className="text-grayText">Date of birth</p>
                        <p className=" font-semibold col-span-2">
                            {demand.student.date_of_birth}
                        </p>
                        <p className="text-grayText">Speciality</p>
                        <p className=" font-semibold col-span-2">
                            {demand.student.speciality.name}

                        </p>
                        <p className="text-grayText">level</p>
                        <p className=" font-semibold col-span-2">
                            {demand.student.level == 'l3' ? 'license 3' : 'master 2'}

                        </p>
                        <p className="text-grayText">University</p>
                        <p className=" font-semibold col-span-2">
                            AbdelHamid mehri constantine 2
                        </p>

                    </div>

                    <h1 className="mt-6 font-semibold text-text text-lg">internship info</h1>
                    <div className="grid  grid-cols-3 gap-y-2 gap-x-2 ml-4 mt-2">
                        {forUser == 'hod' && (
                            <>
                                <p className="text-grayText">Host company</p>
                                <p className=" font-semibold col-span-2">
                                    {demand.company}
                                </p>

                            </>

                        )}
                        <p className="text-grayText">Duration</p>
                        <p className=" font-semibold col-span-2">
                            {demand.duration} days
                        </p>
                        <p className="text-grayText">Start Date</p>
                        <p className=" font-semibold col-span-2">
                            {demand.start_date}

                        </p>
                        <p className="text-grayText">End Date</p>
                        <p className=" font-semibold col-span-2">
                            {demand.end_date}

                        </p>

                    </div>
                </div>

                {((forUser == 'hod' && demand.status == 0) || (forUser == 'supervisor' && demand.status == 1)) &&
                    (
                        <div className="border-t border-t-gray-200 px-6 md:px-11 py-5">

                            {showAgreement==false && <div className="text-grayText bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md text-sm font-medium font-body w-fit cursor-pointer"
                                onClick={() => setShowMotive(!showMotive)}
                            >
                                {showMotive == true ? 'no rejection motive' : 'add a rejection motive'}

                            </div>}
                            {
                                showAgreement==true && 
                                    
                                "in case superviosr acccount dont exist it will be created"
                            }
                            {showMotive == true && (
                                <textarea
                                    type="text"
                                    placeholder="what is wrong with the demand?"
                                    name="rejection_motive"
                                    id="rejection_motive"
                                    className="input mt-2"
                                    onChange={(e) => setRejectionMotive(e.target.value)}
                                    maxLength={1000}
                                />
                            )}

                            


                            <div className="flex gap-6 justify-center mt-4">
                                <button className="secondary-btn w-1/2 sm:w-fit !px-3 sm:!px-10 "
                                    onClick={rejectDemand}
                                >reject</button>

                                <button className="primary-btn w-1/2 sm:w-fit !px-3 sm:!px-10 "
                                    onClick={()=> {
                                        if(forUser=='hod'&&showAgreement==false){
                                            setShowAgreement(true)
                                        }else if(forUser=='hod'&&showAgreement==true){
                                            approveDemand();
                                        }else{
                                            approveDemand();

                                        }
                                    }}
                                    disabled={processing}
                                >
                                    {processing == true ? 'processing' :'approve'}
                                </button>
                            </div>
                        </div>
                    )}

            </div>
            {showMessage == true && (
                <Message type='success' text={messageText} />
            )}
        </div>
    )
}

export default DemandDetails