// Assets
import image from "../assets/contact-cover.jpg"

// Components
import Header from "../components/Header"
import Question from "../components/Question"

const Contact = () => {
  const questions = [
    {
      qst: "How long does it take to treat a demand or application?",
      ans: "Usually for an internship demand it takes about 1-2 weeks, and for an offer application it takes less than a week",
    },
    {
      qst: "How will my application be treated?",
      ans: "First it will go to the head of your department to be reviewed, when accepted it gets transferred to the internship supervisor to be reviewed again",
    },
    {
      qst: "Can i apply for more than one internship at a time?",
      ans: "You can apply for more than one at a time, but if you get accepted you can only do one internship",
    },
    {
      qst: "What is the difference between offer application and internship demand?",
      ans: "Both of them are ways to apply to an internship, but an application is applying to an already existing offer in the platform while a demand is when the internship you're looking for does not exist, so you make a manual demand for this internship",
    },
  ]

  return (
    <div className="bg-gray-50">
      <div
        className="bg-cover bg-top h-screen"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Header fontColor="#FFFFFF" />
        <div className="w-full h-screen pb-40 flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center gap-3">
            <h1 className="font-body font-semibold text-5xl text-white">
              Contact us
            </h1>
            <p className="font-body text-sm text-yellow-300">
              We'll be more than happy to help you
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex py-8 gap-12 flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-6 px-3 md:px-0">
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
          <form className="flex flex-col gap-6 p-8 rounded-lg bg-white shadow-md shadow-gray-200">
            <div className="flex gap-6 flex-col sm:flex-row">
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
              Your email address
              <input
                type="text"
                name="email"
                id="email"
                className="input mt-2"
              />
            </label>
            <label htmlFor="subject" className="label">
              Subject
              <input
                type="text"
                name="subject"
                id="subject"
                className="input mt-2"
                maxLength={100}
              />
            </label>
            <label htmlFor="content" className="label">
              Content
              <textarea
                type="text"
                name="content"
                id="content"
                className="input mt-2"
                maxLength={2000}
              />
            </label>
            <button type="submit" className="primary-btn mt-6">
              Send email
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
