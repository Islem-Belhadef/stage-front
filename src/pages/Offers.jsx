// Components
import Header from "../components/Header"
import Offer from "../components/Offer"

const Offers = () => {
  const offers = [
    {
      title: "Web developer",
      spots: 3,
      duration: 1,
      company: {
        name: "Ooredoo",
        domain: "Telecommunications",
        logo: "https://seeklogo.com/images/O/ooredoo-logo-DC5A203B79-seeklogo.com.png",
        address: "Ali Mendjli, Constantine",
        offers: 3,
      },
    },
    {
      title: "Network engineer",
      spots: 3,
      duration: 3,
      company: {
        name: "Mobilis",
        domain: "Telecommunications",
        logo: "https://seeklogo.com/images/M/mobilis-logo-005D3C94BA-seeklogo.com.png",
        address: "Ali Mendjli, Constantine",
        offers: 3,
      },
    },
  ]

  return (
    <div className="bg-gray-50 h-screen">
      <Header fontColor="#272937" bgColor="#FFFFFF" />
      <div className="container mx-auto flex gap-8 py-10">
        <div className="bg-white rounded-xl shadow-md shadow-gray-100 py-10 px-6">
          <div>
            <h1 className="font-header text-text text-2xl font-bold">
              Filters
            </h1>
            <form className="flex flex-col items-center mt-6">
              <label htmlFor="duration" className="label mb-4">
                Internship duration
                <div className="flex gap-4 mt-2">
                  <input
                    type="number"
                    className="input"
                    placeholder="Minimum"
                    min={0}
                    style={{ width: "9rem" }}
                  />
                  <input
                    type="number"
                    className="input"
                    placeholder="Maximum"
                    min={0}
                    style={{ width: "9rem" }}
                  />
                </div>
              </label>
              <label htmlFor="spots" className="label mb-4">
                Available spots
                <div className="flex gap-4 mt-2">
                  <input
                    type="number"
                    className="input"
                    placeholder="Minimum"
                    min={0}
                    style={{ width: "9rem" }}
                  />
                  <input
                    type="number"
                    className="input"
                    placeholder="Maximum"
                    min={0}
                    style={{ width: "9rem" }}
                  />
                </div>
              </label>
              <label htmlFor="level" className="label mb-4">
                Level
                <select
                  name="level"
                  id="level"
                  className="input mt-2 bg-transparent"
                >
                  <option value="">Any</option>
                  <option value="L-3">L-3</option>
                  <option value="M-2">M-2</option>
                </select>
              </label>
              <label htmlFor="order" className="label mb-4">
                Order by
                <select
                  name="order"
                  id="order"
                  className="input mt-2 bg-transparent"
                >
                  <option value="">Offer date (ascending)</option>
                  <option value="">Offer date (descending)</option>
                  <option value="">Internship duration (ascending)</option>
                  <option value="">Internship duration (descending)</option>
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
        <div className="bg-white rounded-xl shadow-md flex-1">
          {offers.map((offer) => {
            return <Offer offer={offer} key={offer.title} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Offers
