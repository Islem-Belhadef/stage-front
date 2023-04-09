import { Link } from "react-router-dom"
import { useRef } from "react"
// Assets
import { Sms, ArrowLeft } from "iconsax-react"
import image from "../../assets/informations-cover.jpg"

const handleKeyUp = (e) => {
  var current = e.target 
  var value = current.value
  var next = current.nextElementSibling
  var prev = current.previousElementSibling
  if(next && (e.keyCode != 8)){
    if(!isNaN(value) && value != "") next.focus()
  }
  if(prev && e.keyCode == 8 ){
     prev.focus()
  }
}

const ConfirmEmail = () => {
  const inputs = [1,2,3,4,5,6]
 
  return (
    <div
      className="h-[100svh] sm:h-screen w-screen bg-cover bg-center flex sm:items-center justify-center sm:bg-[url('/src/assets/informations-cover.jpg')]"
    >
      <div className=" relative top-10 sm:static w-full px-10 rounded-xl bg-white py-8 sm:px-24 sm:w-min flex flex-col items-center">
        <div className="flex justify-center items-center mb-5">
          <Sms size={50} color="#7CDF64" className="m-6 z-50" variant="Bold"/>
          <span className=" w-32 h-20 rounded-[50%] -rotate-[17deg] absolute" style={{backgroundColor:"rgba(48, 147, 58, 0.08)"}}></span>
          <span className=" w-28 h-20 rounded-[50%] rotate-[22deg] absolute" style={{backgroundColor:"rgba(48, 147, 58, 0.08)"}}></span>
        </div>
        <h1 className="font-header text-2xl text-text font-semibold mb-2">
          Confirm your email
        </h1>
        <p className="font-body text-lightText text-sm sm:text-base text-center sm:text-left">
          Please enter the code sent to your school email address down below to
          continue
        </p>
        <form className="w-full flex flex-col items-center mt-6">
          <label htmlFor="code-1" className="label mb-2">
            Code
          </label>
          <div className="flex gap-1 sm:gap-4">
            {inputs.map((index) => {
              return <input
              
              type="text"
              name={`code-${index}`}
              id={`code-${index}`}
              pattern="[0-9]*"
              min="0"
              max="9"
              maxlength="1"
              inputtype="numeric"
              required
              className="!px-1  max-w-[3rem] input sm: sm:px-4 sm:!w-12 !h-12 text-[1.3rem] text-center"
              onKeyUp ={handleKeyUp}
             
            />
            })}
            
          </div>
          <button type="submit" className="primary-btn my-6 w-full">
            Confirm
          </button>
        </form>
        <p className="font-body text-text text-sm">Didn't recieve the code?</p>
        <button className="text-primary font-body text-sm mb-8 sm:mb-4">
          Resend code
        </button>
        <Link
          to="/signup"
          className="text-primary font-body flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={20} color="#383EBE" />
          Back to signup
        </Link>
      </div>
    </div>
  )
}

export default ConfirmEmail
