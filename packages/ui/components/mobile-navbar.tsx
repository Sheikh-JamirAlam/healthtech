"use client";

import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import type { Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { Registration, LabReports, Triage, CaseStudy, PracticeLove, Team, OpenRoles } from "./icons";

const sidebar: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
    transition: { delay: 0.2 },
  },
};

const navigationVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07 },
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
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface ExpandedState {
  solutions: boolean;
  resources: boolean;
  company: boolean;
  careers: boolean;
}

function Path(props: { variants?: { closed: { d?: string; opacity?: number }; open: { d?: string; opacity?: number } }; d?: string; transition?: { duration: number } }): JSX.Element {
  return <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />;
}

export function MobileNavbar(): JSX.Element {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [expanded, setExpanded] = useState<ExpandedState>({ solutions: false, resources: false, company: false, careers: false });

  const expand = (target: string): void => {
    setExpanded((prevState) => {
      const updatedState: ExpandedState = { ...prevState };
      Object.keys(updatedState).forEach((key) => {
        updatedState[key as keyof ExpandedState] = key === target ? !prevState[key as keyof ExpandedState] : false;
      });
      return updatedState;
    });
  };

  return (
    <main id="menu" className="w-full py-6 px-16 absolute flex justify-evenly mobile:hidden z-50 bg-primary-white">
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
        <motion.div className="w-full h-screen bg-primary-white absolute left-0 shadow-xl" variants={sidebar} />
        <motion.ul className="w-full text-left absolute left-0 pt-2 pb-8 px-12" variants={navigationVariants}>
          <motion.li className="flex flex-wrap justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div
              className="w-full flex justify-between items-end"
              onClick={() => {
                expand("solutions");
              }}
            >
              <div className="pt-4 rounded-lg cursor-pointer font-medium">Solutions</div>
              <Icon id="solutions" className={`w-fit text-2xl cursor-pointer transition-all menu-item ${expanded.solutions && "rotate-180"}`} icon="material-symbols:keyboard-arrow-down" />
            </div>
            {expanded.solutions ? (
              <motion.div
                className="w-full mt-4 py-4 flex-grow border-t-2 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 font-semibold text-primary-blue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a href="/" className="w-fit">
                  <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                    <Registration />
                    <p className="pl-2">PATIENT REGISTRATIONS</p>
                  </div>
                </a>
                <a href="/lab-reports" className="w-fit">
                  <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                    <LabReports />
                    <p className="pl-2">LAB REPORTS</p>
                  </div>
                </a>
                <a href="/innovation-hub" className="w-fit">
                  <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                    <Triage />
                    <p className="pl-2">PATIENT TRIAGE</p>
                  </div>
                </a>
              </motion.div>
            ) : null}
          </motion.li>
          <motion.li className="flex flex-wrap justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div
              className="w-full flex justify-between items-end"
              onClick={() => {
                expand("resources");
              }}
            >
              <div className="pt-4 rounded-lg cursor-pointer font-medium">Resources</div>
              <Icon id="resources" className={`w-fit text-2xl cursor-pointer transition-all menu-item ${expanded.resources && "rotate-180"}`} icon="material-symbols:keyboard-arrow-down" />
            </div>
            {expanded.resources ? (
              <motion.div
                className="w-full mt-4 py-4 flex-grow border-t-2 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 font-semibold text-primary-blue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a href="/case-studies" className="w-fit">
                  <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                    <CaseStudy />
                    <p className="pl-2">CASE STUDIES</p>
                  </div>
                </a>
                <a href="/love" className="w-fit">
                  <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                    <PracticeLove />
                    <p className="pl-2">PRACTICE LOVE</p>
                  </div>
                </a>
              </motion.div>
            ) : null}
          </motion.li>
          <motion.li className="flex flex-wrap justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div
              className="w-full flex justify-between items-end"
              onClick={() => {
                expand("company");
              }}
            >
              <div className="pt-4 rounded-lg cursor-pointer font-medium">Company</div>
              <Icon id="company" className={`w-fit text-2xl cursor-pointer transition-all menu-item ${expanded.company && "rotate-180"}`} icon="material-symbols:keyboard-arrow-down" />
            </div>
            {expanded.company ? (
              <motion.div
                className="w-full mt-4 py-4 flex-grow border-t-2 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 font-semibold text-primary-blue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a href="/about" className="w-fit">
                  <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                    <Team />
                    <p className="pl-2">MEET THE TEAM</p>
                  </div>
                </a>
              </motion.div>
            ) : null}
          </motion.li>
          <motion.li className="flex flex-wrap justify-between items-end px-4 py-2 border-b-2" variants={menuItemVariants}>
            <div
              className="w-full flex justify-between items-end"
              onClick={() => {
                expand("careers");
              }}
            >
              <div className="pt-4 rounded-lg cursor-pointer font-medium">Careers</div>
              <Icon id="careers" className={`w-fit text-2xl cursor-pointer transition-all menu-item ${expanded.careers && "rotate-180"}`} icon="material-symbols:keyboard-arrow-down" />
            </div>
            {expanded.careers ? (
              <motion.div
                className="w-full mt-4 py-4 flex-grow border-t-2 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 font-semibold text-primary-blue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a href="https://docs.healthtech1.uk/careers" className="w-fit">
                  <div className="w-72 h-16 flex items-center hover:bg-secondary-grey transition-colors duration-300 rounded-lg cursor-pointer">
                    <OpenRoles />
                    <p className="pl-2">OPEN ROLES</p>
                  </div>
                </a>
              </motion.div>
            ) : null}
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
