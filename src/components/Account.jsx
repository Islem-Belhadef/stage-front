// Assets
import { Edit, Category } from "iconsax-react"
import studentImage from "../assets/student.svg"
import supervisorImage from "../assets/supervisor.svg"
import hodImage from "../assets/hod.svg"

const Account = ({ account }) => {

  let img =
    account.type === "student"
      ? studentImage
      : account.type === "hod"
      ? hodImage
      : supervisorImage

  return (
    <div className="flex p-6 border-b border-b-gray-200 cursor-pointer hover:bg-gray-200/10">
      <div className="flex-1">
        <div className="flex items-center gap-8">
          <div
            className="w-1/6 h-16 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div>
            <h1 className="font-body text-text text-lg sm:text-xl font-bold">
              {account.lastName} {account.firstName}
            </h1>
            <p className="text-primary">{account.email}</p>
          </div>
        </div>
        <div className="flex gap-6 items-center text-lightText font-medium mt-4">
          <p className="flex gap-2 items-center">
            <Category color="#9D9CAC" size={18} />
            {account.type}
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-center">
        <Edit
          color="#383EBE"
          className="cursor-pointer hover:scale-110 transition"
        />
      </div>
    </div>
  )
}

export default Account
