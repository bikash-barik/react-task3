import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OnScrollRevealComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
    threshold: 0.5, // Adjust as needed, represents the percentage of the component's visibility needed to trigger the animation
  });

  return (
    <div ref={ref} className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state before entering the viewport
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when component enters viewport
        transition={{ duration: 0.5 }} // Adjust as needed
      >
        <h1>This component animates on scroll reveal!</h1>
      </motion.div>
    </div>
  );
};

export default OnScrollRevealComponent;





