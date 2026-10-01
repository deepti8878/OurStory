import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const feelings = [
  {
    heading: "I miss...",
    text: "I miss the version of us where talking to you felt easy. Where I didn't have to wonder if you wanted to talk to me.",
  },
  {
    heading: "I wish...",
    text: "I wish you would notice when something is wrong with me without me always having to explain it first.",
  },
  {
    heading: "I'm scared that...",
    text: "I'm scared that somewhere along the way, I stopped being as important to you as you are to me.",
  },
  {
    heading: "I'm angry because...",
    text: "I'm angry because I shouldn't have to keep asking for the things that once came naturally from you.",
  },
  {
    heading: "But mostly...",
    text: "I'm hurt. Because I still care. And if I didn't care, none of this would hurt this much.",
  },
];

function WhatINeverSaid() {
  const navigate = useNavigate();

  const [currentFeeling, setCurrentFeeling] = useState(0);

  const feeling = feelings[currentFeeling];
  const isLastFeeling = currentFeeling === feelings.length - 1;

  const handleNext = () => {
    if (isLastFeeling) {
      navigate("/final-message");
      return;
    }

    setCurrentFeeling((prev) => prev + 1);
  };

  return (
    <main className="feelings-page">

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <motion.div
        className="feelings-content"
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
          THINGS I NEVER SAID
        </p>

        <h1>
          Maybe I should have
          <span>said these sooner.</span>
        </h1>

        <div className="feelings-progress">
          {currentFeeling + 1} / {feelings.length}
        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={currentFeeling}
            className="feeling-card"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <h2>{feeling.heading}</h2>

            <p>{feeling.text}</p>

          </motion.div>

        </AnimatePresence>

        <motion.button
          className="start-button"
          onClick={handleNext}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>
            {isLastFeeling
              ? "I understand"
              : "Keep reading"}
          </span>

          <ArrowRight size={19} />
        </motion.button>

        <p className="bottom-note">
          I don't want you to fix everything. I just want you to understand.
        </p>

      </motion.div>

    </main>
  );
}

export default WhatINeverSaid;
