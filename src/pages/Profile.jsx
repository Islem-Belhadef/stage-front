// React & Router
import { useState } from "react"

// Libraries
import { motion, AnimatePresence } from "framer-motion"

// Components
import Header from "../components/Header"

// Assets
import studentImage from "../assets/student.svg"
import supervisorImage from "../assets/supervisor.svg"
import hodImage from "../assets/hod.svg"
import { Edit } from "iconsax-react"

const Profile = () => {
  const [editPersonalInfo, setEditPersonalInfo] = useState(false)
  const [editAccountInfo, setEditAccountInfo] = useState(false)

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header fontColor="#272937" bgColor="#FFFFFF" btnColor="#383EBE" />
      <div className="container my-8 mx-auto bg-white rounded-xl shadow-md pb-10 font-body">
        <div className="flex items-center justify-between border-b border-gray-200 px-10 py-6">
          <div>
            <h1 className="font-header font-semibold text-2xl text-text mb-1">
              Islem Mohamed BELHADEF
            </h1>
            <p className="text-primary">Student</p>
          </div>
          <div
            className="rounded-full p-2 w-28 h-28 border-2 border-text bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${studentImage})` }}
          ></div>
        </div>
        <div className="p-10 ">
          <h2 className="font-header font-semibold text-xl text-text mb-2 flex gap-4 items-center">
            Personal information
            <Edit
              size={24}
              color="#7CDF64"
              className="cursor-pointer"
              onClick={() => {
                setEditPersonalInfo(true)
              }}
            />
          </h2>
          {!editPersonalInfo && (
            <motion.div
              className="grid grid-cols-3 gap-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-lightText">Date of birth</p>
              <p className="text-grayText font-semibold col-span-2">
                01 / 04 / 2002
              </p>
              <p className="text-lightText">University</p>
              <p className="text-grayText font-semibold col-span-2">
                University of Constantine 2 - Abdelhamid Mehri
              </p>
              <p className="text-lightText">Speciality</p>
              <p className="text-grayText font-semibold col-span-2">
                Information Technology
              </p>
              <p className="text-lightText">Department</p>
              <p className="text-grayText font-semibold col-span-2">IFA</p>
            </motion.div>
          )}
          {editPersonalInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-lg"
            >
              <label htmlFor="birthdate" className="label gap-1 mb-4">
                Date of birth
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  className="input col-span-2"
                />
              </label>
              <label htmlFor="university" className="label gap-1 mb-4">
                University
                <input
                  type="text"
                  name="university"
                  id="university"
                  className="input col-span-2"
                  disabled
                />
              </label>
              <label htmlFor="speciality" className="label gap-1 mb-4">
                Speciality
                <select
                  name="speciality"
                  id="speciality"
                  className="input col-span-2 bg-transparent"
                >
                  <option value="it">it</option>
                  <option value="it">it</option>
                  <option value="it">it</option>
                </select>
              </label>
              <label htmlFor="department" className="label gap-1 mb-4">
                Department
                <select
                  name="department"
                  id="department"
                  className="input col-span-2 bg-transparent"
                >
                  <option value="it">it</option>
                  <option value="it">it</option>
                  <option value="it">it</option>
                </select>
              </label>
            </motion.div>
          )}
        </div>
        <div className="px-10 pb-10 ">
          <h2 className="font-header font-semibold text-xl text-text mb-2 flex gap-4 items-center">
            Account information
            <Edit
              size={24}
              color="#7CDF64"
              className="cursor-pointer"
              onClick={() => {
                setEditAccountInfo(true)
              }}
            />
          </h2>
          {!editAccountInfo && (
            <motion.div
              className="grid grid-cols-3 gap-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-lightText">Email address</p>
              <p className="text-grayText font-semibold col-span-2">
                islem.belhadef@univ-constantine2.dz
              </p>
            </motion.div>
          )}
          {editAccountInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-lg"
            >
              <label htmlFor="email" className="label gap-1 mb-4">
                Email Address
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input col-span-2"
                />
              </label>
            </motion.div>
          )}
        </div>
        <div className="px-10 pb-10 flex items-center justify-center gap-6">
          <button
            type="reset"
            className="secondary-btn w-52"
            onClick={(e) => {
              e.preventDefault()
              setEditPersonalInfo(false)
              setEditAccountInfo(false)
            }}
          >
            Cancel
          </button>
          <button type="submit" className="primary-btn w-52">
            Save changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
