"use client";

import { motion, useCycle } from "framer-motion";
import type { Variants } from "framer-motion";
import { Icon } from "@iconify/react";

const sidebar: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const navigationVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function Path(props: { variants?: { closed: { d?: string; opacity?: number }; open: { d?: string; opacity?: number } }; d?: string; transition?: { duration: number } }): JSX.Element {
  return <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />;
}

export function MobileNavbar(): JSX.Element {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const expand = (target: string): void => {
    document.getElementById(target)?.classList.toggle("rotate-180");
  };

  return (
    <main id="menu" className="w-screen py-6 px-16 absolute flex justify-evenly mobile:hidden z-50 bg-primary-white">
      <div>
        <a href="/">
          <img alt="Healthtech Logo" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/64b971031f48da0992c112e5_Screenshot%202023-06-19%20at%2012.15.25.png" className="w-[4rem]" />
        </a>
      </div>

      <motion.nav id="options" className="w-full text-right pointer-events-none" initial={false} animate={isOpen ? "open" : "closed"}>
        <button
          className="h-full rounded-full pointer-events-auto"
          onClick={() => {
            toggleOpen();
            document.getElementById("menu")?.classList.toggle("absolute");
            document.getElementById("menu")?.classList.toggle("fixed");
            document.getElementById("options")?.classList.toggle("pointer-events-none");
          }}
        >
          <svg width="30" height="30" viewBox="0 0 25 25">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
        <motion.div className="w-full h-[21rem] bg-primary-white absolute left-0 shadow-xl" variants={sidebar} />
        <motion.ul className="w-full text-left absolute left-0 pt-2 pb-8 px-12" variants={navigationVariants}>
          <motion.li className="flex justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div className="pt-4 rounded-lg cursor-pointer">Solutions</div>
            <Icon
              id="solutions"
              className="w-fit text-2xl cursor-pointer transition-all"
              icon="material-symbols:keyboard-arrow-down"
              onClick={() => {
                expand("solutions");
              }}
            />
          </motion.li>
          <motion.li className="flex justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div className="pt-4 rounded-lg cursor-pointer">Resources</div>
            <Icon
              id="resources"
              className="w-fit text-2xl cursor-pointer transition-all"
              icon="material-symbols:keyboard-arrow-down"
              onClick={() => {
                expand("resources");
              }}
            />
          </motion.li>
          <motion.li className="flex justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div className="pt-4 rounded-lg cursor-pointer">Company</div>
            <Icon
              id="company"
              className="w-fit text-2xl cursor-pointer transition-all"
              icon="material-symbols:keyboard-arrow-down"
              onClick={() => {
                expand("company");
              }}
            />
          </motion.li>
          <motion.li className="flex justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div className="pt-4 rounded-lg cursor-pointer">Careers</div>
            <Icon
              id="careers"
              className="w-fit text-2xl cursor-pointer transition-all"
              icon="material-symbols:keyboard-arrow-down"
              onClick={() => {
                expand("careers");
              }}
            />
          </motion.li>
          <motion.li className="px-2 py-6" variants={menuItemVariants}>
            <button className="py-3 px-4 rounded-xl text-primary-white bg-primary-blue outline-none shadow-lg transform hover:bg-accent-blue hover:text-primary-black active:scale-90 transition-all">
              Start for free
            </button>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </main>
  );
}
