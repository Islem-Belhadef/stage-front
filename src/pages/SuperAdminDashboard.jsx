// Components
import Header from "../components/Header"
import Account from "../components/Account"

// Assets
import { SearchNormal1 } from "iconsax-react"

const SuperAdminDashboard = () => {
  const accounts = [
    {
      firstName: "Mohamed Islem",
      lastName: "BELHADEF",
      email: "islem.belhadef@univ-constantine2.dz",
      type: "student",
    },
    {
      firstName: "Mohamed Achraf",
      lastName: "DAMOUS",
      email: "achraf.damous@univ-constantine2.dz",
      type: "student",
    },
    {
      firstName: "Imad",
      lastName: "HAKIMI",
      email: "imad.imad@ooredoo.dz",
      type: "supervisor",
    },
    {
      firstName: "Redouane",
      lastName: "NOUARA",
      email: "redouane.nouara@univ-constantine2.dz",
      type: "hod",
    },
  ]

  return (
    <div className="bg-gray-50">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-10">
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow-md shadow-gray-100 py-10 px-6 h-fit">
            <h1 className="font-header text-text text-2xl font-bold">Search</h1>
            <form className="flex flex-col items-center mt-6">
              <div className="flex flex-col items-end w-full">
                <input
                  type="text"
                  name="type"
                  id="type"
                  className="input mt-2 w-full"
                  placeholder="Search by name.."
                />
                <SearchNormal1
                  color="#CED3E1"
                  size={20}
                  style={{
                    position: "relative",
                    left: "-12px",
                    top: "-38px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <button type="submit" className="primary-btn">
                Search
              </button>
            </form>
          </div>
          <div className="bg-white rounded-xl shadow-md shadow-gray-100 py-10 px-6 h-fit">
            <h1 className="font-header text-text text-2xl font-bold">
              Filters
            </h1>
            <form className="flex flex-col items-center mt-6">
              <label htmlFor="type" className="label mb-4">
                Account type
                <select
                  name="type"
                  id="type"
                  className="input mt-2 bg-transparent"
                >
                  <option value="">Any</option>
                  <option value="student">Student</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="hod">Head of Department</option>
                </select>
              </label>
              <label htmlFor="order" className="label mb-4">
                Order by
                <select
                  name="order"
                  id="order"
                  className="input mt-2 bg-transparent"
                >
                  <option value="">creation date (ascending)</option>
                  <option value="">creation date (descending)</option>
                  <option value="">account type</option>
                </select>
              </label>
              <div className="flex gap-4 mt-2">
                <button type="reset" className="secondary-btn">
                  Reset
                </button>
                <button type="submit" className="primary-btn">
                  Filter
                </button>
              </div>
            </form>
          </div>
        </div>
        {accounts.length > 0 && (
          <div className="bg-white rounded-xl shadow-md flex-1">
            {accounts.map((account) => {
              return <Account account={account} key={account.email} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default SuperAdminDashboard
