//react and router 
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// Libraries
import { motion } from "framer-motion"
// Components
import Header from "../components/Header"
import axios from "axios"
import authAxios from "../api/axios"
import Message from "../components/message"


const AddAccount = () => {

    const navigate = useNavigate()
    const [type, setType] = useState("student")
    const [showMessage, setShowMessage] = useState(false)
    const [departments, setDepartments] = useState([])
    const [specialities, setSpecialities] = useState([])
    const [companies, setCompanies] = useState([])

    const [newCompany, setNewCompany] = useState(true)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        role: 0,
        department_id: null,
        speciality_id: null,
        date_of_birth: '',
        semester: 1,
        level: "l3",
        academic_year: '2023/2022',
        company_id: "",
        name: "",
        company_email: "",
        address: "",
        logo_link: "",
        description: ""

    })


    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        axios.all([
            axios.get('http://127.0.0.1:8000/api/departments'),
            axios.get('http://127.0.0.1:8000/api/specialities'),
            axios.get('http://127.0.0.1:8000/api/companies')
        ]).then(
            axios.spread((...allRes) => {
                console.log(allRes[0].data.departments)
                console.log(allRes[1].data.specialities)
                console.log(allRes[2].data.companies)
                setDepartments(allRes[0].data.departments)
                setSpecialities(allRes[1].data.specialities)
                setCompanies(allRes[2].data.companies)
            })
        ).catch(err => {
            console.log(err)
        })
    }, [])

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault()

        authAxios.post('accounts/new', formData)
            .then((res) => {
                if (res.status === 201) {
                    console.log(res.data);
                    setShowMessage(true)
                   console.log('account created')
                   setTimeout(() => {
                    setShowMessage(false)
                    navigate(0)
                   }, 1300);
                }
            })
            .catch(err => {
                console.log('creation failed')
            })
    }

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
                    <form className="mt-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-body"
                        >


                            <div className="col-span-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-20 mb-6 ">
                                <p className=" text-grayText font-medium font-body">Account for</p>
                                <div className="flex items-center gap-3 sm:gap-6 col-span-2">
                                    <input className="peer/student hidden" type="radio" name="type" id="student"
                                        checked={type == "student"}
                                        onChange={(e) => { setType("student"); setFormData({ ...formData, role: 0 }) }}
                                    />
                                    <label className="peer-checked/student:text-primary peer-checked/student:bg-primary peer-checked/student:bg-opacity-10 peer-checked/student:border-primary border-lightText text-lightText cursor-pointer border font-medium rounded-md p-2 transition duration-150" htmlFor="student">
                                        student
                                    </label>

                                    <input className="peer/supervisor hidden" type="radio" name="type" id="supervisor"
                                        checked={type == "supervisor"}
                                        onChange={(e) => { setType("supervisor"); setFormData({ ...formData, role: 2 }) }}

                                    />
                                    <label className="peer-checked/supervisor:text-primary peer-checked/supervisor:bg-primary peer-checked/supervisor:bg-opacity-10 peer-checked/supervisor:border-primary border-lightText text-lightText cursor-pointer border font-medium rounded-md p-2 transition duration-150" htmlFor="supervisor">
                                        supervisor
                                    </label>

                                    <input className="peer/head-of-dep hidden" type="radio" name="type" id="head-of-dep"
                                        checked={type == "hod"}
                                        onChange={(e) => { setType("hod");; setFormData({ ...formData, role: 1 }) }}

                                    />
                                    <label className="peer-checked/head-of-dep:text-primary peer-checked/head-of-dep:bg-primary peer-checked/head-of-dep:bg-opacity-10 peer-checked/head-of-dep:border-primary border-lightText text-lightText cursor-pointer border font-medium rounded-md p-2 transition duration-150" htmlFor="head-of-dep">
                                        head of dep
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h1 className="font-header text-xl text-text font-semibold mb-4 pt-8 border-t border-gray-200">personal info</h1>
                            </div>

                            <label htmlFor="first_name" className="label mb-4 col-span-2 sm:col-auto">
                                First name
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="input w-10 mt-2"
                                    value={formData.first_name}
                                    required
                                    
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label htmlFor="last_name" className="label mb-4 col-span-2 sm:col-auto">
                                Last Name
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="input mt-2"
                                    required
                                    value={formData.last_name}
                                    onChange={handleInputChange}

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
                                    value={formData.email}
                                    onChange={handleInputChange}

                                />
                            </label>
                            {type == "student" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <label htmlFor="date_of_birth" className="label mb-4">
                                        Date of birth
                                        <input
                                            type="date"
                                            name="date_of_birth"
                                            id="date_of_birth"
                                            className="input mt-2"
                                            onChange={handleInputChange}
                                            value={formData.date_of_birth}
                                            required

                                        />
                                    </label>
                                </motion.div>

                            )}
                            <div className="col-span-2 flex items-center pt-8 border-t border-gray-200 mb-4">
                                <h1 className="font-header text-xl text-text font-semibold  ">professional info</h1>
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
                                        <select
                                            name="department_id"
                                            id="department"
                                            className="input mt-2 bg-transparent"
                                            onChange={handleInputChange}
                                            required
                                            defaultValue={''}
                                        >
                                            <option value={''} disabled>choose a department</option>

                                            {departments.map((department) => {
                                                return <option key={department.id} value={department.id} >{department.abbreviation}</option>

                                            })}
                                        </select>
                                    </label>

                                    <label htmlFor="speciality" className="label mb-4 col-span-2 sm:col-auto">
                                        Speciality
                                        <select
                                            name="speciality_id"
                                            id="speciality"
                                            className="input mt-2 bg-transparent"
                                            onChange={handleInputChange}
                                            defaultValue={''}
                                            required

                                        >
                                            <option value={''} disabled>choose a speciality</option>

                                            {
                                                // filter the fetched specialities per selected department
                                                (specialities.filter((depSpeciality) => depSpeciality.department_id == formData.department_id)).map((speciality) => {
                                                    return <option key={speciality.id} value={speciality.id}>{speciality.abbreviation}</option>

                                                })}
                                        </select>
                                    </label>

                                    <label htmlFor="level" className="label mb-4">
                                        Level
                                        <select
                                            name="level"
                                            id="level"
                                            className="input mt-2 bg-transparent"
                                            defaultValue={"l3"}
                                            onChange={handleInputChange}
                                        >
                                            <option value="l3">L-3</option>
                                            <option value="m2">M-2</option>
                                        </select>
                                    </label>

                                    <label htmlFor="semester" className="label mb-4">
                                        Semester
                                        <select
                                            name="semester"
                                            id="semester"
                                            className="input mt-2 bg-transparent"
                                            defaultValue={1}
                                            onChange={handleInputChange}
                                        >
                                            <option value={parseInt("1")}>1st semester</option>
                                            <option value={parseInt("2")}>2nd semester</option>
                                        </select>
                                    </label>
                                    <label htmlFor="academic_year" className="label mb-4">
                                        Academic year
                                        <input
                                            type="text"
                                            name="academic_year"
                                            disabled
                                            value="2022 / 2023"
                                            id="academic_year"
                                            className="input mt-2"
                                        />
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
                                    <div
                                        className="text-primary col-span-2 w-fit mb-3 cursor-pointer"
                                        onClick={() => 
                                            {setNewCompany(!newCompany);
                                            setFormData({...formData,company_id:"",name:"",company_email:"",address:"",logo_link:"",description:"",})
                                             
                                            }}
                                    >{newCompany == true ? 'select existing company' : 'add new company'}
                                    </div>

                                    {newCompany == true
                                        ?
                                        <>
                                            <label htmlFor="company" className="label mb-4 col-span-2 sm:col-auto">
                                                company name
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="company"
                                                    className="input w-10 mt-2"
                                                    required
                                                    onChange={handleInputChange}

                                                />
                                            </label>
                                            <label htmlFor="company-address" className="label mb-4 col-span-2 sm:col-auto">
                                                address
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="address"
                                                    className="input w-10 mt-2"
                                                    required
                                                    onChange={handleInputChange}

                                                />
                                            </label>
                                            <label htmlFor="company_email" className="label mb-4 col-span-2 sm:col-auto">
                                                company email
                                                <input
                                                    type="email"
                                                    name="company_email"
                                                    id="company_email"
                                                    className="input w-10 mt-2"
                                                    required
                                                    onChange={handleInputChange}

                                                />
                                            </label>
                                            <label htmlFor="company_logo" className="label mb-4 col-span-2 sm:col-auto">
                                                logo link
                                                <input
                                                    type="text"
                                                    name="logo_link"
                                                    id="company_logo"
                                                    className="input w-10 mt-2"
                                                    required
                                                    onChange={handleInputChange}

                                                />
                                            </label>
                                            <div></div>
                                            <label htmlFor="company_description" className="label col-span-2">
                                                company description
                                                <textarea
                                                    type="text"
                                                    name="description"
                                                    id="company_description"
                                                    className="input mt-2"
                                                    maxLength={2000}
                                                    onChange={handleInputChange}

                                                />
                                            </label>
                                        </>
                                        :
                                        <label htmlFor="company_id" className="label mb-4">
                                            company
                                            <select
                                                name="company_id"
                                                id="company_id"
                                                className="input mt-2 bg-transparent"
                                                onChange={handleInputChange}
                                                defaultValue={""}

                                            >
                                                <option value="">select a company</option>
                                                {companies.map((company) => {
                                                return <option key={company.id} value={company.id} >{company.name}</option>

                                            })}
                                            </select>
                                        </label>

                                    }

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
                                    <label htmlFor="department" className="label mb-4 col-span-2 sm:col-auto">
                                        department
                                        <select
                                            name="department_id"
                                            id="department"
                                            className="input mt-2 bg-transparent"
                                            onChange={handleInputChange}
                                            required
                                            defaultValue={''}
                                        >
                                            <option value={''} disabled>choose a department</option>
                                            {departments.map((department) => {
                                                return <option key={department.id} value={department.id} >{department.abbreviation}</option>
                                            })}
                                        </select>

                                    </label>
                                </motion.div>
                            )}
                        </div>
                        <div className="flex gap-4 sm:gap-8 w-full items-center justify-center mt-8">

                            <button type="reset" className="secondary-btn px-16"
                                onClick={() => navigate(-1)}
                            >
                                Cancel
                            </button>
                            <input className="primary-btn px-16" type="submit" value="Confirm" />
                        </div>
                    </form>
                </div>
            </div>
           
            {showMessage && (
                <Message type={'success'} text={'account created'}/>
              )}
        </div>
    )
}
export default AddAccount