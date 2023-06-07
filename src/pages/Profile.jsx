// React & Router
import { useEffect, useState } from "react"
import authAxios from "../api/axios"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
// Libraries
import { motion, AnimatePresence } from "framer-motion"
// Components
import Header from "../components/Header"
import Message from "../components/message"
// Assets
import studentImage from "../assets/student.svg"
import supervisorImage from "../assets/supervisor.svg"
import hodImage from "../assets/hod.svg"
import adminImage from "../assets/admin.svg"
import { Edit } from "iconsax-react"
import Loader from "../components/Loader"



const Profile = () => {

  const navigate = useNavigate()

  const [editPersonalInfo, setEditPersonalInfo] = useState(false)
  const [editAccountInfo, setEditAccountInfo] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [profile, setProfile] = useState({})
  const [departments, setDepartments] = useState([])
  const [specialities, setSpecialities] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    role: null,
    department_id: null,
    speciality_id: null,
    date_of_birth: '',
    semester: '',
    level: '',
    cv : '',
    github:'',
    company_id: null,
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
      authAxios.get('auth/profile'),
      axios.get('http://127.0.0.1:8000/api/departments'),
      axios.get('http://127.0.0.1:8000/api/specialities')
    ])
      .then(
        axios.spread((...allRes) => {
            setProfile(allRes[0].data.profile);
            // if user type student we set department to use it for dynamic specialities
            if(allRes[0].data.profile.role == 0){
              setFormData({
                ...formData, role: allRes[0].data.profile.role,
                department_id: allRes[0].data.profile.student.department_id
              })
            }else{
              setFormData({ ...formData, role: allRes[0].data.profile.role })
            }

          setDepartments(allRes[1].data.departments)
          setSpecialities(allRes[2].data.specialities)
          console.log(departments)
          console.log(specialities)
          setLoading(false)
        })
      )
      .catch(err => {
        console.log(err)
      })

  }, [])

  const handleEditProfile = (e) => {
    e.preventDefault()
    authAxios.put(`accounts/update/${profile.id}}`, formData)
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
        console.log('edit failed')
      })

  }

  let img =
    profile.role == 0
      ? studentImage
      : profile.role == 1
        ? hodImage
        : profile.role == 2
          ? supervisorImage
          : adminImage

  console.log(formData)

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container my-8 mx-auto bg-white rounded-xl shadow-md pb-10 font-body">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 md:px-10 py-6">
          {loading ?
            <Loader layout='line' />
            :
            <>
              <div>
                <h1 className="font-header font-semibold text-2xl text-text mb-1">
                  {profile.last_name} {profile.first_name}
                </h1>
                <p className="text-primary">
                  {profile.role == 0 ? 'student' : profile.role == 1 ? 'head of department' : profile.role == 2 ? 'supervisor' : 'admin'}
                </p>
              </div>

              <div
                className="rounded-full p-2 w-28 h-28 border-2 border-text bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </>
          }

        </div>
        {profile.role != 3 &&
          <div className="px-6 pt-10 md:px-10">
            <h2 className="font-header font-semibold text-xl text-text mb-6 flex gap-4 items-center">
              Professional information
              <Edit
                size={24}
                color="#7CDF64"
                className="cursor-pointer"
                onClick={() => {
                  setEditPersonalInfo(true)
                }}
              />
            </h2>

            {!editPersonalInfo && (
              loading ?
                <>
                  <Loader layout="grid" />
                  <Loader layout="grid" />
                  <Loader layout="grid" />
                </>
                :
                <motion.div
                  className="grid grid-cols-3 gap-y-3 gap-x-2 lg:ml-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {profile.role == 0 && (
                    <>
                      <p className="text-lightText">Date of birth</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.student.date_of_birth}
                      </p>
                      <p className="text-lightText">University</p>
                      <p className="text-grayText font-semibold col-span-2">
                        University of Constantine 2 - Abdelhamid Mehri
                      </p>
                      <p className="text-lightText">Department</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.student.department.abbreviation}
                      </p>
                      <p className="text-lightText">Speciality</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.student.speciality.name}
                      </p>

                      <p className="text-lightText">Level</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.student.level == "l3" ? "lisence 3" : "master 2"}
                      </p>

                      <p className="text-lightText">Semester</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.student.semester}
                      </p>
                      <p className="text-lightText">Cv</p>
                      <Link className="text-grayText font-semibold col-span-2 overflow-hidden overflow-ellipsis whitespace-nowrap w-72"
                         to={profile.student.cv} target="_blank"
                      >
                        {profile.student.cv}
                      </Link>
                      <p className="text-lightText">Github</p>
                      <Link className="text-grayText font-semibold col-span-2"
                         to={profile.student.github} target="_blank"
                      >
                        {profile.student.github} 
                      </Link>

                    </>
                  )}
                  {profile.role == 1 && (
                    <>
                      <p className="text-lightText">University</p>
                      <p className="text-grayText font-semibold col-span-2">
                        University of Constantine 2 - Abdelhamid Mehri
                      </p>
                      <p className="text-lightText">Department</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.hod.department.name} {profile.hod.department.abbreviation}
                      </p>
                    </>
                  )}

                  {profile.role == 2 && (
                    <>
                      <p className="text-lightText">Company</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.supervisor.company.name}
                      </p>
                      <p className="text-lightText">address</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.supervisor.company.address}
                      </p>
                      <p className="text-lightText">company email</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.supervisor.company.company_email}
                      </p>
                      <p className="text-lightText">logo</p>
                      <p className="text-grayText font-semibold col-span-2 overflow-hidden overflow-ellipsis whitespace-nowrap w-64">
                        {profile.supervisor.company.logo_link}
                      </p>
                      <p className="text-lightText">company description</p>
                      <p className="text-grayText font-semibold col-span-2">
                        {profile.supervisor.company.description}
                      </p>
                    </>
                  )}

                </motion.div>



            )}
            {editPersonalInfo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-lg"
              >
                {profile.role == 0 && (
                  <>
                    <label htmlFor="date_of_birth" className="label gap-1 mb-4">
                      Date of birth
                      <input
                        type="date"
                        name="date_of_birth"
                        id="date_of_birth"
                        className="input col-span-2"
                        defaultValue={profile.student.date_of_birth}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label htmlFor="university" className="label gap-1 mb-4">
                      University
                      <input
                        type="text"
                        name="university"
                        id="university"
                        className="input col-span-2"
                        value={'University of Constantine 2 - Abdelhamid Mehri'}
                        disabled
                      />
                    </label>

                    <label htmlFor="department" className="label mb-4 col-span-2 sm:col-auto">
                      department
                      <select
                        name="department_id"
                        id="department"
                        className="input mt-2 bg-transparent"

                        defaultValue={profile.student.department_id}
                        onChange={handleInputChange}
                      >

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
                        defaultValue={profile.student.speciality_id}

                        onChange={handleInputChange}

                      >

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
                        defaultValue={profile.student.level}
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
                        defaultValue={profile.student.semester}
                        onChange={handleInputChange}
                      >
                        <option value={parseInt('1')}>1st semester</option>
                        <option value={parseInt('2')}>2nd semester</option>
                      </select>
                    </label>

                    <label htmlFor="cv" className="label gap-1 mb-4">
                      Cv
                      <input
                        type="text"
                        name="cv"
                        id="cv"
                        className="input col-span-2"
                        defaultValue={profile.student.cv}
                        onChange={handleInputChange}

                   
                      />
                    </label>

                    <label htmlFor="github" className="label gap-1 mb-4">
                      Github
                      <input
                        type="text"
                        name="github"
                        id="github"
                        className="input col-span-2"
                        defaultValue={profile.student.github}
                        onChange={handleInputChange}
                          
                      />
                    </label>

                  </>
                )}

                {profile.role == 1 && (
                  <>

                    <label htmlFor="university" className="label gap-1 mb-4">
                      University
                      <input
                        type="text"
                        name="university"
                        id="university"
                        className="input col-span-2"
                        value={'University of Constantine 2 - Abdelhamid Mehri'}
                        disabled
                      />
                    </label>

                    <label htmlFor="department" className="label mb-4 col-span-2 sm:col-auto">
                      department
                      <select
                        name="department_id"
                        id="department"
                        className="input mt-2 bg-transparent"

                        defaultValue={profile.hod.department_id}
                        onChange={handleInputChange}
                      >

                        {departments.map((department) => {
                          return <option key={department.id} value={department.id} >{department.abbreviation}</option>

                        })}
                      </select>
                    </label>
                  </>
                )}

                {profile.role == 2 && (
                  <>
                    <label htmlFor="company" className="label mb-4 col-span-2 sm:col-auto">
                      company name
                      <input
                        type="text"
                        name="name"
                        id="company"
                        className="input w-10 mt-2"
                        defaultValue={profile.supervisor.company.name}
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
                        defaultValue={profile.supervisor.company.address}
                       
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
                        defaultValue={profile.supervisor.company.company_email}
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
                        defaultValue={profile.supervisor.company.logo_link}
                     
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
                        defaultValue={profile.supervisor.company.description}

                        maxLength={2000}
                        onChange={handleInputChange}

                      />
                    </label>
                  </>
                )}
              </motion.div>
            )}
          </div>
        }
        <div className="px-6 md:px-10 pb-10 pt-10 ">
          <h2 className="font-header font-semibold text-xl text-text mb-6 flex gap-4 items-center">
            Account information
            <Edit
              size={24}
              color="#7CDF64"
              className="cursor-pointer"
              onClick={() => {
                setEditAccountInfo(true)
              }}
            />
          </h2>
          {!editAccountInfo && (
            loading ?
              <Loader layout='grid' />
              :
              <motion.div
                className="grid grid-cols-3 gap-y-1 gap-x-2 lg:ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-lightText">Email</p>
                <p className="text-grayText font-semibold col-span-2">
                  {profile.email}
                </p>
              </motion.div>
          )}
          {editAccountInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-lg"
            >
              <label htmlFor="email" className="label gap-1 mb-4">
                Email Address
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input col-span-2"
                  defaultValue={profile.email}
                  onChange={handleInputChange}
                />
              </label>
            </motion.div>
          )}
        </div>
        {(editPersonalInfo || editAccountInfo) && (
          <div className="px-10 pb-10 flex items-center justify-center gap-6">
            <button
              type="reset"
              className="secondary-btn w-52"
              onClick={(e) => {
                e.preventDefault()
                setEditPersonalInfo(false)
                setEditAccountInfo(false)
              }}
            >
              Cancel
            </button>
            <button type="submit" className="primary-btn w-52"
              onClick={handleEditProfile}
            >
              Save

            </button>
          </div>
        )
        }
      </div>
      {showMessage == true &&
        <Message type='success' text='info edited successfully' />
      }
    </div>
  )
}

export default Profile
