import { ExportSquare, Category, Calendar, Timer1,Book1 } from "iconsax-react"


const Demand = ({ demand ,forUser}) => {
    

    return (
        <div className="py-6 px-8 border-b border-gray-200 flex justify-between">
            <div className="flex-1">
                <div className="flex justify-between">
                    <h1 className=" text-text text-lg sm:text-xl font-body font-bold ">{demand.title}</h1>
                    {forUser =='hod'
                    ?
                    <p className={`${demand.status == 1 ? "text-green-800 bg-[#A2E891]" : demand.status == 2 ? "text-red-700 bg-[#FAC5C5]" : "text-grayText bg-[#D9D9D9] "} text-sm px-3 rounded-2xl leading-relaxed font-medium mr-8`}>
                    {demand.status == 1 ? "approved" : demand.status == 2 ? "rejected" : "pending"}
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
                                {demand.student.semester<=6?'license 3':'master 2'}
                            </p>

                            :
                            <p className="flex items-center gap-2">
                                <Timer1 size={18} />
                               {`${demand.duration} days`}
                            </p>
                    }
                    <p className="flex items-center gap-2">
                        <Calendar size={18} />
                        {demand.created_at}
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

export default Demand 