"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { Icon } from "@iconify/react";

export function Carousel(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="pt-24 px-36">
      <div className="overflow-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex">
            <div className="min-w-0 grid grid-flow-col justify-items-center flex-100">
              <img className="h-20" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/629782162399ae1c6d80725e_accurxlogo.png" alt="accuRx" />
              <img className="h-20" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/62978481d15cd1eb4101213b_NHSclinicalentrepreneurprogramme-p-500.png" alt="" />
            </div>
            <div className="min-w-0 grid grid-flow-col justify-items-center flex-100">
              <img className="h-20" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/619793789669eaa93221b34a_HSJ%20Awards%202021_RESIZE-01-p-500.jpeg" alt="" />
              <img className="h-20" src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/623135618ebb4019ae0147d6_GuardianLogoNew.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-center items-center gap-6">
        <button disabled={prevBtnDisabled} className={`text-3xl ${prevBtnDisabled && "text-gray-500"}`} onClick={scrollPrev}>
          <Icon icon="material-symbols:arrow-back-rounded" />
        </button>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollTo(index);
              }}
              className={`w-3 h-3 mx-2 rounded-full ${index === selectedIndex ? "bg-primary-blue" : "bg-slate-300"}`}
            />
          ))}
        </div>
        <button disabled={nextBtnDisabled} className={`text-3xl ${nextBtnDisabled && "text-gray-500"}`} onClick={scrollNext}>
          <Icon icon="material-symbols:arrow-forward-rounded" />
        </button>
      </div>
    </div>
  );
}
