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
          ? "w-full rounded-lg bg-gray-50 py-5 px-6 flex flex-col gap-6 max-w-full cursor-pointer hover:bg-gray-200"
          : "w-full rounded-lg bg-gray-100 py-5 px-6 flex flex-col gap-6 max-w-full cursor-pointer hover:bg-gray-200"
      }
      onClick={() => {
        setShowAnswer(!showAnswer)
      }}
    >
      <div className="flex justify-between items-center gap-8">
        <p className="text-text">{question.qst}</p>
        {!showAnswer && <Add color="#616373" size={24} />}
        {showAnswer && <Minus color="#616373" size={24} />}
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
