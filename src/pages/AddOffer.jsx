//react
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authAxios from "../api/axios"
// Components
import Header from "../components/Header"
import Message from "../components/message"


const AddOffer = () => {

  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(false)
  const [offerData, setOfferData] = useState({
    title: '',
    level: 'l3',
    available_spots: 1,
    start_date: '',
    end_date: '',
    description: ''
  })

  const handleOnChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setOfferData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    authAxios.post("offers/new", offerData)
      .then((res) => {
        if (res.status === 201) {
          console.log(res)
          console.log('offer created')
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

  console.log(offerData)
  return (
    <div className="bg-gray-50">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container mx-auto flex flex-col gap-8 py-10">
        <div className="bg-white rounded-xl shadow-md shadow-gray-200 p-8 sm:py-12 sm:px-24">
          <h1 className="font-header text-3xl text-text font-semibold mb-2">
            New offer
          </h1>
          <p className="font-body text-lightText">
            Please fill in these information to add a new internship offer
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
              <label htmlFor="level" className="label mb-4">
                Required level
                <select
                  type="number"
                  name="level"
                  id="level"
                  className="input mt-2 bg-transparent"
                  defaultValue="l3"
                  required
                  onChange={handleOnChange}
                >

                  <option value="l3">L-3</option>
                  <option value="m2">M-2</option>
                </select>
              </label>
              <label htmlFor="available_spots" className="label mb-4">
                Available spots
                <input
                  type="number"
                  name="available_spots"
                  id="available_spots"
                  className="input mt-2"
                  defaultValue={1}
                  min={1}
                  max={100}
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
                htmlFor="description"
                className="label mb-4 col-span-2"
              >
                Description
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="8"
                  minLength={10}
                  maxLength={3000}
                  className="input mt-2"
                  onChange={handleOnChange}
                ></textarea>
              </label>
            </div>
            <div className="flex gap-8 w-full items-center justify-center mt-8">
              <button className="secondary-btn px-16"
                onClick={() => navigate(-1)}
              >
                Cancel
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
        <Message type={'success'} text={'offer created'} />
      )}
    </div>
  )
}

export default AddOffer
