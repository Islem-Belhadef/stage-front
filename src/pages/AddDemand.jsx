// Components
import Header from "../components/Header"

const AddDemand = () => {
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
                />
              </label>
              <label htmlFor="supervisor-email" className="label mb-4 col-span-2 sm:col-auto">
                Supervisor's email address
                <input
                  type="email"
                  name="supervisor-email"
                  id="supervisor-email"
                  className="input mt-2"
                  minLength={8}
                  maxLength={50}
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
                Motivational letter (optional)
                <textarea
                  name="motivational-letter"
                  id="motivational-letter"
                  cols="30"
                  rows="8"
                  maxLength={1000}
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

export default AddDemand
