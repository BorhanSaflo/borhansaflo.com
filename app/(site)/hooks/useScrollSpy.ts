import { useLayoutEffect, useState } from "react";

const useScrollSpy = (ids: string[], offset: number = 0) => {
  const [currentSectionID, setCurrentSectionID] = useState("");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const observerTarget = document.createElement("div");
    const scrollDetector = document.createElement("div");

    const commonStyles = {
      position: "absolute",
      left: "0",
      right: "0",
      height: "1px",
      pointerEvents: "none",
      zIndex: "-1",
      opacity: "0",
      visibility: "hidden",
    } as const;

    Object.assign(observerTarget.style, {
      ...commonStyles,
      position: "fixed",
      top: "100px",
    });

    Object.assign(scrollDetector.style, {
      ...commonStyles,
      top: "0",
    });

    const fragment = document.createDocumentFragment();
    fragment.appendChild(observerTarget);
    fragment.appendChild(scrollDetector);
    document.body.appendChild(fragment);

    // Pre-calculate rootMargin
    const rootMargin = `-${100 + offset}px 0px -${window.innerHeight - 100 - offset}px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          const intersectingSection = entries.find((entry) => entry.isIntersecting);
          if (intersectingSection?.target) {
            setCurrentSectionID(intersectingSection.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin,
      }
    );

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          requestAnimationFrame(() => {
            setIsScrolled(!entry.isIntersecting);
          });
        }
      },
      { threshold: 1.0 }
    );

    const validElements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    validElements.forEach((element) => observer.observe(element));
    scrollObserver.observe(scrollDetector);

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };

    // Initial mobile check
    handleResize();

    // Add event listener with error handling
    window.addEventListener("resize", handleResize, { passive: true });

    // Cleanup function
    return () => {
      clearTimeout(resizeTimeout);

      observer.disconnect();
      scrollObserver.disconnect();
      if (document.body.contains(observerTarget)) {
        document.body.removeChild(observerTarget);
      }
      if (document.body.contains(scrollDetector)) {
        document.body.removeChild(scrollDetector);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [ids, offset]);

  return { currentSectionID, isMobile, isScrolled };
};

export default useScrollSpy;
