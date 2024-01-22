"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, display: "none" },
};

export function InnovativePractices(): JSX.Element {
  const [selected, setSelected] = useState("standard");

  return (
    <div className="max-w-[80rem] lg:px-12 pt-16 mx-auto hidden-css">
      <div className="lg:flex">
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto lg:mx-0 cursor-pointer" onClick={() => setSelected("standard")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "standard" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`pt-4 xl:px-6 text-2xl font-bold text-center ${selected === "standard" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>Standard Practice</h3>
          <p className={`pb-4 px-2 text-sm text-center ${selected === "standard" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>
            Collect and code over 99 data points for each of your patients
          </p>
        </div>
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto lg:mx-0 cursor-pointer" onClick={() => setSelected("federation")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "federation" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`pt-4 xl:px-6 text-2xl font-bold text-center ${selected === "federation" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>Practice Federation</h3>
          <p className={`pb-4 px-2 text-sm text-center ${selected === "federation" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>
            Standardise processes and data collection for local needs
          </p>
        </div>
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto lg:mx-0 cursor-pointer" onClick={() => setSelected("size")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "size" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`pt-4 xl:px-6 text-2xl font-bold text-center ${selected === "size" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>List Size Growth</h3>
          <p className={`pb-4 px-2 text-sm text-center ${selected === "size" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>Grow your list and improve practice income</p>
        </div>
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto lg:mx-0 cursor-pointer" onClick={() => setSelected("university")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "university" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`pt-4 xl:px-6 text-2xl font-bold text-center ${selected === "university" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>University Practice</h3>
          <p className={`pb-4 px-2 text-sm text-center ${selected === "university" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>
            Gather the specific information you need for your students
          </p>
        </div>
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto lg:mx-0 cursor-pointer" onClick={() => setSelected("group")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "group" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`pt-4 xl:px-6 text-2xl font-bold text-center ${selected === "group" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>Group Practice</h3>
          <p className={`pb-4 px-2 text-sm text-center ${selected === "group" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>Reduce staff churn and costs with a central hub model</p>
        </div>
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto lg:mx-0 cursor-pointer" onClick={() => setSelected("dispersal")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "dispersal" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`pt-4 lg:px-2 xl:px-6 text-2xl font-bold text-center ${selected === "dispersal" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>List Dispersal</h3>
          <p className={`pb-4 px-2 text-sm text-center ${selected === "dispersal" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>Quickly and accurately register thousands of patients</p>
        </div>
      </div>
      <div className="mt-3 rounded-[1rem] border-2 border-accent-blue text-darker-grey text-sm">
        <motion.div animate={selected === "standard" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6486f4f2aabe7ea8838e8ad8_hh1-p-1600.webp" alt="Case study hearn hill 1" />
        </motion.div>
        <motion.div animate={selected === "federation" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6487802c76081c0553ea58ba_lam1-p-1600.webp" alt="Case study lambeth1" />
        </motion.div>
        <motion.div animate={selected === "size" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6487805b05b4106e7505bdef_f1-p-1600.webp" alt="Case study F4H1" />
        </motion.div>
        <motion.div animate={selected === "university" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/648782818a26ad26661f24a2_clay1-p-1600.webp" alt="Case study claypath1" />
        </motion.div>
        <motion.div animate={selected === "group" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/64878312c052fc9517d7eee6_nex1-p-1600.webp" alt="Case study nexus1" />
        </motion.div>
        <motion.div animate={selected === "dispersal" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6487833b9e74d606eb7d45d8_ww1-p-1600.webp" alt="wideway case study" />
        </motion.div>
      </div>
      <div className={`${selected === "dispersal" && "hidden"} mt-8 rounded-[1rem] border-2 border-accent-blue text-darker-grey text-sm`}>
        <motion.div animate={selected === "standard" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/64878006a0980b42732a59e6_hh2-p-1600.webp" alt="Case study hearn hill page2" />
        </motion.div>
        <motion.div animate={selected === "federation" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6487803bc3df45039144118a_lam2-p-1600.webp" alt="Case study lam2" />
        </motion.div>
        <motion.div animate={selected === "size" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/648781f0c8a8fd025854e3fa_f2-p-1600.webp" alt="Case study f4h2" />
        </motion.div>
        <motion.div animate={selected === "university" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/6487829c22c3d94601fddd73_clay2-p-1600.webp" alt="Case study pg2" />
        </motion.div>
        <motion.div animate={selected === "group" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="transition-all">
          <img className="rounded-[1rem]" src="https://assets-global.website-files.com/61114f16d48cb8a800a4f117/648783243c8e4be2ace5bbdd_nex23-p-1600.webp" alt="nexus Case study" />
        </motion.div>
      </div>
    </div>
  );
}
