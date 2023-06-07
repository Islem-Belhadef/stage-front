import { ExportSquare, Category, Calendar, Timer1, Book1 } from "iconsax-react"
import relativeDate from "../dates/relativeDate"
import ApplicationDetails from "./ApplicationDetails"
import { useState } from "react"



const Application = ({ application, forUser }) => {

    const [showDetails, setShowDetails] = useState(false)


    return (
        <div className="py-6 px-8 border-b border-gray-200 flex justify-between">
            <div className="flex-1 cursor-pointer"
            onClick={() => setShowDetails(true)}
            >
                <div className="flex justify-between">
                    {forUser == 'supervisor'
                        ?
                        <p className="text-text text-lg sm:text-xl font-body font-bold">{`${application.student.user.first_name} ${application.student.user.last_name}`}</p>

                        :
                        <h1 className=" text-text text-lg sm:text-xl font-body font-bold ">{application.offer.title}</h1>
                    }

                    {forUser == 'hod'
                        ?
                        <p className={`${application.status == 1 ? "text-green-800 bg-[#A2E891]" : application.status == 2 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                            {application.status == 1 ? "approved" : application.status == 2 ? "rejected" : "pending"}
                        </p>
                        :
                        forUser == 'supervisor'
                            ?

                            <p className={`${application.status == 3 ? "text-green-800 bg-[#A2E891]" : application.status == 4 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                                {application.status == 3 ? "approved" : application.status == 4 ? "rejected" : "pending"}
                            </p>

                            :
                            <p className={`${application.status == 3 ? "text-green-800 bg-[#A2E891]" : application.status == 2 || application.status == 4 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                                {application.status == 3 ? "approved" : application.status == 2 || application.status == 4 ? "rejected" : "pending"}
                            </p>
                    }
                </div>
                {forUser == "hod" ?
                    <p className="text-primary font-medium">{`${application.student.user.first_name} ${application.student.user.last_name}`}</p>
                    :
                    forUser == 'supervisor'
                        ?
                        <p className="text-primary font-medium">{application.offer.title}</p>
                        :
                        <p className="text-primary font-medium">{application.offer.supervisor.company.name}</p>
                }

                <div className="flex gap-4 sm:gap-6 text-lightText font-medium mt-4 text-sm sm:text-base">
                    <p className="flex items-center gap-2">
                        <Category size={18} />
                        application
                    </p>
                    {
                        forUser == "hod" ?
                            <p className="flex items-center gap-2">
                                <Book1 size={18} />
                                {application.offer.level == "l3" ? "License 3" : "Master 2"}
                            </p>

                            :
                            <p className="flex items-center gap-2">
                                <Timer1 size={18} />
                                {application.offer.duration} days
                            </p>
                    }

                    <p className="flex items-center gap-2">
                        <Calendar size={18} />
                        {relativeDate(application.created_at)}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ExportSquare
                    color="#383EBE"
                    className="cursor-pointer hover:scale-110 transition"
                />
            </div>
            {/* show application details only for hod or supervisor not student  */}
            {(showDetails == true && (forUser=='hod'|| forUser=='supervisor')) &&

                <ApplicationDetails forUser={forUser} application={application} setShowDetails={setShowDetails} />
            }
        </div>
    )
}

export default Application 