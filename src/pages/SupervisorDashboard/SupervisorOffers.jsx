import { useEffect, useState } from "react"
import SupervisorStats from "../../components/SupervisorStats"
import { Book1, Calendar, Edit, Timer1, Trash } from "iconsax-react"
import authAxios from "../../api/axios"
import SupervisorOffer from "../../components/SupervisorOffer"
import Loader from "../../components/Loader"
import emptyBox from "../../assets/empty-box.svg"
import axios from "axios"

const SupervisorOffers = () => {

    const [offers, setOffers] = useState([])
    const [applicationsCount,setApplicationsCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.all([
            authAxios.get('/offers/supervisor/offers'),
            authAxios.get('/applications'),
            
        ]).then(
            axios.spread((...allRes) => {
                console.log(allRes[0].data)
                console.log(allRes[1].data)
            
                setOffers(allRes[0].data.offers)
                setApplicationsCount(allRes[1].data.supervisor_applications.length)
                setLoading(false)
        
            }))
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="container mx-auto flex flex-col gap-8 pt-5 pb-10">
            <SupervisorStats offers={offers.length} applications={applicationsCount} />
            <div className=" bg-white rounded-xl">
                {loading &&
                    <>
                        <Loader layout={'table'} />
                        <Loader layout={'table'} />
                        <Loader layout={'table'} />
                    </>
                }
                {!loading && (
                    offers.length > 0
                        ?
                        <>
                            <div className="hidden sm:flex py-3 px-6 md:px-10 text-lightText">
                                <div className="w-1/3 ">title</div>
                                <div className="w-1/5 ">duration</div>
                                <div className="w-1/6 ">level</div>
                                <div className="w-1/5 ">created</div>
                                <div className=""></div>
                            </div>
                            {offers.map((offer) => {
                                return <SupervisorOffer key={offer.id} offer={offer} />
                            })
                            }

                        </>


                        :

                        <div className=" pb-10 px-10 flex flex-col justify-center items-center">
                            <img src={emptyBox} alt="empty box" className="w-2/3 min-w-[15rem] max-w-xs" />
                            <h1 className="font-header text-text text-2xl font-bold mb-4">
                                Nothing
                            </h1>
                            <p className="font-body text-lightText px-5 text-center">
                                You don't have any internship offers just yet
                            </p>
                        </div>
                )}
            </div>
        </div>
    )
}

export default SupervisorOffers