"use client";

import { useEffect } from "react";

interface PropTypes {
  handleVisibility: () => void;
  isClosed: boolean;
}

export function Modal({ handleVisibility, isClosed }: PropTypes): JSX.Element {
  useEffect(() => {
    if (isClosed === true) {
      document.getElementById("loading")?.classList.remove("hidden");
    } else {
      const modalBackdrop = document.getElementById("modal-backdrop");
      const iframe = document.getElementById("iframe");
      const handleLoad = (): void => {
        setTimeout(() => {
          document.getElementById("loading")?.classList.add("hidden");
          iframe?.classList.toggle("hidden");
        }, 1500);
      };
      iframe?.addEventListener("load", handleLoad);
      modalBackdrop?.addEventListener("click", handleVisibility);
      return () => {
        iframe?.removeEventListener("load", handleLoad);
        modalBackdrop?.removeEventListener("click", handleVisibility);
      };
    }
  }, [handleVisibility, isClosed]);

  return (
    <div id="modal-body" className="fixed inset-0 z-50 hidden">
      <div id="modal-backdrop" className="w-full h-full inset-0 absolute z-50 bg-black opacity-90 hidden" />
      <div id="modal" className="w-full h-full inset-0 absolute z-50 hidden justify-center items-center pointer-events-none">
        <div className="absolute text-white text-6xl" id="loading">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
            <path
              fill="currentColor"
              d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            >
              <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
            </path>
          </svg>
        </div>
        {!isClosed && (
          <iframe
            id="iframe"
            className="hidden pointer-events-auto"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.loom.com%2Fembed%2F30eadc35df9946cab305b4a81eb21f80&display_name=Loom&url=https%3A%2F%2Fwww.loom.com%2Fshare%2F30eadc35df9946cab305b4a81eb21f80&image=https%3A%2F%2Fcdn.loom.com%2Fsessions%2Fthumbnails%2F30eadc35df9946cab305b4a81eb21f80-00001.gif&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=loom"
            width="940"
            height="705"
            title="Loom embed"
            allow="autoplay; fullscreen"
            scrolling="no"
            frameBorder={0}
            allowFullScreen
          />
        )}

        <button onClick={handleVisibility} className="p-4 m-4 top-0 right-0 absolute text-white text-xl pointer-events-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
            <path
              fill="currentColor"
              d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
