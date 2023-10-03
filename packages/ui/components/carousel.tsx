"use client";

import { motion } from "framer-motion";

export function Carousel(): JSX.Element {
  return (
    <div className="py-24 mx-[20%]">
      <motion.div className="overflow-hidden">
        <motion.div className="flex" animate={{ x: "0px" }}>
          <div className="min-w-[20rem] py-10 px-14">
            <img className="" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/629782162399ae1c6d80725e_accurxlogo.png" alt="accuRx" />
          </div>
          <div className="min-w-[20rem] py-10 px-14">
            <img className="" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/62978481d15cd1eb4101213b_NHSclinicalentrepreneurprogramme-p-500.png" alt="" />
          </div>
          <div className="min-w-[20rem] py-10 px-14">
            <img className="" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/619793789669eaa93221b34a_HSJ%20Awards%202021_RESIZE-01-p-500.jpeg" alt="" />
          </div>
          <div className="min-w-[20rem] py-10 px-14">
            <img className="" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/623135618ebb4019ae0147d6_GuardianLogoNew.png" alt="" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
