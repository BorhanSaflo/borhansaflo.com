import { useLayoutEffect, useState } from "react";
import _ from "lodash";

const useScrollSpy = (ids: string[], offset: number = 0) => {
  const [currentSectionID, setCurrentSectionID] = useState("");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const clamp = (value: number) => Math.max(0, value);
  const isBetween = (value: number, floor: number, ceil: number) =>
    value >= floor && value <= ceil;

  useLayoutEffect(() => {
    const scrollListener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      if (scroll > 0 && !isScrolled) setIsScrolled(true);
      else if (scroll === 0 && isScrolled) setIsScrolled(false);

      if (position) setCurrentSectionID(position.id);
      else setCurrentSectionID("");
    };

    const resizeListener = () => {
      if (window.innerWidth < 768 && !isMobile) {
        setIsMobile(true);
      } else if (window.innerWidth >= 768 && (isMobile || isMobile === null)) {
        setIsMobile(false);
      }
    };

    scrollListener();
    resizeListener();

    window.addEventListener("resize", resizeListener);
    window.addEventListener("scroll", _.throttle(scrollListener, 200));

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("scroll", _.throttle(scrollListener, 200));
    };
  }, [ids, offset, isMobile, isScrolled]);

  return { currentSectionID, isMobile, isScrolled };
};

export default useScrollSpy;
