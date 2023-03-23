// Components
import Header from "../components/Header"

// Assets
import image from "../assets/home-cover.jpg"

const Companies = () => {
  const companies = [
    {
      name: "Ooredoo",
      desc: "A leading telecommunications company in Algeria",
      logo: "https://seeklogo.com/images/O/ooredoo-logo-DC5A203B79-seeklogo.com.png",
    },
    {
      name: "Mobilis",
      desc: "The official national telecommunications operational and one of the leading companies in Algeria",
      logo: "https://seeklogo.com/images/M/mobilis-logo-005D3C94BA-seeklogo.com.png",
    },
    {
      name: "Sonatrach",
      desc: "the national state-owned oil company of Algeria. It has different internship titles in many fields.",
      logo: "https://seeklogo.com/images/S/sonatrach-logo-DE98DB0B97-seeklogo.com.png",
    },
  ]

  return (
    <div>
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
      <div className="grid grid-cols-3 2xl:grid-cols-4">
        {companies.map((company) => {
          return (
            <div className="flex flex-col gap-4 items-center border-r-2 border-r-lightGray p-8">
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name + " logo"}
                  className="w-1/2"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4 items-center ">
                <h1 className="font-header text-2xl font-bold text-text mt-4">
                  {company.name}
                </h1>
                <p className="font-body text-lightText">{company.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Companies
