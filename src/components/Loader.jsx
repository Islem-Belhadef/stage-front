const Loader = ({ layout }) => {

    return (
        <>
            {(layout == 'grid')
                ?
                (<div className="grid grid-cols-3 gap-x-2 md:gap-x-12 gap-y-4 w-full md:w-4/5 animate-pulse mb-4 ">

                    <div className=" h-6 rounded-lg bg-gray-200"></div>
                    <div className=" h-6 rounded-lg col-span-2 bg-gray-200"></div>

                </div>)
                :
                (layout == 'line')
                    ?
                    <div className="w-full max-w-[20rem] px-2 animate-pulse">
                        <div className=" h-8 rounded-lg bg-gray-200"></div>
                    </div>
                    :
                    (layout == 'table')
                        ?

                        

                   <div className="grid grid-cols-5 gap-x-4 py-6 px-6 md:py-8 md:px-10 border-b animate-pulse border-b-gray-200"> 

                   
                    <div className=" bg-gray-200 col-span-2 h-5 w-3/4  rounded-md"></div>
                     <div className="bg-gray-200  h-5 rounded-md"></div>
                    <div className="bg-gray-200  h-5 rounded-md"></div>
                    <div className="bg-gray-200  h-5 rounded-md"></div> 
                    <div className=" h-5"></div>


                    </div>

                        :
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
            }

        </>


    )
}

export default Loader 