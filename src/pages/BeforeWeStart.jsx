import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BeforeWeStart() {
  const navigate = useNavigate();

  return (
    <main className="before-page">

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <motion.div
        className="before-content"
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

        <p className="small-heading">BEFORE WE START</p>

        <h1>
          Just be
          <span>honest with me.</span>
        </h1>

        <p className="before-text">
          I don't want you to choose the answers you think I want to hear.
        </p>

        <p className="before-text secondary">
          And I don't want you to rush through this either.
        </p>

        <p className="before-text">
          Just answer honestly. That's all I'm asking.
        </p>

        <motion.button
          className="start-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/our-story")}
        >
          <span>Okay, let's start</span>
          <ArrowRight size={19} />
        </motion.button>

        <p className="bottom-note">
          There are a few things I want you to know.
        </p>
      </motion.div>
    </main>
  );
}

export default BeforeWeStart;