//react 
import { useState, useEffect } from "react"
import authAxios from "../../api/axios"
import { Link } from "react-router-dom"

//assets
import ApplicationsStats from "../../components/ApplicationsStats"
import Application from "../../components/Application"
import Loader from "../../components/Loader"
import emptyBox from "../../assets/empty-box.svg"

const StudentApplications = () => {

   const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authAxios.get('/applications')
      .then(res => {
        console.log(res)
        setApplications(res.data.applications)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-8">
        <ApplicationsStats showButton={true}  total={applications.length} pending={applications.filter((application)=>application.status == 0||application.status == 1).length} approved={applications.filter((application)=>application.status == 3).length} rejected={applications.filter((application)=>application.status == 2||application.status == 4).length} />
      </div>
      
      {loading && (
        <div className="bg-white rounded-xl shadow-md flex-1">
          <Loader />
          <Loader />
          <Loader />
        </div>)}
      {!loading && (
        applications.length > 0
          ?
          <div className="bg-white rounded-xl shadow-md flex-1">
            {applications.map((application) => {
              return (
               <Link to={`/internship/offer/${application.offer_id}`}>
                  <Application application={application} key={application.title} />
              </Link>
              )
            })}
          </div>
          :
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200 pb-10 px-10 flex flex-col flex-1 justify-center items-center">
          <img src={emptyBox} alt="empty box" className="w-2/3" />
          <h1 className="font-header text-text text-2xl font-bold mb-4">
            Nothing
          </h1>
          <p className="font-body text-lightText px-7 md:px-20">
            You don't have any internship applications just yet,
            <Link to="/internship/offers" className="text-primary">
              check our internship offers
            </Link>
          </p>
        </div>
        )}
     

    </div>
  )
}

export default StudentApplications