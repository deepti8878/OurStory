import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LastFewMonths() {
  const navigate = useNavigate();

  return (
    <main className="transition-page">

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <motion.div
        className="transition-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <motion.div
          className="heart-icon"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            type: "spring",
          }}
        >
          <Heart size={25} fill="currentColor" />
        </motion.div>

        <motion.p
          className="small-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          NOW, THE HARD PART
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Okay...
          <span>you remembered us.</span>
        </motion.h1>

        <motion.div
          className="transition-divider"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 50, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />

        <motion.p
          className="transition-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          But there's another part of us
          <br />
          I need you to remember too.
        </motion.p>

        <motion.p
          className="transition-highlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          The last few months.
        </motion.p>

        <motion.button
          className="start-button"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/complaints")}
        >
          <span>I'm ready</span>
          <ArrowRight size={19} />
        </motion.button>

        <motion.p
          className="bottom-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          Please don't rush this part.
        </motion.p>

      </motion.div>

    </main>
  );
}

export default LastFewMonths;