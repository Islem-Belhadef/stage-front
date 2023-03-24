// Assets
import image from "../assets/informations-cover.jpg"

const PersonalInformation = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="rounded-xl bg-white py-8 px-24">
        <h1 className="font-header text-3xl text-text font-semibold mb-2">
          Personal information
        </h1>
        <p className="font-body text-lightText">
          Please fill in these information to proceed
        </p>
        <form className="mt-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
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
            <button type="submit" className="primary-btn px-16">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalInformation
