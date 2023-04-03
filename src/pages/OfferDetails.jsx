// Components
import Header from "../components/Header"
import { Sms, Timer1, Calendar, Briefcase } from "iconsax-react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ApplyModal from "../components/applyModal"
import SuccessModal from "../components/SuccessModal"
import offers from "../offersData"

const OfferDetails = () => {
  const [showApplyModal, setshowApplyModal] = useState(false)
  const [showSuccessModal, setshowSuccessModal] = useState(false)

  const { offerId } = useParams()
  const thisOffer = offers.find((offer) => offer.id == offerId)

  return (
    <main className="bg-gray-50">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />

      <div className="container mx-auto sm:py-10">
        <div className="flex flex-col bg-white rounded-xl shadow-md shadow-gray-100 h-fit">
          <div className="flex gap-12 pt-6 pb-2 px-10  border-b border-gray-20 border-solid ">
            <div
              className="w-24 md:w-1/6 lg:w-36 h-20 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${thisOffer.company.logo})` }}
            ></div>
            <div className="flex flex-col justify-evenly">
              <h1 className="font-body text-text text-xl font-bold">
                {thisOffer.company.name}
              </h1>
              <p className="font-body text-lightText flex gap-2 text-sm">
                {thisOffer.company.address}
              </p>
            </div>
          </div>
          <div className=" bodycont flex flex-col px-11 py-10">
            <div className="titleandbuttons flex items-center justify-between">
              <h1 className="font-body text-text text-2xl font-bold">
                {thisOffer.title}
              </h1>
              <div className="buttons flex items-center gap-8">
                <Sms
                  color="#7CDF64"
                  size={38}
                  className="cursor-pointer hover:scale-110 transition"
                />
                <button
                  className="primary-btn w-44 hidden sm:block"
                  onClick={() => setshowApplyModal(true)}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="infos flex gap-16 pb-10 pl-3">
              <div className="flex flex-col items-start gap-3 mt-4">
                <p className="font-body text-lightText flex gap-2 text-sm">
                  <Calendar color="#9D9CAC" size={18} />
                  Start date : 20 mars 2022
                </p>
                <p className="font-body text-lightText flex gap-2 text-sm">
                  <Calendar color="#9D9CAC" size={18} />
                  End date : 20 mai 2022
                </p>
                <p className="font-body text-lightText flex gap-2 text-sm">
                  <Timer1 color="#9D9CAC" size={18} />
                  Duration : 3 months
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 mt-4">
                <p className="font-body text-lightText flex gap-2 text-sm">
                  <Briefcase color="#9D9CAC" size={18} />
                  Available spots : 5
                </p>
                <p className="font-body text-lightText flex gap-2 text-sm">
                  Required level : M-1 L-3
                </p>
              </div>
            </div>
            <h2 className="font-body text-text text-xl font-bold ">
              Internship description
            </h2>
            <p className="font-body text-grayText my-8">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros
              tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
              vulputate nisi. Integer in felis sed leo vestibulum venenatis.
              Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
              vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu
              mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula
              vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam
              eget mi in purus lobortis eleifend. Sed nec ante dictum sem
              condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
              nisi, ac posuere leo. Nam pulvinar blandit velit, id condimentum
              diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec,
              fermentum congue felis. Quisque mauris dolor, fringilla sed
              tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium
              finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam
              ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit
              sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean
              gravida turpis nisi, consequat dictum risus dapibus a. Duis felis
              ante, varius in neque eu, tempor suscipit sem. Maecenas
              ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus
              vitae justo pharetra consequat. Mauris id mi ut arcu feugiat
              maximus. Mauris consequat tellus id tempus aliquet. Vestibulum
              dictum ultrices elit a luctus. Sed in ante ut leo congue posuere
              at sit amet ligula. Pellentesque eget augue nec nisl sodales
              blandit sed et sem. Aenean quis finibus arcu, in hendrerit purus.
              Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et
              vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed
              auctor sit amet, molestie a nibh. Ut euismod nisl arcu, sed
              placerat nulla volutpat aliquet. Ut id convallis nisl. Ut mauris
              leo, lacinia sed elit id, sagittis rhoncus odio. Pellentesque
              sapien libero, lobortis a placerat et, malesuada sit amet dui. Nam
              sem sapien, congue eu rutrum nec, pellentesque eget ligula.
            </p>
            <div className="flex justify-center items-center bg-white sticky bottom-0 py-5 sm:static">
              <button
                type="submit"
                className="primary-btn w-44"
                onClick={() => setshowApplyModal(true)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      {showApplyModal && (
        <ApplyModal
          company={thisOffer.company.name}
          setshowApplyModal={setshowApplyModal}
          setshowSuccessModal={setshowSuccessModal}
        />
      )}
      {showSuccessModal && (
        <SuccessModal setshowSuccessModal={setshowSuccessModal} />
      )}
    </main>
  )
}

export default OfferDetails
