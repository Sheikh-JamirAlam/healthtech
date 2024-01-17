"use client";

import { useState, useEffect, useCallback } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "@iconify/react";

export function Carousel(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [windowWidth, setWindowWidth] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });
  const [sliceValue, setSliceValue] = useState(3);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = (): void => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth >= 992) {
      setSliceValue(3);
    } else if (windowWidth >= 440) {
      setSliceValue(2);
    } else {
      setSliceValue(1);
    }
  }, [windowWidth]);

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

  const onInit = useCallback((embla: EmblaCarouselType) => {
    setScrollSnaps(embla.scrollSnapList());
  }, []);

  const onSelect = useCallback((embla: EmblaCarouselType) => {
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnDisabled(!embla.canScrollPrev());
    setNextBtnDisabled(!embla.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const openInNewTab = (url: string): void => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-24">
      <div className="overflow-hidden">
        <div className="w-full" ref={emblaRef}>
          {sliceValue === 3 ? (
            <div className="flex">
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://www.healthtech1.uk/innovation-hub");
                  }}
                  className="h-20 cursor-pointer"
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/629782162399ae1c6d80725e_accurxlogo.png"
                  alt="AccuRx"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://nhscep.com/");
                  }}
                  className="h-20 cursor-pointer"
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/62978481d15cd1eb4101213b_NHSclinicalentrepreneurprogramme-p-500.png"
                  alt="NHS"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://www.linkedin.com/feed/update/urn:li:activity:6835895897797206016/");
                  }}
                  className="h-20 cursor-pointer"
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/619793789669eaa93221b34a_HSJ%20Awards%202021_RESIZE-01-p-500.jpeg"
                  alt="HSJ"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab(
                      "https://www.linkedin.com/posts/rajkumarkohli_1lesstask-healthcare-healthtech-activity-6911997273832841217-ZsLF/?utm_source=linkedin_share&utm_medium=member_desktop_web"
                    );
                  }}
                  className="h-20 cursor-pointer"
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/623135618ebb4019ae0147d6_GuardianLogoNew.png"
                  alt="The Guardian"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className="h-20 cursor-pointer"
                  src="/DigitalHealth.png"
                  alt="Digital Health"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className="h-20 cursor-pointer"
                  src="/GreaterLondon.png"
                  alt="Greater London"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className="h-20 cursor-pointer"
                  src="/EuropeanUnion.png"
                  alt="European Union"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className="h-20 cursor-pointer"
                  src="/UCLPartners.png"
                  alt="UCL Partners"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className="h-20 cursor-pointer"
                  src="/HealthInnovation.png"
                  alt="Health Innovation"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className="h-20 cursor-pointer"
                  src="/MedCity.png"
                  alt="MedCity"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className="h-20 cursor-pointer"
                  src="/CWPlus.png"
                  alt="=CW Plus"
                />
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="min-w-0 grid grid-flow-col justify-items-center flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://www.healthtech1.uk/innovation-hub");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/629782162399ae1c6d80725e_accurxlogo.png"
                  alt="AccuRx"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://nhscep.com/");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/62978481d15cd1eb4101213b_NHSclinicalentrepreneurprogramme-p-500.png"
                  alt="NHS"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://www.linkedin.com/feed/update/urn:li:activity:6835895897797206016/");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/619793789669eaa93221b34a_HSJ%20Awards%202021_RESIZE-01-p-500.jpeg"
                  alt="HSJ"
                />
                <img
                  onClick={(): void => {
                    openInNewTab(
                      "https://www.linkedin.com/posts/rajkumarkohli_1lesstask-healthcare-healthtech-activity-6911997273832841217-ZsLF/?utm_source=linkedin_share&utm_medium=member_desktop_web"
                    );
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="https://uploads-ssl.webflow.com/61114f16d48cb8a800a4f117/623135618ebb4019ae0147d6_GuardianLogoNew.png"
                  alt="The Guardian"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="/DigitalHealth.png"
                  alt="Digital Health"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="/GreaterLondon.png"
                  alt="Greater London"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="/EuropeanUnion.png"
                  alt="European Union"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="/UCLPartners.png"
                  alt="UCL Partners"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="/HealthInnovation.png"
                  alt="Health Innovation"
                />
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="/MedCity.png"
                  alt="MedCity"
                />
              </div>
              <div className="min-w-0 grid grid-flow-col justify-items-center gap-4 flex-100">
                <img
                  onClick={(): void => {
                    openInNewTab("https://digitalhealth.london/innovation-directory/profile/healthtech-1");
                  }}
                  className={`${sliceValue === 2 ? "h-16" : "h-10"} cursor-pointer`}
                  src="/CWPlus.png"
                  alt="=CW Plus"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="pt-8 flex justify-center items-center gap-6">
        <button disabled={prevBtnDisabled} className={`${sliceValue === 3 ? "text-3xl" : "text-lg"} ${prevBtnDisabled && "text-gray-500"}`} onClick={scrollPrev}>
          <Icon icon="material-symbols:arrow-back-rounded" />
        </button>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollTo(index);
              }}
              className={`${sliceValue === 3 ? "w-3 h-3" : "w-2 h-2"} mx-2 rounded-full ${index === selectedIndex ? "bg-primary-blue" : "bg-slate-300"}`}
            />
          ))}
        </div>
        <button disabled={nextBtnDisabled} className={`${sliceValue === 3 ? "text-3xl" : "text-lg"} ${nextBtnDisabled && "text-gray-500"}`} onClick={scrollNext}>
          <Icon icon="material-symbols:arrow-forward-rounded" />
        </button>
      </div>
    </div>
  );
}
