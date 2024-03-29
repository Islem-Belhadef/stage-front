//react 
import { useState, useEffect } from "react"
import authAxios from "../../api/axios"
import { Link } from "react-router-dom"

//assets 
import emptyBox from "../../assets/empty-box.svg"
import Loader from "../../components/Loader"
import DemandStats from "../../components/DemandStats"
import Demand from "../../components/Demand"

const SupervisorDemands = () => {

    const [demands, setDemands] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        authAxios.get('/demands')
            .then(res => {
                console.log(res)
                setDemands(res.data.demands)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-8">
                {/* <ApplicationsStats showButton={false} total={applications.length} pending={applications.filter((application) => application.status == 1).length} approved={applications.filter((application) => application.status == 3).length} rejected={applications.filter((application) => application.status == 4).length} /> */}
                <DemandStats showButton={false} total={demands.length} pending={demands.filter((demand) => demand.status == 1).length} approved={demands.filter((demand) => demand.status == 3).length} rejected={demands.filter((demand) => demand.status == 4).length} />

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
                            return <Demand demand={demand} forUser={"supervisor"} key={demand.id} />
                        })}

                    </div>

                    :
                    <div className="bg-white rounded-xl shadow-lg shadow-gray-200 pb-10 px-10 flex flex-col flex-1 justify-center items-center">
                        <img src={emptyBox} alt="empty box" className="w-2/3" />
                        <h1 className="font-header text-text text-2xl font-bold mb-4">
                            Nothing
                        </h1>
                        <p className="font-body text-lightText px-7 md:px-20">
                            You don't have any internship demands yet,
                        </p>
                    </div>

            )
            }


        </div>
    )

}

export default SupervisorDemands