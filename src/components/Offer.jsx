// React & Router
import { Link } from "react-router-dom"

// Assets
import { ExportSquare, Location, Timer1, Briefcase } from "iconsax-react"

const Offer = ({ offer }) => {
  return (
    <div className="flex p-6 border-b border-b-gray-200 cursor-pointer hover:bg-gray-200/10">
      <div className="flex-1">
        <div className="flex items-center gap-8">
          <div
            className="w-1/6 h-20 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${offer.company.logo})` }}
          ></div>
          <div>
            <h1 className="font-body text-text text-xl font-bold">
              {offer.title}
            </h1>
            <Link className="text-primary">{offer.company.name}</Link>
          </div>
        </div>
        <div className="flex gap-6 items-center text-lightText font-medium mt-4">
          <p className="flex gap-2 items-center">
            <Location color="#9D9CAC" size={18} />
            {offer.company.address}
          </p>
          <p className="flex gap-2 items-center">
            <Timer1 color="#9D9CAC" size={18} />
            {offer.duration} months
          </p>
          <p className="flex gap-2 items-center">
            <Briefcase color="#9D9CAC" size={18} />
            {offer.spots} spots
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-center">
        <ExportSquare
          color="#383EBE"
          className="cursor-pointer hover:scale-110 transition"
        />
      </div>
    </div>
  )
}

export default Offer
