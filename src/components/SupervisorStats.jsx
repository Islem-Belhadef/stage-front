//react and router 
import { Link} from "react-router-dom"
//assets
import { Add } from "iconsax-react"


const SupervisorStats = ({offers,applications}) => {


    return (
        <div className="flex flex-row items-center">
            <div className="flex px-3 py-4 gap-2 w-full bg-white rounded-xl sm:w-fit">
               
                <div className="flex items-center gap-2 sm:block w-1/4 pl-4 sm:min-w-[9rem]">
                    <p className=" text-xl text-primary font-semibold sm:mb-2">{offers}</p>
                    <p className=" text-grayText md:text-lg font-header font-semibold">offers</p>

                </div>
                <div className="flex items-center gap-2 sm:block border-l border-lightGray w-1/4 pl-4 sm:min-w-[11rem]">
                    <p className=" text-xl text-primary font-semibold sm:mb-2">{applications}</p>
                    <p className=" text-grayText md:text-lg font-header font-semibold">applications</p>

                </div>
           
                <Link to={"/internship/offer"} className="sm:hidden primary-btn !px-4 !py-2 ml-auto">
                   <Add size={30} />
                </Link>

            </div>
            <Link
                to={"/internship/offer"}
                className="hidden sm:flex flex-col mr-auto ml-3 xl:ml-8 xl:mr-0 py-4 px-2 items-center h-fit rounded-xl justify-center gap-1 w-36 "
            >
                <span className="w-10 h-10 rounded-full flex justify-center items-center bg-primary">
                    <Add color="white" size={35} variant="Linear" />
                </span>
                <p className="text-primary font-body font-medium text-sm">new offer</p>
            </Link>
        </div>
    )
}

export default SupervisorStats 