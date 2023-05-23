//react
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authAxios from "../api/axios"

// Components
import Header from "../components/Header"
import Message from "../components/message"

const AddDemand = () => {

  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)
  const [demandData, setDemandData] = useState({
    title: '',
    company: '',
    supervisor_email: '',
    start_date: '',
    end_date: '',
    motivational_letter: ''

  })

  const handleOnChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setDemandData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    authAxios.post("demands/new", demandData)
      .then((res) => {
        if (res.status === 201) {
          console.log(res)
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

  console.log(demandData)
  return (
    <div className="bg-gray-50">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container mx-auto flex flex-col gap-8 py-10">
        <div className="bg-white rounded-xl shadow-md shadow-gray-200 p-8 sm:py-12 sm:px-24 ">
          <h1 className="font-header text-3xl text-text font-semibold mb-2">
            New demand
          </h1>
          <p className="font-body text-lightText">
            Please fill in these information to proceed
          </p>
          <form className="mt-8"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-body">
              <label htmlFor="title" className="label mb-4 col-span-2">
                Internship title
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="input mt-2"
                  minLength={10}
                  maxLength={200}
                  required
                  onChange={handleOnChange}
                />
              </label>
              <label htmlFor="company" className="label mb-4 col-span-2 sm:col-auto">
                Company
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="input w-10 mt-2"
                  minLength={3}
                  maxLength={50}
                  required
                  onChange={handleOnChange}

                />
              </label>
              <label htmlFor="supervisor_email" className="label mb-4 col-span-2 sm:col-auto">
                Supervisor's email address
                <input
                  type="email"
                  name="supervisor_email"
                  id="supervisor_email"
                  className="input mt-2"
                  minLength={8}
                  maxLength={50}
                  required
                  onChange={handleOnChange}

                />
              </label>
              <label htmlFor="start_date" className="label mb-4">
                Start date
                <input
                  type="date"
                  name="start_date"
                  id="start_date"
                  className="input mt-2"
                  required
                  onChange={handleOnChange}

                />
              </label>
              <label htmlFor="end_date" className="label mb-4">
                End date
                <input
                  type="date"
                  name="end_date"
                  id="end_date"
                  className="input mt-2"
                  required
                  onChange={handleOnChange}

                />
              </label>
              <label
                htmlFor="motivational_letter"
                className="label mb-4 col-span-2"
              >
                Motivational letter (optional)
                <textarea
                  name="motivational_letter"
                  id="motivational_letter"
                  cols="30"
                  rows="8"
                  maxLength={1000}
                  className="input mt-2"
                  onChange={handleOnChange}

                ></textarea>
              </label>
            </div>
            <div className="flex gap-8 w-full items-center justify-center mt-8">
              <button type="reset" className="secondary-btn px-16 cursor-pointer">
                Reset
              </button>
              <input
                className="primary-btn px-16 cursor-pointer"
                type="submit"
                value="Confirm"
              />
            </div>
          </form>
        </div>
      </div>
      {showMessage == true && (
        <Message type={'success'} text={'demand created'} />
      )}
    </div>
  )
}

export default AddDemand
