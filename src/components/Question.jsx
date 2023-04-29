// React & Router
import { useState } from "react"

// Assets
import { Add, Minus } from "iconsax-react"

// Plugins
import { motion, AnimatePresence } from "framer-motion"

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div
      className={
        !showAnswer
          ? "w-full rounded-lg bg-white shadow-sm shadow-gray-200 py-5 px-4 flex flex-col gap-6 max-w-full cursor-pointer hover:shadow-md hover:shadow-gray-200 transition"
          : "w-full rounded-lg bg-white shadow-sm shadow-gray-200 py-5 px-4 flex flex-col gap-6 max-w-full cursor-pointer hover:shadow-md hover:shadow-gray-200 transition"
      }
      onClick={() => {
        setShowAnswer(!showAnswer)
      }}
    >
      <div className="flex justify-between items-center gap-2 md:gap-8">
        <p className="text-text">{question.qst}</p>
        {!showAnswer && <Add className="flex-none" color="#616373" size={24} />}
        {showAnswer && <Minus className="flex-none" color="#616373" size={24} />}
      </div>
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.07 } }}
            className="font-body text-grayText"
          >
            {question.ans}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Question
