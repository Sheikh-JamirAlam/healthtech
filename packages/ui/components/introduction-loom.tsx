"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Modal } from "./modal";

export function IntroductionLoom(): JSX.Element {
  const ref = useRef<null | HTMLDivElement>(null);
  const [isClosed, setIsClosed] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const newX = useTransform(x, [-272, 272], [-60, 60]);
  const newY = useTransform(y, [-272, 272], [-60, 60]);

  const handleMouseMove = (event: React.MouseEvent): void => {
    const playButton = ref.current;
    if (playButton) {
      const rect: DOMRect = playButton.getBoundingClientRect();
      x.set(event.clientX - (rect.left + rect.width / 2));
      y.set(event.clientY - (rect.top + rect.height / 2));
    }
  };

  const handleMouseLeave = (): void => {
    x.set(0);
    y.set(0);
  };

  // const handleVisibility = (): void => {
  //   setIsClosed(!isClosed);
  // };

  // useEffect(() => {
  //   const modalBody = document.getElementById("modal-body");
  //   const modal = document.getElementById("modal");
  //   const modalBackdrop = document.getElementById("modal-backdrop");
  //   document.querySelector("body")?.classList.toggle("overflow-hidden");
  //   modalBody?.classList.toggle("hidden");
  //   modal?.classList.toggle("hidden");
  //   modal?.classList.toggle("flex");
  //   modalBackdrop?.classList.toggle("hidden");
  //   modalBackdrop?.classList.toggle("flex");
  // }, [isClosed]);

  // useEffect(() => {
  //   const handleKeyUp = (event: KeyboardEvent): void => {
  //     event.key === "Escape" && setIsClosed(!isClosed);
  //   };
  //   if (!isClosed) {
  //     window.addEventListener("keyup", handleKeyUp);
  //   }
  //   return () => window.removeEventListener("keyup", handleKeyUp);
  // }, [isClosed]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[20rem] h-[20rem] sm:w-[34rem] sm:h-[34rem] flex justify-center items-center transition-all duration-300 hover:grayscale cursor-pointer"
    >
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/6449689e17db15e15c7852a1_Perfocal_27-04-21_8XNI7O4T_229.jpeg_standard-p-1080.jpg"
          alt="Intro"
        />
      </div>
      <motion.div
        style={{ x: newX, y: newY }}
        ref={ref}
        className="w-28 h-28 bg-primary-white rounded-full absolute flex justify-center items-center overflow-hidden pointer-events-none transition-all duration-50 delay-0 ease-linear"
      >
        <div className="w-8 h-8 flex justify-center items-center">
          <img className="w-full h-full object-contain" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/63fe36bb1f67ba815a5e34a8_Vector-min.png" alt="Play button" />
        </div>
      </motion.div>
    </motion.div>
  );
}
