//react and router 
import { Link} from "react-router-dom"
//assets
import { Add } from "iconsax-react"


const AccountsStats = () => {


    return (
        <div className="flex flex-row items-center">
            <div className="flex p-3 gap-2 w-full bg-white rounded-xl sm:w-3/4 sm:max-w-3xl">
                <div className="flex items-center sm:block sm:w-1/4 pl-4">
                    <p className=" text-2xl sm:text-3xl text-primary font-semibold pr-3">4</p>
                    <p className=" text-grayText text-lg sm:text-lg font-header font-bold ">accounts</p>

                </div>
                <div className="hidden sm:block border-l border-lightGray w-1/4 pl-4">
                    <p className=" text-2xl text-primary font-semibold mb-2">2</p>
                    <p className=" text-grayText text-sm md:text-base font-header font-semibold">students</p>

                </div>
                <div className="hidden sm:block border-l border-lightGray w-1/4 pl-4">
                    <p className=" text-2xl text-primary font-semibold mb-2">1</p>
                    <p className=" text-grayText text-sm md:text-base font-header font-semibold">supervisors</p>

                </div>
                <div className="hidden sm:block border-l border-lightGray w-1/4 pl-4">
                    <p className=" text-2xl text-primary font-semibold mb-2">2</p>
                    <p className="text-grayText text-sm md:text-base font-header font-semibold">head of depts</p>

                </div>
                <Link to={"/addaccount"} className="sm:hidden primary-btn !px-4  ml-auto">Add account</Link>

            </div>
            <Link
                to={"/addaccount"}
                className="hidden sm:flex flex-col mx-auto xl:ml-8 xl:mr-0 py-4 px-2 items-center h-fit rounded-xl justify-center gap-1 w-36 "
            >
                <span className="w-10 h-10 rounded-full flex justify-center items-center bg-primary">
                    <Add color="white" size={35} variant="linear" />
                </span>
                <p className="text-primary font-body font-medium text-sm">new account</p>
            </Link>
        </div>
    )
}

export default AccountsStats 