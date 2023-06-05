import { useState } from "react"
// assets 
import { Calendar } from "iconsax-react"
import EvaluationForm from "./EvaluationForm"

const SupervisorInternship = ({internship}) => {

    const [showPresenceForm , setShowPresenceForm] = useState(false)
    const [showEvaluationForm , setShowEvaluationForm] = useState(false)


    return(
        <div className="flex flex-col gap-3 mb-7">
                <div className="bg-white rounded-xl flex-col shadow-sm px-4 py-5 sm:px-10 sm:py-6">
                    <div className="flex items-center justify-between mb-1">
                        <h1 className="text-text text-base sm:text-xl font-body font-bold my-1">
                            {internship.title}
                        </h1>
                      
               {
                showPresenceForm == false && (
                        <button className=" text-text text-sm font-medium hover:bg-gray-200 hover:bg-opacity-70 px-2 py-2 rounded-md cursor-pointer"
                            onClick={()=>{setShowPresenceForm(true);console.log('clicked ')}}
                            
                        >
                            mark presence
                        </button>

                )
               }
                      
                    </div>

                    <div className="mb-10 sm:mb-14">

                        <p className=" text-primary font-medium mr-5">
                            1 intern
                        </p>

                    </div>

                    <div className="flex gap-2 items-center">
                        <p className="hidden sm:block text-grayText text-sm font-medium">
                            started
                        </p>
                        <Calendar size={18} color="#616373" className="sm:hidden " />
                        <p className="sm:text-text text-grayText text-sm sm:text-base font-medium">
                       {internship.start_date}
                        </p>
                    </div>
                </div>
                {
                 showPresenceForm==false &&
                    (
                    <div className=" flex items-center justify-between bg-white shadow-sm rounded-md w-[90%] lg:w-3/4 ml-auto px-3 sm:px-10 py-3">
                        <p className="text-text text-base font-medium">{internship.student.user.first_name} {internship.student.user.last_name}</p>
                        <div className="flex gap-2">
                            <button
                                className="text-text text-sm font-medium hover:bg-gray-200 hover:bg-opacity-70 px-2 py-2 rounded-md cursor-pointer"
                            onClick={()=>setShowEvaluationForm(true)}
                            >
                                evaluate
                            </button>
                            <button
                                className="text-text text-sm font-medium hover:bg-gray-200 hover:bg-opacity-70 px-2 py-2 rounded-md cursor-pointer"
                            // onClick={}
                            >
                                certificate
                            </button>
                        </div>
                    </div>

                    )
                }
                {
              
               (showPresenceForm == true) &&
                  (
                    <div className="bg-white shadow-sm rounded-md w-full sm:w-[90%] lg:w-3/4 ml-auto px-3 sm:px-10 py-3">
                        <div className="flex items-center justify-between">
                            <p className="text-text text-sm md:text-base font-medium">
                                <span className="text-grayText font-normal text-sm md:text-base mr-2">for</span>
                                {`${new Date().getDate()} ${new Date().toLocaleString('en-US', { month: 'short' })} ${new Date().getFullYear()}`}
                            </p>
                            <p className="text-grayText text-sm md:text-base">presence</p>
                        </div>
                        <form>
                            <div className="flex justify-between items-center mt-5 mb-7 ml-2 md:ml-6">
                                <label className="text-text font-medium flex-1" htmlFor="presence">damous med achraf</label>
                                <input type="checkbox" name="presence" id="presence" />
                            </div>
                        </form>
                        <div className="flex gap-4 justify-end">
                        <button
                                className="text-primary text-sm md:text-base font-medium hover:bg-primary hover:bg-opacity-10 px-2 py-1 rounded-md cursor-pointer"
                             onClick={()=>setShowPresenceForm(false)}
                            
                            >
                                Cancel
                            </button>
                            <button
                                className="text-primary text-sm md:text-base font-medium hover:bg-primary hover:bg-opacity-10 px-2 py-1 rounded-md cursor-pointer"
                            // onClick={}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                  )
                }

                {
                   showEvaluationForm ==true && (
                    <EvaluationForm internship={internship} setShowEvaluationForm={setShowEvaluationForm}/>
                   )
                }
            </div>

    )

}

export default SupervisorInternship