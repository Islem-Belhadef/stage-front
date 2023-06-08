import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authAxios from "../../api/axios"
import { Cookies } from "react-cookie"
// Assets
import { Sms, ArrowLeft } from "iconsax-react"


const handleKeyUp = (e) => {
  var current = e.target
  var value = current.value
  var next = current.nextElementSibling
  var prev = current.previousElementSibling
  if (next && e.keyCode != 8) {
    if (!isNaN(value) && value != "") next.focus()
  }
  if (prev && e.keyCode == 8) {
    prev.focus()
  }
}


const ConfirmEmail = () => {

  const cookies = new Cookies()

  const [code1, setCode1] = useState(``)
  const [code2, setCode2] = useState('')
  const [code3, setCode3] = useState('')
  const [code4, setCode4] = useState('')
  const [code5, setCode5] = useState('')
  const [code6, setCode6] = useState('')

  const navigate = useNavigate()
  const type = cookies.get("type")

  const handleSubmit = (e) => {
    e.preventDefault()

    authAxios
      .post("http://127.0.0.1:8000/api/auth/email", {code: `${code1}${code2}${code3}${code4}${code5}${code6}`})
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          if(type){
            window.location.replace("/")

          }else{
            window.location.replace("/signup/info")

          }
        } else {
          console.log("Wrong verification code")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(`${code1}${code2}${code3}${code4}${code5}${code6}`)


  return (
    <div className="h-[100svh] sm:h-screen w-screen bg-cover bg-center flex sm:items-center justify-center sm:bg-[url('/src/assets/informations-cover.jpg')]">
      <div className=" relative top-10 sm:static w-full px-10 rounded-xl bg-white py-8 sm:px-24 sm:w-min flex flex-col items-center">
        <div className="flex justify-center items-center mb-5">
          <Sms size={50} color="#7CDF64" className="m-6 z-50" variant="Bold" />
          <span
            className=" w-32 h-20 rounded-[50%] -rotate-[17deg] absolute"
            style={{ backgroundColor: "rgba(48, 147, 58, 0.08)" }}
          ></span>
          <span
            className=" w-28 h-20 rounded-[50%] rotate-[22deg] absolute"
            style={{ backgroundColor: "rgba(48, 147, 58, 0.08)" }}
          ></span>
        </div>
        <h1 className="font-header text-2xl text-text font-semibold mb-2">
          Confirm your email
        </h1>
        <p className="font-body text-lightText text-sm sm:text-base text-center sm:text-left">
          Please enter the code sent to your school email address down below to
          continue
        </p>
        <form className="w-full flex flex-col items-center mt-6"
          onSubmit={handleSubmit}
        >
          <label htmlFor="code-1" className="label mb-2">
            Code
          </label>
          <div className="flex gap-1 sm:gap-4">
                <input
                  type="text"
                  name={`code-1`}
                  id={`code-1`}
                  pattern="[0-9]*"
                  min="0"
                  max="9"
                  maxLength="1"
                  inputtype="numeric"
                  required
                  className="!px-1  max-w-[3rem] input sm: sm:px-4 sm:!w-12 !h-12 text-[1.3rem] text-center"
                  onKeyUp={handleKeyUp}
                  onChange={(e)=>{setCode1(e.target.value)}}
                />

                <input
                  type="text"
                  name={`code-2`}
                  id={`code-2`}
                  pattern="[0-9]*"
                  min="0"
                  max="9"
                  maxLength="1"
                  inputtype="numeric"
                  required
                  className="!px-1  max-w-[3rem] input sm: sm:px-4 sm:!w-12 !h-12 text-[1.3rem] text-center"
                  onKeyUp={handleKeyUp}
                  onChange={(e)=>setCode2(e.target.value)}
                />
                <input
                  type="text"
                  name={`code-3`}
                  id={`code-3`}
                  pattern="[0-9]*"
                  min="0"
                  max="9"
                  maxLength="1"
                  inputtype="numeric"
                  required
                  className="!px-1  max-w-[3rem] input sm: sm:px-4 sm:!w-12 !h-12 text-[1.3rem] text-center"
                  onKeyUp={handleKeyUp}
                  onChange={(e)=>setCode3(e.target.value)}

                />
                <input
                  type="text"
                  name={`code-4`}
                  id={`code-4`}
                  pattern="[0-9]*"
                  min="0"
                  max="9"
                  maxLength="1"
                  inputtype="numeric"
                  required
                  className="!px-1  max-w-[3rem] input sm: sm:px-4 sm:!w-12 !h-12 text-[1.3rem] text-center"
                  onKeyUp={handleKeyUp}
                  onChange={(e)=>setCode4(e.target.value)}

                />
                <input
                  type="text"
                  name={`code-5`}
                  id={`code-5`}
                  pattern="[0-9]*"
                  min="0"
                  max="9"
                  maxLength="1"
                  inputtype="numeric"
                  required
                  className="!px-1  max-w-[3rem] input sm: sm:px-4 sm:!w-12 !h-12 text-[1.3rem] text-center"
                  onKeyUp={handleKeyUp}
                  onChange={(e)=>setCode5(e.target.value)}

                />
                <input
                  type="text"
                  name={`code-6`}
                  id={`code-6`}
                  pattern="[0-9]*"
                  min="0"
                  max="9"
                  maxLength="1"
                  inputtype="numeric"
                  required
                  className="!px-1  max-w-[3rem] input sm: sm:px-4 sm:!w-12 !h-12 text-[1.3rem] text-center"
                  onKeyUp={handleKeyUp}
                  onChange={(e)=>setCode6(e.target.value)}

                />

          </div>
          <input className="primary-btn my-6 w-full cursor-pointer" type="submit" value="Confirm" 
          disabled={(code1==''||code2==''||code3==''||code4==''||code5==''||code6=='')}
          />
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
