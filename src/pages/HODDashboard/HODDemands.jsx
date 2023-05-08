// Assets
import emptyBox from "../../assets/empty-box.svg"
import DemandStats from "../../components/DemandStats"
import Demand from "../../components/Demand"


const HODDemands = ()=>{


  const demands = [
    {
      student:"Damous achraf" ,
      title: "Network technician",
      company: "ooredoo",
      duration: "30 days",
      status: 0,
      created_at: "05 may 2023",
      level:"master 2"
    },
    {
      student:"Belhadef Islem" ,
      title: "ui/ux designer",
      company: "yassir",
      duration: "30 days",
      status: 3,
      created_at: "yesterday",
      level: "license 3"
    },
    {
      student:"Belhadef Islem" ,
      title: "web developer ",
      company: "mobilis",
      duration: "30 days",
      status: 4,
      created_at: "15 may 2023",
      level: "license 3"
    },

  ]

    return(
        <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-8">
          <DemandStats showButton={false} />
          
        </div>
        {demands.length > 0 && (
          <div className="bg-white rounded-xl shadow-md flex-1">

           
            {demands.map((demand) => {
              return <Demand demand={demand} forUser={"hod"} key={demand.title} />
            })}
          </div>
        )}

        {demands.length == 0 && (
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200 pb-10 px-10 flex flex-col justify-center items-center">
            <img src={emptyBox} alt="empty box" className="w-2/3" />
            <h1 className="font-header text-text text-2xl font-bold mb-4">
              Nothing
            </h1>
            <p className="font-body text-lightText px-20">
              You don't have any internship demands just yet
            </p>
          </div>
        )}



      </div>
    )
}

export default HODDemands