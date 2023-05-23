import { CloseCircle, TickCircle } from "iconsax-react"

const Message = ({ type,text }) => {

    return (
        <div className={`${type =="error"?'bg-red-500':'bg-green-500'} fixed top-12 flex items-center gap-2 min-w-max left-1/2 text-base md:text-lg -translate-x-1/2 -translate-y-1/2 rounded-md text-white pr-8 pl-4 py-4`}>
        {type == "success"?<TickCircle color="white"/>:<CloseCircle color="white"/>}
        <p>{text}</p>
        </div>
    )
}

export default Message 