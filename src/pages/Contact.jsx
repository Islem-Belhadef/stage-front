import { Link } from "react-router-dom"
import { useState } from "react"

import image from "../assets/home-cover.jpg"

import Question from "../components/Question"

const Contact = () => {
  const questions = [
    {
      qst: "How long does it take to treat a demand or application ?",
      ans: "Usually for an internship demand it takes about 1-2 weeks, and for an offer application it takes less than a week",
    },
    {
      qst: "How will my application be treated ?",
      ans: "First it will go to the head of your department to be reviewed, when accepted it gets transferred to the internship supervisor to be reviewed again",
    },
    {
      qst: "Can i apply for more than one internship at a time ?",
      ans: "You can apply for more than one at a time, but if you get accepted you can only do one internship",
    },
    {
      qst: "What is the difference between offer application and internship demand ?",
      ans: "Both of them are ways to apply to an internship, but an application is applying to an already existing offer in the platform while a demand is when the internship you're looking for does not exist, so you make a manual demand for this internship",
    },
  ]

  return (
    <div>
      <div
        className="bg-cover bg-top"
        style={{ backgroundImage: `url(${image})` }}
      >
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex gap-14">
            <Link
              to="/"
              className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
            >
              Home
            </Link>
            <Link
              to="/internship/offers"
              className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
            >
              Offers
            </Link>
            <Link
              to="/internship/companies"
              className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
            >
              Companies
            </Link>
          </div>
          <div className="flex gap-14 items-center">
            <Link
              to="/login"
              className="font-header text-white text-lg hover:scale-110 focus:scale-90 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-header text-white text-lg px-10 py-3 rounded-lg bg-gray-300/10 hover:bg-gray-300/20 hover:scale-105 focus:scale-95 transition"
            >
              Sign up
            </Link>
          </div>
        </nav>
        <div className="w-full pt-20 pb-32 flex items-center justify-center">
          <h1 className="font-body font-medium text-3xl text-white">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex py-8 px-6 gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <p className="font-body text-text text-center">
            Some FAQs that people ask us
          </p>
          {questions.map((question) => {
            return (
              <Question question={question} key={questions.indexOf(question)} />
            )
          })}
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <p className="font-body text-text text-center">
            Contact us directly through this form
          </p>
          <form className="flex flex-col gap-6 p-8 rounded-lg bg-gray-50">
            <div className="flex gap-6">
              <label htmlFor="email" className="label">
                First name
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input mt-2"
                />
              </label>
              <label htmlFor="email" className="label">
                Last name
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="input mt-2"
                />
              </label>
            </div>
            <label htmlFor="email" className="label">
              Email address
              <input
                type="text"
                name="email"
                id="email"
                className="input mt-2"
              />
            </label>
            <label htmlFor="email" className="label">
              Content
              <textarea
                type="text"
                name="email"
                id="email"
                className="input mt-2"
              />
            </label>
            <button type="submit" className="btn mt-6">
              Send email
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
