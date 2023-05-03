// Components
import Header from "../components/Header"
import Account from "../components/Account"

// Assets
import { SearchNormal1, Setting5 } from "iconsax-react"
import AccountsStats from "../components/AcountsStats"
import { useState } from "react"
import AccountsFilter from "../components/AccountsFilter"

const SuperAdminDashboard = () => {

  const [showFilters, setshowFilters] = useState(false)

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
    <div className="bg-bg">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container mx-auto flex flex-col gap-8 py-10">
        <AccountsStats />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="hidden lg:flex flex-col gap-8">
            <div className="bg-white rounded-xl shadow-md shadow-gray-100 py-10 px-6 h-fit">
              <h1 className="font-header text-text text-2xl font-bold">Search</h1>
              <form className="flex flex-col items-center mt-6">
                <div className="flex flex-col items-end w-full">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="input mt-2 w-full pr-10"
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
              <AccountsFilter />
            </div>
          </div>
          {accounts.length > 0 && (
            <div className="bg-white rounded-xl shadow-md flex-1 h-fit">
              {/* for filter and search in small screens */}
              <div className="flex lg:hidden items-center rounded-t-xl w-full h-fit px-5 bg-white border-b border-lightGray">
                <input
                  type="text"
                  name="type"
                  id="type"
                  className="input my-2 w-full pr-10 border-none bg-[#EEF0F4]"
                  placeholder="Search by name.."
                />
                <SearchNormal1
                  color="#CED3E1"
                  size={30}
                  className=" relative -left-9 cursor-pointer"

                />
                <button className="flex items-center gap-1 font-medium text-text text-xl"
                  onClick={() => { setshowFilters(true) }}

                >
                  <Setting5 />
                  filter
                </button>
              </div>

              {/*  */}
              {accounts.map((account) => {
                return <Account account={account} key={account.email} />
              })}
            </div>
          )}
        </div>
      </div>
      {showFilters && (
        <div className="fixed bg-black bg-opacity-80 inset-0 flex  items-center">
          <div className="w-full sm:w-3/4 max-w-xl bg-white rounded-xl  py-7 px-6 h-fit mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="font-header text-text text-2xl font-bold">
                Filters
              </h1>
              <button
                onClick={() => { setshowFilters(false) }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <AccountsFilter />
          </div>
        </div>
      )}
    </div>
  )
}

export default SuperAdminDashboard
