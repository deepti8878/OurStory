import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Landing() {
    const navigate = useNavigate();

    return (
        <main className="landing-page">

            <div className="background-glow glow-one" />
            <div className="background-glow glow-two" />

            <motion.div
                className="landing-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                <motion.div
                    className="heart-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.6,
                        type: "spring",
                    }}
                >
                    <Heart size={28} fill="currentColor" />
                </motion.div>

                <motion.p
                    className="small-heading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    THIS ISN'T A QUIZ
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    I need to tell you
                    <span> something.</span>
                </motion.h1>

                <motion.p
                    className="intro-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                >
                    There are things I've been feeling for a long time
                    that I haven't been able to say properly.
                </motion.p>

                <motion.p
                    className="intro-text secondary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                >
                    So I made this for you.
                </motion.p>

                <motion.button
                    className="start-button"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/before-we-start")}
                >
                    <span>I'm listening</span>
                    <ArrowRight size={19} />
                </motion.button>

                <motion.p
                    className="bottom-note"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    Please go through this honestly.
                </motion.p>

            </motion.div>
        </main>
    );
}

export default Landing;