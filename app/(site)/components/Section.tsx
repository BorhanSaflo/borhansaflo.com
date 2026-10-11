"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import type { Section as SectionType } from "@/types/Section";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Section = ({ section, children }: { section: SectionType; children: React.ReactNode }) => {
  const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  return (
    <div
      id={section.id}
      className="flex items-center justify-center w-full py-[100px] not-nth-2:border-t not-nth-2:border-border">
      <motion.div
        className="flex flex-col gap-10 w-site py-[10px] px-[30px] overflow-x-hidden will-change-auto!"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardVariants}>
        <h2 className="text-[2.2rem] after:content-[''] after:block after:rounded-base after:w-20 after:h-[4px] after:mt-4 after:bg-primary">
          {section.heading}
        </h2>
        <div className="flex flex-col gap-32">
          {section.subSections?.map((subSection) => {
            return (
              <div
                className="flex flex-col items-center justify-center gap-12 w-full mt-[0.5em] lg:flex-row"
                key={subSection.name}>
                <div
                  className={clsx(
                    "flex flex-[1.4_1_0] flex-col gap-4 w-full leading-[calc(1ex/0.32)] text-dark-primary items-start text-left",
                    subSection.switchOrder ? "lg:order-2" : "lg:order-1"
                  )}>
                  {subSection.heading && (
                    <h3 className="text-dark-primary text-[1.5em] font-bold">
                      {subSection.heading}
                    </h3>
                  )}
                  <PortableText
                    value={subSection.content}
                    components={{
                      marks: {
                        link: ({ children, value }) => {
                          const rel = !value.href.startsWith("/")
                            ? "noopener noreferrer"
                            : undefined;
                          return (
                            <a href={value.href} target="_blank" rel={rel}>
                              {children}
                            </a>
                          );
                        },
                      },
                    }}
                  />
                  {subSection.buttons && (
                    <div className="flex gap-4 flex-row self-auto mt-4 flex-wrap">
                      {subSection.buttons?.map((button) => (
                        <Button
                          key={button.text}
                          icon={button.icon}
                          text={button.text}
                          link={button.link}
                          type={button.type}
                        />
                      ))}
                    </div>
                  )}
                </div>
                {subSection.image && (
                  <div
                    className={clsx(
                      "select-none w-[28rem] border border-border rounded-base transition-all duration-300 ease-in-out shadow-card hover:transform-[scale(1.02)] md:w-[23rem]",
                      subSection.switchOrder ? "lg:order-1" : "lg:order-2"
                    )}>
                    <Image
                      src={subSection.image}
                      width="1400"
                      height="900"
                      placeholder="blur"
                      blurDataURL={rgbDataURL(253, 251, 250)}
                      alt={subSection.imageAlt}
                      sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export default Section;
