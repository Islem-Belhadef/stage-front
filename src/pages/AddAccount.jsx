//react and router 
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// Libraries
import { motion, AnimatePresence } from "framer-motion"
// Components
import Header from "../components/Header"

const AddAccount = () => {
    
    const navigate = useNavigate()
    const [type, setType] = useState("student")

    return (
        <div className="bg-gray-50">
            <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
            <div className="container mx-auto flex flex-col gap-8 py-10">
                <div className="bg-white rounded-xl shadow-md shadow-gray-200 py-8 px-6 sm:py-12 sm:px-24 ">
                    <h1 className="font-header text-2xl md:text-3xl text-text font-semibold mb-2">
                        New account
                    </h1>
                    <p className="font-body text-lightText">
                        Please fill in these information to proceed
                    </p>
                    <form className="mt-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-body"
                        >


                            <div className="col-span-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-20 mb-6 ">
                                <p className=" text-grayText font-medium font-body">Account for</p>
                                <div className="flex items-center gap-3 sm:gap-6 col-span-2">
                                    <input className="peer/student hidden" type="radio" name="type" id="student"
                                        checked={type == "student"}
                                        onChange={(e) => { setType("student") }}
                                    />
                                    <label className="peer-checked/student:text-primary peer-checked/student:bg-primary peer-checked/student:bg-opacity-10 peer-checked/student:border-primary border-lightText text-lightText cursor-pointer border font-medium rounded-md p-2" htmlFor="student">
                                        student
                                    </label>

                                    <input className="peer/supervisor hidden" type="radio" name="type" id="supervisor"
                                        checked={type == "supervisor"}
                                        onChange={(e) => { setType("supervisor") }}

                                    />
                                    <label className="peer-checked/supervisor:text-primary peer-checked/supervisor:bg-primary peer-checked/supervisor:bg-opacity-10 peer-checked/supervisor:border-primary border-lightText text-lightText cursor-pointer border font-medium rounded-md p-2" htmlFor="supervisor">
                                        supervisor
                                    </label>

                                    <input className="peer/head-of-dep hidden" type="radio" name="type" id="head-of-dep"
                                        checked={type == "hod"}
                                        onChange={(e) => { setType("hod") }}

                                    />
                                    <label className="peer-checked/head-of-dep:text-primary peer-checked/head-of-dep:bg-primary peer-checked/head-of-dep:bg-opacity-10 peer-checked/head-of-dep:border-primary border-lightText text-lightText cursor-pointer border font-medium rounded-md p-2" htmlFor="head-of-dep">
                                        head of dep
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h1 className="font-header text-xl text-text font-semibold mb-4 pt-8 border-t border-gray-200">personal info</h1>
                            </div>

                            <label htmlFor="first-name" className="label mb-4 col-span-2 sm:col-auto">
                                First name
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="input w-10 mt-2"
                                    required
                                />
                            </label>
                            <label htmlFor="last-name" className="label mb-4 col-span-2 sm:col-auto">
                                Last Name
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="input mt-2"
                                    required
                                />
                            </label>
                            <label htmlFor="email" className="label mb-4 col-span-2 sm:col-auto">
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input mt-2"
                                    required
                                />
                            </label>
                            {type == "student" && (
                                <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                >
                                <label htmlFor="birthdate" className="label mb-4">
                                    Date of birth
                                    <input
                                        type="date"
                                        name="birthdate"
                                        id="birthdate"
                                        className="input mt-2"
                                    />
                                </label>
                                </motion.div>

                            )}
                            <div className="col-span-2">
                                <h1 className="font-header text-xl text-text font-semibold mb-4 pt-8 border-t border-gray-200">professional info</h1>
                            </div>

                            {type == "student" && (


                                <motion.div
                                    className="grid grid-cols-2 gap-x-8 gap-y-2 col-span-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <label htmlFor="university" className="label mb-4 col-span-2">
                                        university
                                        <input
                                            type="text"
                                            name="university"
                                            id="university"
                                            className="input w-10 mt-2"
                                            value={"university of constantine 2"}
                                            disabled
                                        />


                                    </label>

                                    <label htmlFor="department" className="label mb-4 col-span-2 sm:col-auto">
                                        department
                                        <input
                                            type="text"
                                            name="department"
                                            className="input w-10 mt-2"
                                            id="department"
                                        />

                                    </label>

                                    <label htmlFor="speciality" className="label mb-4 col-span-2 sm:col-auto">
                                        Speciality
                                        <select
                                            name="speciality"
                                            id="speciality"
                                            className="input mt-2 bg-transparent"
                                        >
                                            <option value="TI">TI</option>
                                            <option value="GL">GL</option>
                                            <option value="SI">SI</option>
                                            <option value="SCI">SCI</option>
                                        </select>
                                    </label>



                                </motion.div>
                            )}
                            {type == "supervisor" && (
                                <motion.div
                                className="grid grid-cols-2 gap-x-8 gap-y-2 col-span-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >

                                    <label htmlFor="company" className="label mb-4 col-span-2 sm:col-auto">
                                        company name
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            className="input w-10 mt-2"
                                            required
                                        />
                                    </label>
                                    <label htmlFor="company-address" className="label mb-4 col-span-2 sm:col-auto">
                                        address
                                        <input
                                            type="text"
                                            name="company-address"
                                            id="company-address"
                                            className="input w-10 mt-2"
                                            required
                                        />
                                    </label>
                                    <label htmlFor="company-logo" className="label mb-4 col-span-2 sm:col-auto">
                                        logo link
                                        <input
                                            type="text"
                                            name="company-logo"
                                            id="company-logo"
                                            className="input w-10 mt-2"
                                            required
                                        />
                                    </label>
                                    <div></div>
                                    <label htmlFor="email" className="label col-span-2">
                                        company description
                                        <textarea
                                            type="text"
                                            name="company-description"
                                            id="company-description"
                                            className="input mt-2"
                                            maxLength={2000}
                                        />
                                    </label>


                                </motion.div>
                            )}
                            {type == "hod" && (
                                <motion.div

                                className="grid grid-cols-2 gap-x-8 gap-y-2 col-span-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >

                                    <label htmlFor="university" className="label mb-4 col-span-2 sm:col-auto">
                                        university
                                        <input
                                            type="text"
                                            name="university"
                                            id="university"
                                            className="input w-10 mt-2"
                                            value={"university of constantine 2"}
                                            disabled
                                        />


                                    </label>
                                    <label htmlFor="faculty" className="label mb-4 col-span-2 sm:col-auto">
                                        faculty
                                        <input
                                            type="text"
                                            name="faculty"
                                            className="input w-10 mt-2"
                                            id="faculty"
                                        />

                                    </label>
                                    <label htmlFor="department" className="label mb-4 col-span-2 sm:col-auto">
                                        department
                                        <input
                                            type="text"
                                            name="department"
                                            className="input w-10 mt-2"
                                            id="department"
                                        />

                                    </label>



                                </motion.div>
                            )}


                        </div>
                        <div className="flex gap-4 sm:gap-8 w-full items-center justify-center mt-8">
                            <button type="reset" className="secondary-btn px-16"
                            onClick={()=> navigate(-1)}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="primary-btn px-16">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddAccount