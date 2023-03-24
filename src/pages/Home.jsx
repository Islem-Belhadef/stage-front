// Libraries
import TypewriterComponent from "typewriter-effect"

// Assets
import image from "../assets/home-cover.jpg"

// Components
import Header from "../components/Header"

const Home = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-top"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header fontColor="#FFFFFF" />
      <div className="flex h-4/5 w-full items-center justify-center font-body font-medium text-white text-3xl">
        <div className="w-3/5 text-center">
          <TypewriterComponent
            onInit={(typerwriter) => {
              typerwriter
                .typeString("Take your first step ahead")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Move forward and find your career with ease")
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  "Connect to streamline your internship applications and stay notified"
                )

                .start()
            }}
            options={{ loop: true }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
