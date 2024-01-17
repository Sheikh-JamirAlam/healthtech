"use client";

import { useEffect, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

export function Notifications(): JSX.Element {
  const isNotified = useRef(false);
  const notify = () =>
    toast.custom(
      (t) => (
        <div className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-[40rem] w-full bg-primary-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <p className="font-medium text-gray-900">
              We&apos;re inviting practices to our automated blood test result filing and auto-creating blood tests pilot.&nbsp;
              <a href="https://www.healthtech1.uk/lab-reports" className="text-indigo-600 hover:text-indigo-500 underline cursor-pointer">
                Click here to learn more.
              </a>
            </p>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 outline-none"
            >
              Close
            </button>
          </div>
        </div>
      ),
      { duration: 600000 }
    );

  useEffect(() => {
    if (!isNotified.current) {
      isNotified.current = true;
      notify();
    }
  }, []);

  return (
    <Toaster
      containerStyle={{
        bottom: 40,
      }}
      position="bottom-center"
      reverseOrder={false}
    />
  );
}
