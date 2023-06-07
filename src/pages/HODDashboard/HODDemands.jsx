//react 
import { useState, useEffect } from "react"
import authAxios from "../../api/axios"

// Assets
import emptyBox from "../../assets/empty-box.svg"
import DemandStats from "../../components/DemandStats"
import Demand from "../../components/Demand"
import Loader from "../../components/Loader"


const HODDemands = () => {

  const [demands, setDemands] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authAxios.get('/demands')
      .then(res => {
        console.log(res)
        setDemands(res.data.hodDemands)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-8">
        {/* the DemandStats component props differ from actor to actor  */}
        <DemandStats showButton={false} total={demands.length} pending={demands.filter((demand) => demand.status == 0).length} approved={demands.filter((demand) => demand.status == 1).length} rejected={demands.filter((demand) => demand.status == 2).length} />

      </div>
      {loading && (
        <div className="bg-white rounded-xl shadow-md flex-1">
          <Loader />
          <Loader />
          <Loader />
        </div>)}
      {!loading && (
        demands.length > 0
          ?
          <div className="bg-white rounded-xl shadow-md flex-1">


            {demands.map((demand) => {
              return <Demand demand={demand} forUser={"hod"} key={demand.id} />
            })}
          </div>
          :
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200 pb-10 px-10 flex flex-col flex-1 justify-center items-center">
          <img src={emptyBox} alt="empty box" className="w-2/3" />
          <h1 className="font-header text-text text-2xl font-bold mb-4">
            Nothing
          </h1>
          <p className="font-body text-lightText px-7 md:px-20">
            You don't have any internship demands just yet
          </p>
        </div>

          )}

    </div>
  )
}

export default HODDemands