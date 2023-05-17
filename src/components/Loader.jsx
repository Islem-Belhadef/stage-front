const Loader = () => {

    return (
        <div className="flex flex-col p-6 border-b border-b-gray-200 gap-6 animate-pulse">
            
                <div className="flex gap-5">
                    <div className=" w-32 sm:w-1/5 h-16 bg-gray-200 rounded-xl ">

                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div className=" w-[85%] sm:w-[40%] h-5 bg-gray-200 rounded-xl ">
                            
                        </div>
                        <div className=" w-24 h-3 bg-gray-200 rounded-lg ">
                            
                        </div>
                        
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <div className=" w-3/4 h-3 bg-gray-200 rounded-xl ">
                        
                    </div>
                   
                   
                </div>
        
        </div>
    )
}

export default Loader 