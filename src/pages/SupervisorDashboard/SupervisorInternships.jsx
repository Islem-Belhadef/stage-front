import { useState, useEffect } from "react"
import authAxios from "../../api/axios"
//assets
import Loader from "../../components/Loader"
import SupervisorInternship from "../../components/SupervisorIntership"

const SupervisorInternships = () => {

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
            {internships.map((internship) => {
              return <SupervisorInternship internship={internship} key={internship.id} />
            })}

          </>
          :
          <p>no internships</p>
      )}
        </div>
    )
}

export default SupervisorInternships