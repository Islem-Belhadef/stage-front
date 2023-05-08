import { ExportSquare, Category, Calendar, Timer1, Book1 } from "iconsax-react"


const Application = ({ application, forUser }) => {
    

    return (
        <div className="py-6 px-8 border-b border-gray-200 flex justify-between">
            <div className="flex-1">
                <div className="flex justify-between">
                    <h1 className=" text-text text-lg sm:text-xl font-body font-bold ">{application.title}</h1>
                    <p className={`${application.status == 3 ? "text-green-800 bg-[#A2E891]" : application.status == 2 || application.status == 4 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                        {application.status == 3 ? "approved" : application.status == 2 || application.status == 4 ? "rejected" : "pending"}
                    </p>
                </div>
                {forUser == "hod" ?
                    <p className="text-primary font-medium">{application.student}</p>
                    :
                    <p className="text-primary font-medium">{application.company}</p>
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
                                {application.level}
                            </p>

                            :
                            <p className="flex items-center gap-2">
                                <Timer1 size={18} />
                                {application.duration}
                            </p>
                    }

                    <p className="flex items-center gap-2">
                        <Calendar size={18} />
                        {application.created_at}
                    </p>
                </div>
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

export default Application 