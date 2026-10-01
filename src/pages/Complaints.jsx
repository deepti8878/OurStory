import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const complaints = [
  {
    title: "We don't talk like we used to.",
    text: "And I don't just mean the number of conversations. I mean the feeling behind them.",
  },
  {
    title: "Sometimes I feel like I'm the only one trying to keep us close.",
    text: "I miss feeling like you also want to make time for us.",
  },
  {
    title: "I miss feeling important to you.",
    text: "There are moments when I wonder if I still have the same place in your life that I used to.",
  },
  {
    title: "I shouldn't have to ask for every little bit of affection.",
    text: "Sometimes I just want you to do something because you wanted to, not because I asked.",
  },
  {
    title: "I miss the effort you used to make.",
    text: "The little things mattered to me more than you probably realized.",
  },
];

function Complaints() {
  const navigate = useNavigate();

  const [currentComplaint, setCurrentComplaint] = useState(0);

  const complaint = complaints[currentComplaint];
  const isLastComplaint =
    currentComplaint === complaints.length - 1;

  const handleNext = () => {
    if (isLastComplaint) {
      navigate("/what-i-never-said");
      return;
    }

    setCurrentComplaint((prev) => prev + 1);
  };

  return (
    <main className="complaints-page">

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <motion.div
        className="complaints-content"
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
          WHAT HAS BEEN HURTING ME
        </p>

        <h1>
          There are some things
          <span>I need you to know.</span>
        </h1>

        <div className="complaint-progress">
          {currentComplaint + 1} / {complaints.length}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentComplaint}
            className="complaint-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >

            <div className="complaint-number">
              0{currentComplaint + 1}
            </div>

            <h2>{complaint.title}</h2>

            <p>{complaint.text}</p>

          </motion.div>
        </AnimatePresence>

        <motion.button
          className="start-button"
          onClick={handleNext}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>
            {isLastComplaint
              ? "There's more I need to say"
              : "I understand"}
          </span>

          <ArrowRight size={19} />
        </motion.button>

        <p className="bottom-note">
          Please read this part slowly.
        </p>

      </motion.div>

    </main>
  );
}

export default Complaints;
