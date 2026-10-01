import { motion } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FinalMessage() {
  const navigate = useNavigate();

  return (
    <main className="final-page">

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <motion.div
        className="final-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <motion.div
          className="heart-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
          }}
        >
          <Heart size={25} fill="currentColor" />
        </motion.div>

        <motion.p
          className="final-message first"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I miss you Betu.
        </motion.p>

        <motion.p
          className="final-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Please come and meet me soon.
        </motion.p>

        <motion.h1
          className="final-love"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.8,
            duration: 1,
            type: "spring",
          }}
        >
          I love you
          <span>❤️</span>
        </motion.h1>

        <motion.button
          className="start-button final-button"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
        >
          <span>Start again</span>
          <RotateCcw size={18} />
        </motion.button>

      </motion.div>

    </main>
  );
}

export default FinalMessage;
