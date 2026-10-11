"use client";
import SVGShape from "./SVGShape";
import Button from "./Button";
import { PortableText } from "@portabletext/react";
import Laptop from "./Laptop";
import { SectionBody } from "@/types/Section";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  section: SectionBody;
}

const animationVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const subHeading = [
  "rich-text:max-w-[350px] rich-text:leading-[1.5em] rich-text:text-dark-primary rich-text:text-[1.2rem] rich-text:font-semibold",
  "md:rich-text:max-w-[500px] md:rich-text:text-[1.4rem]",
  "rich-text-inline:inline-flex rich-text-inline:relative rich-text-inline:px-[2px] rich-text-inline:overflow-hidden rich-text-inline:underline-offset-2 rich-text-inline:decoration-primary-highlight!",
  "rich-text-inline:after:content-[''] rich-text-inline:after:absolute rich-text-inline:after:bottom-0 rich-text-inline:after:left-0 rich-text-inline:after:-z-1 rich-text-inline:after:w-full rich-text-inline:after:h-full rich-text-inline:after:bg-primary-highlight rich-text-inline:after:transform-[translate3d(-101%,0,0)] rich-text-inline:after:transition-[transform] rich-text-inline:after:ease-in-out rich-text-inline:hover:after:transform-[translate3d(0,0,0)]",
];

function Hero({ section }: HeroProps) {
  return (
    <div
      className="relative overflow-hidden z-0 bg-[linear-gradient(0deg,var(--color-secondary)_0%,var(--color-primary)_100%)] before:content-[''] before:-z-1 before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-(image:--hero-pattern) before:animate-hero-spin"
      id={section.id}>
      <div className="flex items-center justify-center w-full min-h-screen py-[100px] overflow-hidden">
        <div className="flex items-center justify-center flex-col gap-[40px] max-w-site px-[30px] mx-auto lg:flex-1 lg:flex-row lg:gap-0">
          <motion.div
            className="flex items-center justify-center flex-col gap-[0.3em] pb-[10px] text-center lg:flex-1 lg:items-start lg:text-left"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={animationVariants}>
            <div className={subHeading.join(" ")}>
              <span>
                <PortableText value={section.subSections[0].content} />
              </span>
            </div>
            <h1 className="whitespace-nowrap text-dark-primary text-[2.8rem] font-bold lg:text-[3.7rem]">
              {section.heading}
            </h1>
            <div className={subHeading.join(" ")}>
              <PortableText value={section.subSections[1].content} />
            </div>
            <div className="flex items-center justify-center flex-col gap-[1em] w-full mt-[1.2rem] lg:flex-row lg:justify-start">
              {section.subSections[1].buttons?.map((button) => (
                <Button
                  key={button.text}
                  icon={button.icon}
                  text={button.text}
                  link={button.link}
                  type={button.type}
                />
              ))}
            </div>
          </motion.div>
          <div className="flex items-center justify-center flex-col gap-[0.3em] pb-[10px] text-center lg:flex-1 lg:items-end">
            <Laptop />
          </div>
        </div>
      </div>
      <SVGShape />
    </div>
  );
}

export default Hero;
