"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TextCarousel = () => {
  const controls = useAnimation();
  const announcement = "Admissions begin for 2026/2027 Session";

  // Duplicate the announcement for seamless looping
  const carouselText = `${announcement} • ${announcement} • ${announcement} • ${announcement} • ${announcement}`;

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: "-50%", // Move to the left to show the repeated text
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust speed of scrolling
            ease: "linear",
          },
        },
      });
    };
    animateCarousel();
  }, [controls]);

  return (
    <div className="bg-[#B59410] text-white py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        <motion.div
          animate={controls}
          className="whitespace-nowrap"
          style={{ display: "inline-block" }}
        >
          {carouselText}
        </motion.div>
      </div>
    </div>
  );
};

export default TextCarousel;
