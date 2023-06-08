import authAxios from "../api/axios"
import { useState } from "react"
import Message from "./message"
import { useNavigate } from "react-router-dom"


const EditAccount = ({ account, setShowEditAccount }) => {

    const [showMessage, setShowMessage] = useState(false)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        role: account.role,

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

    const handleEditAccount = (e) => {
        e.preventDefault()
        authAxios.put(`accounts/update/${account.id}}`, formData)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    console.log('account edited')
                    setShowMessage(true)
                    setTimeout(() => {
                        setShowMessage(false)
                        navigate(0)
                    }, 1500);

                }
            })
            .catch(err => {
                console.log('edit failed',err)
            })
    }


    return (
        <div className="flex justify-center items-center fixed bg-slate-800 backdrop-blur-sm bg-opacity-70 top-0 bottom-0 right-0 left-0">
            <div className=" bg-white h-fit rounded-xl w-full sm:w-[75%] md:w-[45rem] px-5 sm:px-11 py-5">

                <h1 className="font-header font-semibold text-lg text-text">
                    edit Account
                </h1>

                <form className="mt-8"
                >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-body">

                        <label htmlFor="first_name" className="label text-sm mb-4 col-span-2 sm:col-auto">
                            First name
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className="input w-10 mt-2"
                                minLength={3}
                                maxLength={50}
                                defaultValue={account.first_name}
                                onChange={handleOnChange}

                            />
                        </label>
                        <label htmlFor="last_name" className="label text-sm mb-4 col-span-2 sm:col-auto">
                            Last name
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="input mt-2"
                                minLength={8}
                                maxLength={50}
                                defaultValue={account.last_name}
                                onChange={handleOnChange}

                            />
                        </label>
                        <label htmlFor="email" className="label text-sm mb-4 col-span-2">
                            Internship email
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="input mt-2"
                                minLength={10}
                                maxLength={200}
                                defaultValue={account.email}
                                onChange={handleOnChange}
                            />
                        </label>



                    </div>
                </form>
                <div className="flex gap-6 w-full items-center justify-center mt-8">
                    <button className="secondary-btn w-1/2 sm:w-fit !px-3 sm:!px-10 "
                        onClick={() => setShowEditAccount(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn w-1/2 sm:w-fit !px-3 sm:!px-10 "
                        type="submit"
                        onClick={handleEditAccount}
                    >
                        Confirm
                    </button>

                </div>

            </div>
            {showMessage == true && (
                <Message type={'success'} text={'account info updated'} />
            )}
        </div>
    )

}

export default EditAccount