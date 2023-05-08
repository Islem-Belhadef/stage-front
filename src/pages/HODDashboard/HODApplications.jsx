import ApplicationsStats from "../../components/ApplicationsStats"
import Application from "../../components/Application"

const HODApplications = ()=>{

    const applications = [
        {
          student:"Damous Achraf",
          title: "software engineer",
          company: "sonatrach",
          duration: "30 days",
          status: 0,
          created_at: "05 may 2023",
          level: "license 3"
        },
        {
          student:"Belhadef Islem",
          title: "mobile developer",
          company: "air algerie",
          duration: "30 days",
          status: 0,
          created_at: "2 months ago",
          level: "license 3"
        },
        {
          student:"Ghanem Akram",
          title: "web developer ",
          company: "mobilis",
          duration: "15 days",
          status: 4,
          created_at: "10 april 2023",
          level: "license 3"
        },
    
      ]


    return(
        <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-8">
          <ApplicationsStats showButton={false} />
          
        </div>
        {applications.length > 0 && (
          <div className="bg-white rounded-xl shadow-md flex-1">

           
            {applications.map((application) => {
              return <Application application={application} forUser={"hod"} key={application.title} />
            })}
          </div>
        )}

        {applications.length == 0 && (
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200 pb-10 px-10 flex flex-col justify-center items-center">
            <img src={emptyBox} alt="empty box" className="w-2/3" />
            <h1 className="font-header text-text text-2xl font-bold mb-4">
              Nothing
            </h1>
            <p className="font-body text-lightText px-20">
              You don't have any internship applications just yet,
            </p>
          </div>
        )}



      </div>
    )
}

export default HODApplications