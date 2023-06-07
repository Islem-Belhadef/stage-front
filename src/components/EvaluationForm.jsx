import { useState } from "react"
import authAxios from "../api/axios"
import { useNavigate } from "react-router-dom"
// components and assets 
import Message from "./message"


const EvaluationForm = ({ internship, setShowEvaluationForm }) => {

    const [showMessage, setShowMessage] = useState(false)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        discipline: null,
        aptitude: null,
        initiative: null,
        innovation: null,
        acquired_knowledge: null,
        global_appreciation: 'very good intern',
        internship_id: internship.id
    })


    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleEvaluate = (e) => {
        e.preventDefault()

        authAxios.post('internships/evaluate', formData)
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
            <div className=" bg-white h-fit rounded-xl w-full sm:w-[75%] md:w-[45rem]">
                <div className="flex justify-between border-b border-b-gray-200 pl-6 md:pl-11 pr-5 py-5">
                    <h1 className="font-header font-semibold text-lg md:text-xl text-text">
                        Evaluate {internship.student.user.first_name} {internship.student.user.last_name}
                    </h1>
                    <button className=" bg-gray-50 text-lg flex items-end"
                        onClick={() => setShowEvaluationForm(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18">
                            </line><line x1="6" y1="6" x2="18" y2="18">
                            </line>
                        </svg>
                    </button>
                </div>
                <form
                    className="px-4 md:px-16 pt-2 pb-4"

                >
                    <div className="flex items-center justify-between w-full px-2 py-3 border-b border-gray-200">
                        <label className="text-text font-medium  md:ml-6" htmlFor="discipline">General discipline</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="discipline"
                                className="bg-[#EAEAEA] w-24 h-9 rounded-md md:mr-6 px-5 py-3 focus:outline-none text-text text-center"
                                onChange={handleInputChange}
                            />
                            <span className="text-lightText absolute top-[6px] right-4 md:right-9">/4</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full px-2 py-3 border-b border-gray-200">
                        <label className="text-text font-medium  md:ml-6" htmlFor="aptitude">Work skills</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="aptitude"
                                className="bg-[#EAEAEA] w-24 h-9 rounded-md md:mr-6 px-5 py-3 focus:outline-none text-text text-center"
                                onChange={handleInputChange}

                            />
                            <span className="text-lightText absolute top-[6px] right-4 md:right-9">/4</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full px-2 py-3 border-b border-gray-200">
                        <label className="text-text font-medium  md:ml-6" htmlFor="initiative">Initiative</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="initiative"
                                className="bg-[#EAEAEA] w-24 h-9 rounded-md md:mr-6 px-5 py-3 focus:outline-none text-text text-center"
                                onChange={handleInputChange}

                            />
                            <span className="text-lightText absolute top-[6px] right-4 md:right-9">/4</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full px-2 py-3 border-b border-gray-200">
                        <label className="text-text font-medium  md:ml-6" htmlFor="innovation">Innovation</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="innovation"
                                className="bg-[#EAEAEA] w-24 h-9 rounded-md md:mr-6 px-5 py-3 focus:outline-none text-text text-center"
                                onChange={handleInputChange}

                            />
                            <span className="text-lightText absolute top-[6px] right-4 md:right-9">/4</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full px-2 py-3 border-b border-gray-200">
                        <label className="text-text font-medium  md:ml-6" htmlFor="acquired_knowledge">Acquired_knowledge</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="acquired_knowledge"
                                className="bg-[#EAEAEA] w-24 h-9 rounded-md md:mr-6 px-5 py-3 focus:outline-none text-text text-center"
                                onChange={handleInputChange}

                            />
                            <span className="text-lightText absolute top-[6px] right-4 md:right-9">/4</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full px-2 py-3">
                        <p className="text-text text-lg font-medium md:ml-6">Total Mark</p>
                        <p>{Number(formData.acquired_knowledge) + Number(formData.aptitude) + Number(formData.discipline) + Number(formData.initiative) + Number(formData.innovation)}</p>

                    </div>

                </form>
                <p className="text-grayText text-xs md:text-sm px-6 md:px-11">the intern will be able to download <br className="sm:hidden"></br>this form as a pdf</p>
                <div className="flex justify-end pl-6 md:pl-11 pr-5 pb-3">
                    <button
                        className="text-primary text-sm md:text-base font-medium hover:bg-primary hover:bg-opacity-10 px-2 py-1 rounded-md cursor-pointer"

                        onClick={handleEvaluate}
                    >
                        Save
                    </button>
                </div>

            </div>
            {showMessage == true && (
                <Message type={'success'} text={'evaluation saved'} />
            )}
        </div>
    )

}
export default EvaluationForm