const Avatar = ({ firstName,lastName }) => {

    const getInitials = (firstName,lastName) => {
        let initials = firstName.trim()[0] + lastName.trim()[0]
        return initials
    }

    var initials = getInitials(firstName,lastName)

    return (
        <div>
            <div
                className=" w-10 h-10 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full flex justify-center items-center"
            >
                <p className="uppercase text-xl text-white leading-tight">{initials}</p>
            </div>


        </div>
    )
}

export default Avatar 