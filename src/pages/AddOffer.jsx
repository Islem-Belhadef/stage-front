// Components
import Header from "../components/Header"

const AddOffer = () => {
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
          <form className="mt-8">
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
                />
              </label>
              <label htmlFor="level" className="label mb-4">
                Required level
                <select
                  type="number"
                  name="level"
                  id="level"
                  className="input mt-2 bg-transparent"
                  defaultValue=""
                  required
                >
                  <option value="">Any</option>
                  <option value="l3">L-3</option>
                  <option value="m2">M-2</option>
                </select>
              </label>
              <label htmlFor="spots" className="label mb-4">
                Available spots
                <input
                  type="number"
                  name="spots"
                  id="spots"
                  className="input mt-2"
                  defaultValue={1}
                  min={1}
                  max={100}
                  required
                />
              </label>
              <label htmlFor="start-date" className="label mb-4">
                Start date
                <input
                  type="date"
                  name="start-date"
                  id="start-date"
                  className="input mt-2"
                  required
                />
              </label>
              <label htmlFor="end-date" className="label mb-4">
                End date
                <input
                  type="date"
                  name="end-date"
                  id="end-date"
                  className="input mt-2"
                  required
                />
              </label>
              <label
                htmlFor="motivational-letter"
                className="label mb-4 col-span-2"
              >
                Description
                <textarea
                  name="motivational-letter"
                  id="motivational-letter"
                  cols="30"
                  rows="8"
                  minLength={100}
                  maxLength={3000}
                  className="input mt-2"
                ></textarea>
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
    </div>
  )
}

export default AddOffer
