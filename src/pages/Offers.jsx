//react
import { useState, useEffect } from "react"
import axios from "axios"

// Components
import Header from "../components/Header"
import Offer from "../components/Offer"

// Assets
import emptyBox from "../assets/empty-box.svg"
import { Setting5 } from "iconsax-react"
import OffersFilter from "../components/OffersFilter"

import Loader from "../components/Loader"
import { Cookies } from "react-cookie"

const Offers = () => {
  const [offers, setOffers] = useState([])
  const [showFilters, setshowFilters] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/offers")
      .then((res) => {
        console.log(res)
        setOffers(res.data.offers)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log("these are the fetched offers n 0", offers)

  return (
    <div className="bg-gray-50">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-10">
        <div className="hidden lg:block sticky top-10 bg-white rounded-xl shadow-md shadow-gray-100 py-10 px-6 h-fit">
          <h1 className="font-header text-text text-2xl font-bold">Filters</h1>
          <OffersFilter />
        </div>

        {loading && (
          <div className="bg-white rounded-xl shadow-md flex-1">
            <Loader />
            <Loader />
            <Loader />
          </div>
        )}

        {!loading &&
          (offers.length > 0 ? (
            <div className="bg-white rounded-xl shadow-md flex-1">
              <div className="flex justify-between items-center px-6 py-4 border-b border-b-gray-200">
                <p className=" font-header font-medium text-grayText  ">{`Showing ${offers.length} offers`}</p>
                <button
                  className="lg:hidden flex items-center gap-1 font-medium text-text text-xl"
                  onClick={() => {
                    setshowFilters(true)
                  }}
                >
                  <Setting5 />
                  filter
                </button>
              </div>
              {offers.map((offer) => {
                return <Offer offer={offer} key={offer.id} />
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl flex-1 pt-10 sm:pt-0 pb-10 px-10 flex flex-col justify-center items-center">
              <img
                src={emptyBox}
                alt="empty box"
                className="w-2/3 min-w-[15rem]"
              />
              <h1 className="font-header text-text text-xl sm:text-2xl font-bold mb-4">
                Nothing
              </h1>
              <p className="font-body text-lightText">
                There are no corresponding internship offers with the filters
                you entered, try removing filters
              </p>
            </div>
          ))}
      </div>

      {showFilters && (
        <div className="fixed bg-slate-800 backdrop-blur-sm bg-opacity-70 inset-0 flex  items-center">
          <div className="w-full sm:w-3/4 max-w-xl bg-white rounded-xl py-7 px-6 h-fit mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="font-header text-text text-2xl font-bold">
                Filters
              </h1>
              <button
                onClick={() => {
                  setshowFilters(false)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7rem"
                  height="1.7rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <OffersFilter />
          </div>
        </div>
      )}
    </div>
  )
}

export default Offers
