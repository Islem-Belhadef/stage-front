import { useState } from "react"
import authAxios from "../api/axios"
import { useNavigate } from "react-router-dom"
//components and assets
import Message from "./message"


const CertificateModal = ({ internship, setShowCertificate }) => {

    const navigate = useNavigate()
    const [showMessage, setShowMessage] = useState(false)

    const handleIssueCertificate = (e) => {
        e.preventDefault()

        authAxios.post('internships/certificate', { internship_id: internship.id })
            .then((res) => {
                if (res.status === 201) {
                    console.log('created')
                    setShowMessage(true)
                    setTimeout(() => {
                        setShowMessage(false)
                        navigate(0)
                    }, 1300);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="flex justify-center items-center fixed bg-slate-800 backdrop-blur-sm bg-opacity-70 top-0 bottom-0 right-0 left-0">
            <div className=" bg-white h-fit rounded-xl w-full sm:w-[75%] md:w-[48rem] p-4">
                <div className=" flex justify-end pb-2">
                    <button className=" bg-gray-50 text-lg"
                        onClick={() => setShowCertificate(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18">
                            </line><line x1="6" y1="6" x2="18" y2="18">
                            </line>
                        </svg>
                    </button>
                </div>
                <div className="pl-6 pr-6 py-5 border border-text" >
                    <p className="text-sm text-text text-center ">
                        République Algerienne Démocratique et Populaire
                    </p>
                    <h2 className=" text-text font-medium text-center mt-2">
                        ATTESTATION DE STAGE
                    </h2>
                    <p className="text-sm text-text mt-3 leading-6 md:leading-7">
                        Je, soussigné(e) <span className="font-medium mx-1">{internship.supervisor.user.first_name} {internship.supervisor.user.first_name}</span> responsable de stage de <span className="font-medium mx-1">{internship.title}</span><br />
                        atteste que l'étudiant(e) <span className="font-medium mx-1"> {internship.student.user.first_name} {internship.student.user.first_name} </span> né(e) le <span className="font-medium mx-1">{internship.student.date_of_birth} </span> à <span className="font-medium mx-1">{internship.student.place_of_birth}</span>
                        inscrit(e) à L’Université Abdel Hamid Mehri Constantine 2,<br />
                        a effectué un stage de formation dans la filière <span className="font-medium mx-1">{internship.student.department.name}</span>specialité<span className="font-medium mx-1">{internship.student.speciality.name}</span>
                        à <span className="font-medium mx-1">{internship.supervisor.company.name}</span> , <span className="font-medium mx-1">{internship.supervisor.company.address}</span> <br />
                        Durant la période du <span className="font-medium mx-1">{internship.start_date}</span> au <span className="font-medium mx-1">{internship.end_date}</span>.<br />
                    </p>
                    {/* <p className="text-sm text-text text-end mt-2">fait à Constantine le {internship.created}</p> */}
                </div>
                <p className="text-grayText text-xs">the intern will be able to download this certificate as a pdf</p>

                <div className="flex justify-end pt-3">
                    <button className="text-primary text-sm md:text-base font-medium hover:bg-primary hover:bg-opacity-10 px-2 py-1 rounded-md cursor-pointer"
                        onClick={handleIssueCertificate}
                    >
                        issue certificate
                    </button>
                </div>
            </div>
            {showMessage == true && (
                <Message type={'success'} text={'Cerificate issued'} />
            )}
        </div>
    )

}

export default CertificateModal