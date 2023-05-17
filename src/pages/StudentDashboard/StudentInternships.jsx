//assets
import { Calendar,Import  } from "iconsax-react"


const StudentInternships = () => {


    const applications = [
        {
            student: "Damous Achraf",
            title: "software engineer",
            company: "sonatrach",
            duration: "30 days",
            status: 0,
            created_at: "05 may 2023",
            level: "license 3"
        },
        {
            student: "Belhadef Islem",
            title: "mobile developer",
            company: "air algerie",
            duration: "30 days",
            status: 0,
            created_at: "2 months ago",
            level: "license 3"
        },
        {
            student: "Ghanem Akram",
            title: "web developer ",
            company: "mobilis",
            duration: "15 days",
            status: 4,
            created_at: "10 april 2023",
            level: "license 3"
        },

    ]


    return (
        <div className="flex flex-col">

            <div className="bg-white rounded-xl flex-col shadow-sm px-4 py-5 sm:px-10 sm:py-6">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-text text-lg sm:text-xl font-body font-bold">web developer internship</h1>
                    <p className="text-text text-sm sm:text-base flex items-center gap-1 sm:gap-2 font-medium ">
                        <div className=" w-3 h-3 sm:relative sm:top-[2px] rounded-full bg-gray-300"></div>
                        in progress
                    </p>
                </div>

                <div className="flex sm:items-center gap-1 sm:gap-0 flex-col sm:flex-row mb-10 sm:mb-14">
                    <p className="text-grayText text-sm font-medium mr-2">supervised by</p>
                    <p className="sm:hidden text-primary font-medium mr-5">Achraf Hakimi - Ooredoo</p>
                    <p className="hidden sm:block text-primary font-medium mr-4">Achraf Hakimi</p>
                    <p className="hidden sm:block text-grayText text-sm font-medium mr-2">at</p>
                    <p className="hidden sm:block text-primary font-medium mr-5">Ooredoo</p>
                </div>

                <div className="flex gap-2 items-center">
                    <p className="hidden sm:block text-grayText text-sm font-medium">started:</p>
                    <Calendar size={18} color="#616373" className="sm:hidden " />
                    <p className="sm:text-text text-grayText text-sm sm:text-base font-medium">8 may 2022</p>
                </div>
            </div>


            <h1 className="text-text font-header text-xl font-medium mt-9 mb-4 ml-3">Finished internships</h1>

            <div className="bg-white rounded-xl shadow-sm ">
                <div className="border-b border-gray-200 px-4 py-5 sm:px-10 sm:py-6">
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-text text-lg sm:text-xl font-body font-bold">UI/UX Designer internship</h1>
                        <p className="text-text text-sm sm:text-base flex items-center gap-1 sm:gap-2 font-medium ">
                            <div className=" w-3 h-3 sm:relative sm:top-[2px] rounded-full bg-[#61CD4F]"></div>
                            Done
                        </p>
                    </div>

                    <div className="flex sm:items-center gap-1 sm:gap-0 flex-col sm:flex-row mb-10 sm:mb-14">
                        <p className="text-grayText text-sm font-medium mr-2">supervised by</p>
                        <p className="sm:hidden text-primary font-medium mr-5">Mohamed Benali - Yassir</p>
                        <p className="hidden sm:block text-primary font-medium mr-4">Mohamed Benali</p>
                        <p className="hidden sm:block text-grayText text-sm font-medium mr-2">at</p>
                        <p className="hidden sm:block text-primary font-medium mr-5">Yassir</p>
                    </div>

                    <div className="flex gap-2 items-center">

                        <Calendar size={18} color="#616373" className="sm:hidden " />
                        <p className="sm:text-text text-grayText text-sm sm:text-base font-medium">8 may 2022 - 7 june 2022</p>
                    </div>
                </div>
                <div className="flex justify-end sm:gap-5 px-4 py-2 sm:px-10 sm:py-2">
                    <button className="flex items-center gap-1 text-sm sm:text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100">
                        <Import size={20} color="#272937"/>
                        evaluation
                    </button>
                    <button className="flex items-center gap-1 text-sm sm:text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100">
                        <Import size={20} color="#272937"/>
                        certificate
                    </button>
                    
                </div>
            </div>



        </div>
    )
}

export default StudentInternships