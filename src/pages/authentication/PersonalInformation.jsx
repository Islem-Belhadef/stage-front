import { useState, useEffect } from "react"
import axios from "axios"
import authAxios from "../../api/axios"
import { useCookies } from "react-cookie"
// Assets
import logo from "/logo.svg"
import { ArrowRight2 } from "iconsax-react"


const PersonalInformation = () => {

  const [cookies, setCookie, removeCookie] = useCookies()

  const [departments, setDepartments] = useState([])
  const [specialities, setSpecialities] = useState([])
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    department_id: null,
    speciality_id: null,
    date_of_birth: '',
    semester: 1,
    level: "l3",
    academic_year: '2023/2022',

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
    ]).then(
      axios.spread((...allRes) => {
        console.log(allRes[0].data.departments)
        console.log(allRes[1].data.specialities)

        setDepartments(allRes[0].data.departments)
        setSpecialities(allRes[1].data.specialities)

      })
    ).catch(err => {
      console.log(err)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    authAxios.post("http://127.0.0.1:8000/api/auth/register", formData)
      .then(res => {
        if (res.status === 201) {

          setCookie("type", 0, { path: "/" })
          window.location.replace("/")

        }
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="h-screen sm:bg-cover sm:bg-center flex bg-primary sm:bg-transparent sm:items-center justify-center sm:py-6 bg-[url('/src/assets/MobileCover.svg')] [background-position-x:center] sm:bg-[url('/src/assets/informations-cover.jpg')]">
      <div className="flex sm:hidden justify-center items-center bg-primary sm:bg-transparent w-20 aspect-square rounded-full absolute top-8 left-1/2 sm:left-6 translate-x-[-50%] sm:translate-x-0">
        <img
          src={logo}
          alt="logo"
          className="brightness-[5] sm:filter-none w-[60px]"
        />
      </div>
      <div className="w-full absolute top-36 sm:static sm:top-0  px-7 py-7 rounded-t-xl sm:w-auto sm:rounded-xl sm:py-8 sm:px-24 sm:h-full bg-white">
        <h1 className="font-header text-xl sm:text-3xl text-text font-semibold mb-2">
          Personal information
        </h1>
        <p className="font-body text-lightText text-sm sm:text-base">
          Please fill in these information to proceed
        </p>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
            <label htmlFor="first_name" className="label mb-4">
              First name
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="input w-10 mt-2"
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="last_name" className="label mb-4">
              Last name
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="input mt-2"
                onChange={handleInputChange}

              />
            </label>
            <label htmlFor="date_of_birth" className="label mb-4">
              Date of birth
              <input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                className="input mt-2"
                onChange={handleInputChange}
              />
            </label>
            <div></div>
            <label htmlFor="department" className="label mb-4">
              department
              <select
                name="department_id"
                id="department"
                className="input mt-2 bg-transparent"
                required
                defaultValue={''}
                onChange={handleInputChange}
              >
                <option value={''} disabled>choose a department</option>

                {departments.map((department) => {
                  return <option key={department.id} value={department.id} >{department.abbreviation}</option>

                })}
              </select>
            </label>

            <label htmlFor="speciality" className="label mb-4">
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
                onChange={handleInputChange}
              >
                <option value="1">1st semester</option>
                <option value="2">2nd semester</option>
              </select>
            </label>

          </div>
          <div className="flex gap-8 w-full items-center justify-center mt-8">
            <button type="reset" className="secondary-btn px-16">
              Reset
            </button>
            <button type="submit" className="primary-btn px-16 hidden sm:block">
              Confirm
            </button>
            <button
              type="submit"
              className="bg-primary rounded-lg px-4 py-3 sm:hidden"
            >
              <ArrowRight2 color="#FFFFFF" size={26} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalInformation
