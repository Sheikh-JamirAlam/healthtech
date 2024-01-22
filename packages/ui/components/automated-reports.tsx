"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, display: "none" },
};

export function AutomatedReports(): JSX.Element {
  const [selected, setSelected] = useState("reports");

  return (
    <div className="max-w-[80rem] px-6 md:px-16 lg:px-28 pt-16 mx-auto hidden-css">
      <div className="flex">
        <div className="w-1/2 cursor-pointer" onClick={() => setSelected("reports")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "reports" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`py-4 text-2xl font-bold text-center ${selected === "reports" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>📂 Automatically file lab reports</h3>
        </div>
        <div className="w-1/2 cursor-pointer" onClick={() => setSelected("tests")}>
          <div className={`h-[2px] bg-primary-blue ${selected === "tests" ? "w-full duration-300" : "w-0 duration-75"} transition-all duration-300`} />
          <h3 className={`py-4 text-2xl font-bold text-center ${selected === "tests" ? "opacity-1" : "opacity-40"} transition-all duration-300`}>🩸 Generate blood tests</h3>
        </div>
      </div>
      <div className="mt-3 rounded-[1rem] border-2 border-accent-blue text-darker-grey text-sm">
        <motion.p animate={selected === "reports" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="p-6 transition-all">
          Rather than getting your doctors to spend countless hours clicking through normal lab test reports, why not get Healthtech-1 to it for you? We&apos;ll also send the patient a text and email
          letting them know of their result. <br /> <br />
          We&apos;re starting with low risk normal test reports and will file more results over time. FIT tests, Covid tests, you tell us!
        </motion.p>
        <motion.p initial={{ display: "none" }} animate={selected === "tests" ? "open" : "closed"} variants={variants} transition={{ duration: 0.75 }} className="p-6 transition-all">
          We&apos;ll auto generate blood test forms for your patients to pick up at reception.
          <br />
          <br />
          <span className="font-bold">Point 1:</span> If appropriate, at the end of <span className="font-bold">new patient registration</span>, we will generate a blood test form. Useful examples
          include: HIV, Blood Borne Virus screening, Latent TB and PSA.
          <br />
          <br />
          <span className="font-bold">Point 2:</span> For a big list of patients, say all your pre-diabetic patients, generate a blood test form for every patient and invite them to pick it up. Use
          cases: HbA1c, cholesterol for call/recall, and high risk drug monitoring.
        </motion.p>
      </div>
    </div>
  );
}
