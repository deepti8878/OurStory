import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
    {
        question: "Where did we first meet?",
        options: [
            "At a cafe for tea",
            "At a restaurant",
            "At the office",
            "I don't remember",
        ],
        correct: 0,
    },
    {
        question: "What did I notice about you first?",
        options: [
            "Your smile",
            "Your eyes and hair",
            "Your voice",
            "Your dressing",
        ],
        correct: 1,
    },
    {
        question: "Which day do I still remember?",
        options: [
            "Our first date",
            "The day we met",
            "Our Bhopal trip",
            "Our first movie",
        ],
        correct: 2,
    },
    {
        question: "What did you used to do that made me feel special?",
        options: [
            "Send me good morning texts",
            "Bring me gifts",
            "You came to drop for office",
            "Call me before sleeping",
        ],
        correct: 2,
    },
];

function OurStory() {
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const question = questions[currentQuestion];
    const isLastQuestion = currentQuestion === questions.length - 1;

    const handleAnswer = (index) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(index);
        setShowMessage(true);
    };


    const handleNext = () => {
        if (selectedAnswer === null) return;

        if (isLastQuestion) {
            navigate("/last-few-months");
            return;
        }

        setShowMessage(false);
        setSelectedAnswer(null);
        setCurrentQuestion((prev) => prev + 1);
    };


const isCorrect = selectedAnswer === question.correct;

return (
    <main className="story-page">

        <div className="background-glow glow-one" />
        <div className="background-glow glow-two" />

        <motion.div
            className="story-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <motion.div
                className="heart-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}
            >
                <Heart size={25} fill="currentColor" />
            </motion.div>

            <p className="small-heading">
                LET'S TALK ABOUT US
            </p>

            <h1>
                Before everything else,
                <span>remember us.</span>
            </h1>

            <p className="story-intro">
                I want to start with the things that made me
                happy to have you in my life.
            </p>

            <div className="question-progress">
                {currentQuestion + 1} / {questions.length}
            </div>

            <motion.div
                key={currentQuestion}
                className="question-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >

                <h2>{question.question}</h2>

                <div className="answer-options">

                    {question.options.map((option, index) => {

                        const isSelected = selectedAnswer === index;

                        return (
                            <motion.button
                                key={option}
                                className={`answer-option ${isSelected ? "selected" : ""
                                    } ${isSelected && isCorrect ? "correct" : ""
                                    } ${isSelected && !isCorrect ? "wrong" : ""
                                    }`}
                                onClick={() => handleAnswer(index)}
                                whileHover={{
                                    scale: selectedAnswer === null ? 1.01 : 1,
                                }}
                                whileTap={{
                                    scale: selectedAnswer === null ? 0.98 : 1,
                                }}
                            >
                                {option}
                            </motion.button>
                        );
                    })}

                </div>

            </motion.div>

            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        className={`answer-message ${isCorrect ? "message-correct" : "message-wrong"
                            }`}
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            y: -10,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                        }}
                    >

                        <motion.div
                            className="message-heart"
                            animate={{
                                scale: [1, 1.25, 1],
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: 1,
                            }}
                        >
                            {isCorrect ? "❤️" : "🥺"}
                        </motion.div>

                        <span>
                            {isCorrect
                                ? "Ohh, you still remember."
                                : "You missed this one…"}
                        </span>

                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="start-button"
                disabled={selectedAnswer === null}
                onClick={handleNext}
                whileHover={{
                    scale: selectedAnswer !== null ? 1.03 : 1,
                }}
                whileTap={{
                    scale: selectedAnswer !== null ? 0.97 : 1,
                }}
            >
                <span>
                    {isLastQuestion ? "I remember ❤️" : "Next"}
                </span>

                <ArrowRight size={19} />
            </motion.button>

        </motion.div>

    </main>
);
}

export default OurStory;






// import { motion } from "framer-motion";
// import { ArrowRight, Heart } from "lucide-react";
// import { useState } from "react";

// const questions = [
//   {
//     question: "Where did we first meet?",
//     options: [
//       "At a cafe for tea",
//       "At a restaurant",
//       "At the office",
//       "I don't remember",
//     ],
//     correct: 0,
//   },
//   {
//     question: "What did I notice about you first?",
//     options: [
//       "Your smile",
//       "Your eyes and hair",
//       "Your voice",
//       "Your dressing",
//     ],
//     correct: 1,
//   },
//   {
//     question: "Which day do I still remember?",
//     options: [
//       "Our first date",
//       "The day we met",
//       "Our Bhopal trip",
//       "Our first movie",
//     ],
//     correct: 2,
//   },
//   {
//     question: "What did you used to do that made me feel special?",
//     options: [
//       "Send me good morning texts",
//       "Bring me gifts",
//       "Drop me at vijaynagar square before office",
//       "Call me before sleeping",
//     ],
//     correct: 2,
//   },
// ];

// function OurStory() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const question = questions[currentQuestion];
//   const isLastQuestion = currentQuestion === questions.length - 1;

//   const handleAnswer = (index) => {
//     setSelectedAnswer(index);
//   };

//   const handleNext = () => {
//     if (selectedAnswer === null) return;

//     if (isLastQuestion) {
//       return;
//     }

//     setSelectedAnswer(null);
//     setCurrentQuestion((prev) => prev + 1);
//   };

//   return (
//     <main className="story-page">

//       <div className="background-glow glow-one" />
//       <div className="background-glow glow-two" />

//       <motion.div
//         className="story-content"
//         initial={{ opacity: 0, y: 25 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >

//         <motion.div
//           className="heart-icon"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{
//             duration: 0.5,
//             type: "spring",
//           }}
//         >
//           <Heart size={25} fill="currentColor" />
//         </motion.div>

//         <p className="small-heading">
//           LET'S TALK ABOUT US
//         </p>

//         <h1>
//           Before everything else,
//           <span>remember us.</span>
//         </h1>

//         <p className="story-intro">
//           I want to start with the things that made me
//           happy to have you in my life.
//         </p>

//         <div className="question-progress">
//           {currentQuestion + 1} / {questions.length}
//         </div>

//         <motion.div
//           key={currentQuestion}
//           className="question-card"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4 }}
//         >

//           <h2>{question.question}</h2>

//           <div className="answer-options">
//             {question.options.map((option, index) => (
//               <button
//                 key={option}
//                 className={`answer-option ${
//                   selectedAnswer === index ? "selected" : ""
//                 }`}
//                 onClick={() => handleAnswer(index)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//         </motion.div>

//         <motion.button
//           className="start-button"
//           disabled={selectedAnswer === null}
//           onClick={handleNext}
//           whileHover={{ scale: selectedAnswer !== null ? 1.03 : 1 }}
//           whileTap={{ scale: selectedAnswer !== null ? 0.97 : 1 }}
//         >
//           <span>
//             {isLastQuestion ? "I remember ❤️" : "Next"}
//           </span>

//           <ArrowRight size={19} />
//         </motion.button>

//       </motion.div>

//     </main>
//   );
// }

// export default OurStory;