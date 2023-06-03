//react 
import { useState, useEffect } from "react"
import authAxios from "../../api/axios"
import { Link } from "react-router-dom"

//assets 
import emptyBox from "../../assets/empty-box.svg"
import ApplicationsStats from "../../components/ApplicationsStats"
import Application from "../../components/Application"
import Loader from "../../components/Loader"

const SupervisorApplications = () => {

    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        authAxios.get('/applications')
            .then(res => {
                console.log(res)
                setApplications(res.data.supervisor_applications)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-8">
                <ApplicationsStats showButton={false} total={applications.length} pending={applications.filter((application) => application.status == 1).length} approved={applications.filter((application) => application.status == 3).length} rejected={applications.filter((application) => application.status == 4).length} />

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
                            return <Application application={application} forUser={"supervisor"} key={application.title} />
                        })}

                    </div>

                    :
                    <div className="bg-white rounded-xl shadow-lg shadow-gray-200 pb-10 px-10 flex flex-col justify-center items-center">
                        <img src={emptyBox} alt="empty box" className="w-2/3" />
                        <h1 className="font-header text-text text-2xl font-bold mb-4">
                            Nothing
                        </h1>
                        <p className="font-body text-lightText px-20">
                            You don't have any internship applications just yet,
                        </p>
                    </div>

            )
            }


        </div>
    )

}

export default SupervisorApplications