// Components
import Header from "../components/Header"

// Assets
import image from "../assets/home-cover.jpg"
import { Buliding, Location, Briefcase } from "iconsax-react"

const Companies = () => {
  const companies = [
    {
      name: "Ooredoo",
      domain: "Telecommunications",
      logo: "https://seeklogo.com/images/O/ooredoo-logo-DC5A203B79-seeklogo.com.png",
      location: "Ali Mendjli, Constantine",
      offers: 3,
    },
    {
      name: "Mobilis",
      domain: "Telecommunications",
      logo: "https://seeklogo.com/images/M/mobilis-logo-005D3C94BA-seeklogo.com.png",
      location: "Ali Mendjli, Constantine",
      offers: 3,
    },
    {
      name: "Sonatrach",
      domain: "Power and Oil",
      logo: "https://seeklogo.com/images/S/sonatrach-logo-DE98DB0B97-seeklogo.com.png",
      location: "Ali Mendjli, Constantine",
      offers: 3,
    },
    {
      name: "Ooredoo",
      domain: "Telecommunications",
      logo: "https://seeklogo.com/images/O/ooredoo-logo-DC5A203B79-seeklogo.com.png",
      location: "Ali Mendjli, Constantine",
      offers: 3,
    },
    {
      name: "Mobilis",
      domain: "Telecommunications",
      logo: "https://seeklogo.com/images/M/mobilis-logo-005D3C94BA-seeklogo.com.png",
      location: "Ali Mendjli, Constantine",
      offers: 3,
    },
    {
      name: "Sonatrach",
      domain: "Power and Oil",
      logo: "https://seeklogo.com/images/S/sonatrach-logo-DE98DB0B97-seeklogo.com.png",
      location: "Ali Mendjli, Constantine",
      offers: 3,
    },
  ]

  return (
    <div className="bg-bg">
      <div
        className="bg-cover bg-top"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Header />
        <div className="w-full pt-20 pb-32 flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center gap-3">
            <h1 className="font-body font-medium text-3xl text-white">
              Partnered companies
            </h1>
            <p className="font-body text-sm text-yellow-300">
              These institutions hire our students as interns
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 py-10">
        {companies.map((company) => {
          return (
            <div className="bg-white rounded-lg p-8 flex flex-col items-center">
              <div
                className="h-28 w-2/3 max-w-xs bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${company.logo})` }}
              ></div>
              <h1 className="font-header text-2xl text-text font-bold mt-4">
                {company.name}
              </h1>
              <div className="w-full flex flex-col items-start gap-3 mt-4">
                <p className="font-body text-lightText flex gap-2 text-sm">
                  <Buliding size={20} />
                  {company.domain}
                </p>
                <p className="font-body text-lightText flex gap-2 text-sm">
                  <Location size={20} />
                  {company.location}
                </p>
                <p className="font-body text-lightText flex gap-2 text-sm">
                  <Briefcase size={20} />
                  {company.offers} offers
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Companies
