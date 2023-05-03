import { useLayoutEffect, useState } from "react";
import _ from "lodash";

const useScrollSpy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const clamp = (value: number) => Math.max(0, value);
  const isBetween = (value: number, floor: number, ceil: number) =>
    value >= floor && value <= ceil;

  useLayoutEffect(() => {
    const listener = () => {
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

      if (window.innerWidth < 768 && !isMobile) {
        setIsMobile(true);
      } else if (window.innerWidth >= 768 && isMobile) {
        setIsMobile(false);
      }

      if (scroll > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scroll === 0 && isScrolled) {
        setIsScrolled(false);
      }

      if (position) setActiveId(position.id);
      else setActiveId("");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", _.throttle(listener, 200));

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", _.throttle(listener, 200));
    };
  }, [ids, offset, isMobile, isScrolled]);

  return { activeId, isMobile, isScrolled };
};

export default useScrollSpy;
