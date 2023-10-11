"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function IntroductionLoom(): JSX.Element {
  const ref = useRef<null | HTMLDivElement>(null);
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

  return (
    <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="w-[34rem] h-[34rem] flex justify-center items-center transition-all duration-300 hover:grayscale">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/6449689e17db15e15c7852a1_Perfocal_27-04-21_8XNI7O4T_229.jpeg_standard-p-1080.jpg"
          alt="Intro"
        />
        {/* <iframe
      className="embedly-embed"
      src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.loom.com%2Fembed%2F30eadc35df9946cab305b4a81eb21f80&display_name=Loom&url=https%3A%2F%2Fwww.loom.com%2Fshare%2F30eadc35df9946cab305b4a81eb21f80&image=https%3A%2F%2Fcdn.loom.com%2Fsessions%2Fthumbnails%2F30eadc35df9946cab305b4a81eb21f80-00001.gif&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=loom\"
      width="940"
      height="705"
      title="Loom embed"
      allow="autoplay; fullscreen"
      allowFullScreen={true}
    ></iframe> */}
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
