import authAxios from "../api/axios"
import { useState } from "react"
import Message from "./message"
import { useNavigate } from "react-router-dom"


const EditOffer = ({ offer, setShowEditOffer }) => {

    const [showMessage, setShowMessage] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        level: '',
        available_spots: '',
        start_date: '',
        end_date: '',
    })
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleEditOffer = (e) => {
        e.preventDefault

        authAxios.put(`offers/edit/${offer.id}`, formData)
            .then((res) => {
                if (res.status === 200) {
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
            <div className=" bg-white h-fit rounded-xl w-full sm:w-[75%] md:w-[45rem] px-5 sm:px-11 py-5">

                <h1 className="font-header font-semibold text-lg text-text">
                    edit offer
                </h1>

                <form className="mt-8"
                >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-body">
                        <label htmlFor="title" className="label text-sm mb-4 col-span-2">
                            Internship title
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="input mt-2"
                                minLength={10}
                                maxLength={200}
                                defaultValue={offer.title}
                                onChange={handleOnChange}
                            />
                        </label>
                        <label htmlFor="level" className="label text-sm mb-4">
                            Required level
                            <select
                                type="number"
                                name="level"
                                id="level"
                                className="input mt-2 bg-transparent"
                                defaultValue={offer.level}
                                onChange={handleOnChange}
                            >

                                <option value="l3">L-3</option>
                                <option value="m2">M-2</option>
                            </select>
                        </label>
                        <label htmlFor="available_spots" className="label text-sm mb-4">
                            Available spots
                            <input
                                type="number"
                                name="available_spots"
                                id="available_spots"
                                className="input mt-2"
                                defaultValue={offer.available_spots}
                                min={1}
                                max={100}
                                onChange={handleOnChange}
                            />
                        </label>
                        <label htmlFor="start_date" className="label text-sm mb-4">
                            Start date
                            <input
                                type="date"
                                name="start_date"
                                id="start_date"
                                className="input mt-2"
                                defaultValue={offer.start_date}
                                onChange={handleOnChange}
                            />
                        </label>
                        <label htmlFor="end_date" className="label text-sm mb-4">
                            End date
                            <input
                                type="date"
                                name="end_date"
                                id="end_date"
                                className="input mt-2"
                                defaultValue={offer.end_date}
                                onChange={handleOnChange}
                            />
                        </label>

                    </div>
                </form>
                <div className="flex gap-6 w-full items-center justify-center mt-8">
                    <button className="secondary-btn w-1/2 sm:w-fit !px-3 sm:!px-10 "
                        onClick={() => setShowEditOffer(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn w-1/2 sm:w-fit !px-3 sm:!px-10 "
                        type="submit"
                        onClick={handleEditOffer}
                    >
                        Confirm
                    </button>

                </div>

            </div>
            {showMessage == true && (
                <Message type={'success'} text={'offer info updated'} />
            )}
        </div>
    )

}

export default EditOffer