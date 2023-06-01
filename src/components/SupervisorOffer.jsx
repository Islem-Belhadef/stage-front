import relativeDate from "../dates/relativeDate"
import { Book1, Calendar, Edit, Timer1, Trash } from "iconsax-react"
import DeleteModal from "./DeleteModal"
import { useState } from "react"

const SupervisorOffer = ({ offer }) => {

    const [showDelete, setShowDelete] = useState(false)


    return (
        <div className="flex py-6 px-6 md:py-8 md:px-10 border-b border-b-gray-200">

            {/* for big screens */}
            <div className="hidden sm:block w-1/3 font-medium">{offer.title}</div>
            <div className="hidden sm:block w-1/5">{offer.duration} days</div>
            <div className="hidden sm:block w-1/6">{offer.level}</div>
            <div className="hidden sm:block w-1/5">{relativeDate(offer.created_at)}</div>

            {/* for mobile */}
            <div className="flex-1 space-y-6 sm:hidden">
                <div className=" font-medium text-lg">{offer.title}</div>
                <div className="flex gap-6 text-grayText text-sm">
                    <p className="flex items-center gap-1">
                        <Timer1 size={18} />
                        {offer.duration} days
                    </p>
                    <p className="flex items-center gap-1">
                        <Book1 size={18} />
                        {offer.level}
                    </p>
                    <p className="flex items-center gap-1">
                        <Calendar size={18} />
                        {relativeDate(offer.created_at)}
                    </p>

                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center ">
                <Edit 
                    className="cursor-pointer hover:scale-110 transition"
                    color="#7CDF64"
                    size={24}
                    onClick={() => console.log('edit')}
                />
                <Trash 
                    className="cursor-pointer hover:scale-110 transition" 
                    color="#F64A4A"
                    size={24}
                    onClick={() => setShowDelete(true)}
                />
            </div>
            {/* delete modal */}
            {showDelete && 
            <DeleteModal For='offer' offerTitle={offer.title} offerId={offer.id} setShowDelete={setShowDelete}/>
            }
        </div>
    )
}

export default SupervisorOffer