// React & Router
import { Link } from "react-router-dom"


// Assets
import { ExportSquare, Location, Timer1, Briefcase } from "iconsax-react"

const Offer = ({ offer }) => {


  return (
    <div className="flex p-6 border-b border-b-gray-200 cursor-pointer hover:bg-gray-200/10">
      <Link to={`/internship/offer/${offer.id}`} className="flex-1">
        <div className="flex items-center gap-8">
          <div
            className="w-1/6 h-20 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${offer.supervisor.company.logo_link})` }}
          ></div>
          <div>
            <h1 className="font-body text-text text-xl font-bold">
              {offer.title}
            </h1>
            <Link className="text-primary">{offer.supervisor.company.name}</Link>
          </div>
          
        </div>
        <div className="flex gap-6 items-center text-lightText font-medium mt-4">
          <p className="flex gap-2 items-center">
            <Location color="#9D9CAC" size={18} />
            {offer.supervisor.company.address}
          </p>
          <p className="flex gap-2 items-center">
            <Timer1 color="#9D9CAC" size={18} />
            {offer.duration} days
          </p>
          <p className="flex gap-2 items-center">
            <Briefcase color="#9D9CAC" size={18} />
            {offer.available_spots} spots
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <Link to={`/internship/offer/${offer.id}`} target="_blank">
          <ExportSquare
            color="#383EBE"
            className="cursor-pointer hover:scale-110 transition"
          />
        </Link>
      </div>
    </div>
  )
}

export default Offer
