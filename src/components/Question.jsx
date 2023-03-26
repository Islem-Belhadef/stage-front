// React & Router
import { useState } from "react"

// Assets
import { Add, Minus } from "iconsax-react"

// Plugins
import { motion } from "framer-motion"

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
        <p className="text-grayText">{question.qst}</p>
        {!showAnswer && <Add color="#616373" size={24} />}
        {showAnswer && <Minus color="#616373" size={24} />}
      </div>
      {showAnswer && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="font-body text-text"
        >
          {question.ans}
        </motion.div>
      )}
    </div>
  )
}

export default Question
