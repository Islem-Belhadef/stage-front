import { useState, useEffect } from "react"
import authAxios from "../../api/axios"
//assets
import Loader from "../../components/Loader"
import StudentInternship from "../../components/StudentInternship"

const StudentInternships = () => {


  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authAxios.get('/internships')
      .then(res => {
        console.log(res)
        setInternships(res.data.internships)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <div className="flex flex-col">

      {loading && (
        <div className="bg-white rounded-xl shadow-md flex-1">
          <Loader />
          <Loader />
          <Loader />
        </div>)}

      {!loading && (
        internships.length > 0
          ?

          <>
            {internships.filter((currentInternship) => new Date(currentInternship.end_date).getTime() > new Date().getTime()).map((internship) => {
              return <StudentInternship internship={internship} key={internship.id} finished={false} />
            })}

            {internships.filter((finishedInternship) => new Date(finishedInternship.end_date).getTime() < new Date().getTime()).length>0 &&
            <h1 className="text-text font-header text-xl font-medium mt-9 mb-4 ml-3">
              Finished internships
            </h1>
            }

            { 
            internships.filter((finishedInternship) => new Date(finishedInternship.end_date).getTime() < new Date().getTime()).map((internship) => {
              return <StudentInternship internship={internship} key={internship.id} finished={true} />
            })}



          </>
          :
          <p>no internships</p>
      )}
     
    </div>
  )
}

export default StudentInternships
