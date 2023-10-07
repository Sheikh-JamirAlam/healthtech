"use client";

import { motion, useCycle } from "framer-motion";
import type { Variants } from "framer-motion";

// const sidebar: Variants = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(25px at 35px 31px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

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

  return (
    <main className="py-6 px-16 flex justify-evenly mobile:hidden">
      <div>
        <a href="/">
          <img alt="Healthtech Logo" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/64b971031f48da0992c112e5_Screenshot%202023-06-19%20at%2012.15.25.png" className="w-[4rem]" />
        </a>
      </div>

      <motion.nav id="menu" className="w-full text-right pointer-events-none" initial={false} animate={isOpen ? "open" : "closed"}>
        <button
          className="h-full rounded-full pointer-events-auto"
          onClick={() => {
            toggleOpen();
            // document.getElementById("menu")?.classList.toggle("absolute");
            // document.getElementById("menu")?.classList.toggle("fixed");
            document.getElementById("menu")?.classList.toggle("pointer-events-none");
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
        {/* <motion.div className="bg-red-400 z-[2] w-full shadow-3xl" variants={sidebar} /> */}
        <motion.ul className="w-full text-left absolute left-0 p-5 z-[2] " variants={navigationVariants}>
          <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">DISCOVER</span>
          </motion.li>
          <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">FOLLOWING</span>
          </motion.li>
          <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">CHAT-GPT</span>
          </motion.li>
          <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">CREATE</span>
          </motion.li>
        </motion.ul>
      </motion.nav>

      {/* <div className="text-lg font-medium text-center grid grid-flow-col gap-5 content-center items-center">
        <span className="w-24 cursor-pointer">Solutions</span>
        <span className="w-24 cursor-pointer">Resources</span>
        <span className="w-24 cursor-pointer">Company</span>
        <span className="w-24 cursor-pointer">Careers</span>
      </div>
      <div className="my-auto text-primary-white font-medium">
        <button className="py-4 px-7 rounded-xl bg-primary-blue outline-none shadow-lg transform hover:bg-accent-blue hover:text-primary-black active:scale-90 transition-all">Start for free</button>
      </div> */}
    </main>
  );
}
