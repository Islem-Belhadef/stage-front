import { Danger, TickCircle } from "iconsax-react"
import authAxios from "../api/axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


const DeleteModal = ({ For, setShowDelete, offerTitle, offerId, accountId, accountName ,demandId , demandTitle}) => {

    const navigate = useNavigate()
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    const handleDelete = () => {
        const url = For == 'offer' ? `offers/destroy/${offerId}` :For=='account'? `accounts/destroy/${accountId}`:`demands/destroy/${demandId}`
        authAxios.delete(url)
            .then(res => {
                if(res.status == 200){
                    console.log(res)
                    setDeleteSuccess(true)
                    setTimeout(() => {
                        navigate(0)
                    }, 1300);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className=" flex justify-center items-center fixed bg-slate-800 backdrop-blur-sm bg-opacity-70 top-0 bottom-0 right-0 left-0">
            <div className=" bg-white h-fit px-6 sm:px-10 py-8 rounded-xl "
                style={{ width: "clamp(350px,60%,600px)" }}
            >
                {deleteSuccess == false && (
                    <>
                        <div className="flex gap-4">

                            <div className="bg-red-200 rounded-full w-9 h-9 flex justify-center items-center">

                                <Danger color="#b91c1c" />
                            </div>
                            <div className="flex-1">
                                <h1 className="font-header text-text text-xl font-bold mb-2">
                                    Delete {For == 'offer' ? 'offer' : For=='account'? 'account'  :'demand'}
                                </h1>
                                <p className="font-body text-grayText">
                                    Are you sure you want to delete {For == 'offer' ?  <span className="font-semibold">{offerTitle} internship offer</span> 
                                     :For=='account'? <span className="font-semibold">{accountName} account</span>: <span className="font-semibold">{demandTitle} demand</span>}
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-4 w-full justify-end mt-7 ">
                            <button className="py-2 px-7 rounded-lg border border-gray-600 hover:bg-gray-100 "
                                onClick={() => { setShowDelete(false) }}
                            >cancel</button>
                            <button className="py-2 px-7 rounded-lg bg-red-600 text-white hover:bg-red-700"
                                onClick={handleDelete}
                            >delete</button>
                        </div>

                    </>
                )}
                {deleteSuccess == true && (
                    <div className="flex flex-col items-center gap-4">
                        <TickCircle size={30} color="#b91c1c" />
                        <h1 className="font-header text-center text-text text-lg font-bold mb-2">
                        {For == 'offer' ? 'offer' : For == 'account'? 'account':'demand'} successfully deleted
                        </h1>
                    </div>

                )}

            </div>
        </div>
    )
}

export default DeleteModal