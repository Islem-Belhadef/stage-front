// Assets
import image from "../../assets/informations-cover.jpg"
import logo from "/logo.svg"
import mobileCover from "../../assets/MobileCover.svg"
import {ArrowRight2 } from "iconsax-react"

const PersonalInformation = () => {
  return (
    <div
      className="h-screen sm:bg-cover sm:bg-center flex bg-primary sm:bg-transparent sm:items-center justify-center sm:py-6 bg-[url('/src/assets/MobileCover.svg')] [background-position-x:center] sm:bg-[url('/src/assets/informations-cover.jpg')]"
 
    >
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
        <form className="mt-8">
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
            <label htmlFor="first-name" className="label mb-4">
              First name
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="input w-10 mt-2"
              />
            </label>
            <label htmlFor="last-name" className="label mb-4">
              Last name
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="input mt-2"
              />
            </label>
            <label htmlFor="birthdate" className="label mb-4">
              Date of birth
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                className="input mt-2"
              />
            </label>
            <div></div>
            <label htmlFor="speciality" className="label mb-4">
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
            <label htmlFor="level" className="label mb-4">
              Level
              <select
                name="level"
                id="level"
                className="input mt-2 bg-transparent"
              >
                <option value="L3">L-3</option>
                <option value="M2">M-2</option>
              </select>
            </label>
            <label htmlFor="semester" className="label mb-4">
              Semester
              <select
                name="semester"
                id="semester"
                className="input mt-2 bg-transparent"
              >
                <option value="5">1st semester</option>
                <option value="6">2nd semester</option>
              </select>
            </label>
            <label htmlFor="academic-year" className="label mb-4">
              Academic year
              <input
                type="text"
                name="academic-year"
                disabled
                value="2022 / 2023"
                id="academic-year"
                className="input mt-2"
              />
            </label>
          </div>
          <div className="flex gap-8 w-full items-center justify-center mt-8">
            <button type="reset" className="secondary-btn px-16">
              Reset
            </button>
            <button type="submit" className="primary-btn px-16 hidden sm:block">
              Confirm
            </button>
            <button type="submit" className="bg-primary rounded-lg px-4 py-3 sm:hidden">
              <ArrowRight2 color="#FFFFFF" size={26} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalInformation
