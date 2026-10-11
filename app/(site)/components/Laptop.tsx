"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const toolbarDots = ["bg-[#ff5658]", "bg-[#e7c91f]", "bg-[#4fc32b]"];

const codeLines = [
  ["56%", "20px", 0.6, "-9.5px"],
  ["66%", "26px", 0.7, "-15.5px"],
  ["44%", "34px", 0.8, "-23.5px"],
  ["54%", "32px", 0.9, "-21.5px"],
  ["54%", "41px", 1, "-30.5px"],
  ["31%", "18150px", 1.1, undefined],
  ["64%", "1690px", 1.2, undefined],
  ["61%", "1410px", 1.3, undefined],
  ["47%", "12170px", 1.4, undefined],
  ["47%", "10180px", 1.5, undefined],
  ["51%", "8170px", 1.6, undefined],
  ["65%", "6180px", 1.7, undefined],
] as const;

function Laptop() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0", "end 0.6"],
  });
  const springScrollY = useSpring(scrollYProgress, { stiffness: 350, damping: 150 });
  const rotateX = useTransform(springScrollY, [1, 0], [360, 275.5]);

  return (
    <a
      ref={element}
      className="w-[20.4em] h-[11.4em] perspective-[1200px] pressable hover:transform-[scale(1.01)] active:transform-[scale(0.98)] md:w-[24.48em] md:h-[13.68em] lg:w-[25.5em] lg:h-[14.25em]"
      href="#projects"
      aria-label="Projects">
      <motion.div
        className="relative w-[81%] h-[93%] m-auto rounded-t-[3.5%] bg-black overflow-hidden origin-bottom transform-3d before:content-[''] before:absolute before:top-[0.2em] before:right-0 before:left-0 before:z-3 before:w-[10%] before:h-[4%] before:m-auto before:rounded-b-[10%] before:bg-black after:content-[''] after:absolute after:top-0 after:right-0 after:z-2 after:w-0 after:h-0 after:border-t-[6em] after:border-t-[#ffffff05] after:border-l-[6em] after:border-l-transparent"
        style={{ rotateX }}>
        <div className="flex absolute top-[2.5%] left-[1.45%] gap-[2px] items-center justify-start z-1 w-[97%] h-[2.5%] pl-[0.4em] rounded-t-[0.5em] bg-[rgb(50,50,50)]">
          {toolbarDots.map((color) => (
            <div
              key={color}
              className={`w-[0.2rem] h-[0.2rem] rounded-[50%] ${color}`}
              aria-hidden="true"
            />
          ))}
        </div>
        <ul className="absolute top-[2.5%] left-[1.45%] -z-1 w-[97%] h-[95%] py-[5%] px-[7%] m-0 rounded-t-[3%] bg-[#252018] list-none">
          {codeLines.map(([width, left, delay, numberOffset]) => (
            <li
              key={left}
              aria-hidden="true"
              className="relative opacity-0 h-[3%] my-[0.4em] rounded-[0.3em] bg-[rgb(180,180,180)] bg-[linear-gradient(to_right,#f3b153,#fadcb2,#f3b153)] [counter-increment:liCounter] animate-laptop-line md:h-[3.5%] after:content-[counter(liCounter)] after:absolute after:top-0 after:left-(--number-offset) after:-mt-[0.4em] after:-ml-[2.3em] after:text-line-number after:text-[0.5em] after:font-bold md:after:text-[0.6em]"
              style={
                {
                  width,
                  left,
                  animationDelay: `${delay}s, 0s`,
                  "--number-offset": numberOffset,
                } as React.CSSProperties
              }
            />
          ))}
        </ul>
      </motion.div>
      <div className="relative w-full h-[2.5%] bg-[#d1d2d6] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1em] before:h-full before:bg-[linear-gradient(90deg,rgba(209,210,214,0.35)_0,rgba(118,119,123,0.35)_51%,rgba(209,210,214,0.35)_99%)] after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1em] after:h-full after:bg-[linear-gradient(90deg,rgba(209,210,214,0.35)_0,rgba(118,119,123,0.35)_51%,rgba(209,210,214,0.35)_99%)]">
        <div className="w-[10%] h-[60%] m-auto rounded-b-[2em] bg-[linear-gradient(180deg,rgba(153,154,158,0.75)_30%,rgba(44,45,47,0.6)_90%)]"></div>
      </div>
      <div className="h-[1.7%] m-auto rounded-b-[2em] shadow-[0_5px_15px_#0000004d,0_2px_6px_#00000080] bg-[linear-gradient(180deg,rgba(153,154,158,0.75)_30%,rgba(44,45,47,0.6)_90%)]"></div>
    </a>
  );
}

export default Laptop;
