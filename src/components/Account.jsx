import { useState } from "react"

// Assets
import { Edit, Category, Trash } from "iconsax-react"
import studentImage from "../assets/student.svg"
import supervisorImage from "../assets/supervisor.svg"
import hodImage from "../assets/hod.svg"
import DeleteModal from "./DeleteModal"
import EditAccount from "./EditAccount"

const Account = ({ account }) => {

  const [showDelete, setShowDelete] = useState(false)
  const [showEditAccount, setShowEditAccount] = useState(false)

  

  let img =
    account.role == 0
      ? studentImage
      : account.role == 1
        ? hodImage
        : supervisorImage

  return (
    <div className="flex p-6 border-b border-b-gray-200 cursor-pointer hover:bg-gray-200/10">
      <div className="flex-1">
        <div className="flex items-center gap-8">
          <div
            className="w-1/6 h-16 min-w-[2.5rem] bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div>
            <h1 className="font-body text-text text-lg sm:text-xl font-bold">
              {account.last_name} {account.first_name}
            </h1>
            <p className="text-primary">{account.email}</p>
          </div>
        </div>
        <div className="flex gap-6 items-center text-lightText font-medium mt-4">
          <p className="flex gap-2 items-center">
            <Category color="#9D9CAC" size={18} />
            {account.role == 0 ? "student" : account.role == 1 ? "Head of department" : "supervisor"}
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
        <Edit
          color="#7CDF64"
          className="cursor-pointer hover:scale-110 transition"
          onClick={() => setShowEditAccount(true)}

        />
        <Trash
          color="#F64A4A"
          className="cursor-pointer hover:scale-110 transition"
          onClick={() => setShowDelete(true)}
        />
      </div>

      {showDelete==true &&
        <DeleteModal For='account' accountId={account.id} accountName={account.last_name +' '+account.first_name} setShowDelete={setShowDelete} />
      }
      {showEditAccount ==true &&
        <EditAccount account={account} setShowEditAccount={setShowEditAccount}/>
      }
    </div>
  )
}

export default Account
