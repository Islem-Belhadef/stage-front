import { Calendar, Import } from "iconsax-react"
import authAxios from "../api/axios"


const StudentInternship = ({internship ,finished}) =>{
  

    const handleDownloadCertificate = () => {
        authAxios
          .get(`internships/certificate/${internship.id}`,
        { responseType: "blob"}
           )
          .then((response) => {
            const blob = new Blob([response.data], { type: "application/pdf" })
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "certificate.pdf")
            link.click()
            window.URL.revokeObjectURL(url)
          })
          .catch((error) => {
            console.error("Error while downloading pdf:", error.response.data)
          })
      }

    
      const handleDownloadEvaluation = () => {
        authAxios
          .get(`internships/evaluation/${internship.id}`, {
            responseType: "blob"}
            )
          .then((response) => {
            const blob = new Blob([response.data], { type: "application/pdf" })
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "evaluation.pdf")
            link.click()
            window.URL.revokeObjectURL(url)
          })
          .catch((error) => {
            console.error("Error:", error.response.data)
          })
      }


    return(
        <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className={`${finished==true ?"border-b" :"border-none"} border-b border-gray-200 px-4 py-5 sm:px-10 sm:py-6`}>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-text text-lg sm:text-xl font-body font-bold">
              {internship.title}
            </h1>
            <p className="text-text text-sm sm:text-base flex items-center gap-1 sm:gap-2 font-medium ">
              <div className={`${finished==true ?"bg-[#61CD4F]" :"bg-gray-300"} w-3 h-3 sm:relative sm:top-[2px] rounded-full `}></div>
             {finished==true ?"Done" :"In progress"} 
            </p>
          </div>

          <div className="flex sm:items-center gap-1 sm:gap-0 flex-col sm:flex-row mb-10 sm:mb-14">
            <p className="text-grayText text-sm font-medium mr-2">
              supervised by
            </p>
            <p className="sm:hidden text-primary font-medium mr-5">
              {internship.supervisor.user.first_name}{internship.supervisor.user.last_name} - {internship.supervisor.company.name}
            </p>
            <p className="hidden sm:block text-primary font-medium mr-4">
            {internship.supervisor.user.first_name}{internship.supervisor.user.last_name}
            </p>
            <p className="hidden sm:block text-grayText text-sm font-medium mr-2">
              at
            </p>
            <p className="hidden sm:block text-primary font-medium mr-5">
            {internship.supervisor.company.name}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Calendar size={18} color="#616373" className="sm:hidden " />
            <p className="sm:text-text text-grayText text-sm sm:text-base font-medium">
            {finished==true ?`${internship.start_date} - ${internship.end_date}`: `started  ${internship.start_date}`} 
             
            </p>
          </div>
        </div>
        {finished==true && (
        <div className="flex justify-end sm:gap-5 px-4 py-2 sm:px-10 sm:py-2">
          <button
            className="flex items-center gap-1 text-sm sm:text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={handleDownloadEvaluation}
          >
            <Import size={20} color="#272937" />
            evaluation
          </button>
          <button
            className="flex items-center gap-1 text-sm sm:text-base font-medium px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={handleDownloadCertificate}
          >
            <Import size={20} color="#272937" />
            certificate
          </button>
        </div>

        )}
      </div>
      
    )

}

export default StudentInternship