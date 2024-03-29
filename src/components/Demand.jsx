import { ExportSquare, Category, Calendar, Timer1, Book1, Edit, Trash } from "iconsax-react"
import relativeDate from "../dates/relativeDate"
import DemandDetails from "./DemandDetails"
import EditDemand from "./EditDemand"
import DeleteModal from "./DeleteModal"
import { useState } from "react"

const Demand = ({ demand, forUser }) => {

    const [showDetails, setShowDetails] = useState(false)
    const [showEditDemand, setShowEditDemand] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    return (
        <div className="py-6 pl-4 sm:pl-8 pr-4 border-b border-gray-200 flex justify-between"
        >
            <div className={`${forUser != 'student' && " cursor-pointer"} flex-1`}
                onClick={() => setShowDetails(true)}

            >
                <div className="flex justify-between">
                    {forUser == 'supervisor'
                        ?
                        <p className="text-text text-lg sm:text-xl font-body font-bold">{`${demand.student.user.first_name} ${demand.student.user.last_name}`}</p>

                        :
                        <h1 className=" text-text text-lg sm:text-xl font-body font-bold ">{demand.title}</h1>
                    }

                    {forUser == 'hod'
                        ?
                        <p className={`${demand.status == 1 ? "text-green-800 bg-[#A2E891]" : demand.status == 2 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                            {demand.status == 1 ? "approved" : demand.status == 2 ? "rejected" : "pending"}
                        </p>
                        :
                        forUser == 'supervisor'
                            ?

                            <p className={`${demand.status == 3 ? "text-green-800 bg-[#A2E891]" : demand.status == 4 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                                {demand.status == 3 ? "approved" : demand.status == 4 ? "rejected" : "pending"}
                            </p>

                            :
                            <p className={`${demand.status == 3 ? "text-green-800 bg-[#A2E891]" : demand.status == 2 || demand.status == 4 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                                {demand.status == 3 ? "approved" : demand.status == 2 || demand.status == 4 ? "rejected" : "pending"}
                            </p>
                    }

                </div>
                {forUser == "hod" ?
                    <p className="text-primary font-medium">{`${demand.student.user.first_name} ${demand.student.user.last_name}`}</p>
                    :
                    forUser == 'supervisor'
                        ?
                        <p className="text-primary font-medium">{demand.title}</p>
                        :
                        <p className="text-primary font-medium">{demand.company}</p>
                }
                <div className="flex gap-4 sm:gap-6 text-lightText font-medium mt-4 text-sm sm:text-base">
                    <p className="flex items-center gap-2">
                        <Category size={18} />
                        demand
                    </p>
                    {
                        forUser == "hod" ?
                            <p className="flex items-center gap-2">
                                <Book1 size={18} />
                                {demand.student.level == 'l3' ? 'license 3' : 'master 2'}
                            </p>

                            :
                            <p className="flex items-center gap-2">
                                <Timer1 size={18} />
                                {`${demand.duration} days`}
                            </p>
                    }
                    <p className="flex items-center gap-2">
                        <Calendar size={18} />
                        {relativeDate(demand.created_at)}

                    </p>
                </div>
            </div>
            {/* show delete and edit buttons only for student  */}
            {forUser == 'student' && (

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center">
                    {/* disable buttons when demand is already accepted by hod  */}
                    <Edit
                        color={demand.status == 0 ? "#7CDF64" : "#9D9CAC"}
                        className={`${demand.status == 0 ? "cursor-pointer" : "pointer-events-none"} hover:scale-110 transition`}
                        onClick={() => setShowEditDemand(true)}

                    />
                    <Trash
                        color={demand.status == 0 ? "#F64A4A" : "#9D9CAC"}
                        className={`${demand.status == 0 ? "cursor-pointer" : "pointer-events-none"} hover:scale-110 transition`}
                        onClick={() => setShowDelete(true)}
                    />
                </div>
            )}

            {/* show demand details only for hod or supervisor not student  */}
            {(showDetails == true && (forUser == 'hod' || forUser == 'supervisor')) &&

                <DemandDetails forUser={forUser} demand={demand} setShowDetails={setShowDetails} />
            }
            {/* show edit demand form only student  */}
            {(showEditDemand == true && (forUser == 'student')) &&

                <EditDemand demand={demand} setShowEditDemand={setShowEditDemand} />
            }
            {/* delete modal */}
            {(showDelete && (forUser == 'student')) &&
                <DeleteModal For='demand' demandTitle={demand.title} demandId={demand.id} setShowDelete={setShowDelete} />
            }
        </div>
    )
}

export default Demand 