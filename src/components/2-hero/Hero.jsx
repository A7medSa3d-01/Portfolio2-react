import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef()
  return (
    <div className="hero flex">
      <div className="left-side">
        <div className="parent flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="public\portfolio.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified" />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          MERN Stack web developer.
        </motion.h1>

        <p className="sub-title">
          I'm Ahmed Saad, a mern stack web developer Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Modi veniam maiores alias, molestias
          laborum consectetur odit praesentium. Fugiat reiciendis dicta
          perferendis optio inventore! Molestiae, sequi.
        </p>
        <div className="social flex">
          <span className="icon icon-x"></span>
          <span className="icon icon-instagram"></span>
          <span className="icon icon-github"></span>
          <span className="icon icon-linkedin"></span>
        </div>
      </div>
      <div className="right-side animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com
            lottieRef.current.setSpeed(0.5);
          }}
          style={{ height: 500, left: 0 }}
          animationData={devAnimation}
        />
      </div>
    </div>
  );
}
