"use client";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import DynamicIcon from "@/lib/icons";
import { projectTag } from "@/lib/styles";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Project } from "@/types/Project";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import { FaChevronLeft, FaChevronRight, FaGithub, FaLink } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { buttonProps } from "@/lib/a11y";

const titleTag =
  "select-none flex items-center justify-center py-[3px] px-[6px] rounded-base whitespace-nowrap transition-all gap-[5px] text-[0.8rem] no-underline bg-title-tag text-primary-ink border border-tag-border";
const imageClass =
  "pointer-events-none select-none block w-full h-full rounded-base object-center object-cover";
const arrow =
  "absolute top-1/2 text-light-primary text-[2em] transition-[transform,opacity] drop-shadow-[0px_3px_2px_#0000001a] cursor-pointer z-2 opacity-[0.35] group-hover/image:opacity-80";

interface Props {
  project: Project;
  handleClose: () => void;
}

function ProjectModal({ project, handleClose }: Props) {
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, project.images.length, page);
  const [isDragging, setIsDragging] = useState(false);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <Backdrop onClick={() => !isDragging && handleClose()}>
      <RemoveScrollBar />
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="rounded-base border border-border shadow-card bg-light-primary flex flex-col w-[95%] h-[95%] z-101 md:w-[850px] md:max-w-[90%] md:h-[800px] md:max-h-[85%]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}>
        <div className="flex flex-row gap-[10px] items-center justify-between py-[20px] px-[30px] border-b border-border text-dark-primary">
          <div className="flex flex-col gap-[8px] items-start overflow-hidden">
            <span className="text-dark-primary text-[1.5em] font-bold">{project.title}</span>
            <div className="flex flex-wrap gap-[5px]">
              <div className={titleTag}>
                <DynamicIcon name={project.status} />
                {project.status}
              </div>
              {project.link && project.link !== "" && (
                <a
                  className={titleTag}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLink />
                  {"Link"}
                </a>
              )}
              {project.github && project.github !== "" && (
                <a
                  className={titleTag}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub />
                  {"Github"}
                </a>
              )}
            </div>
          </div>
          <div
            className="flex items-center justify-center text-dark-primary transition-all duration-200 rounded-base p-[8px] cursor-pointer hover:bg-light-secondary"
            {...buttonProps(handleClose, "Close")}>
            <IoMdClose size={25} />
          </div>
        </div>
        <div className="overflow-y-auto">
          <div className="flex flex-col items-center justify-center gap-[10px] py-[20px] px-[30px]">
            <div
              className={clsx(
                "group/image select-none relative overflow-hidden h-[300px] w-full rounded-base md:h-[450px]",
                project.images &&
                  project.images.length > 1 &&
                  "after:content-[''] after:pointer-events-none after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[linear-gradient(90deg,var(--color-edge-shade)_0%,transparent_10%,transparent_90%,var(--color-edge-shade)_100%)] after:z-1"
              )}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.span
                  className="absolute w-full h-full"
                  key={page}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? 800 : -800,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: direction < 0 ? 800 : -800,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  drag={project.images?.length > 1 && "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  dragMomentum={false}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(_, { offset, velocity }) => {
                    setIsDragging(false);
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}>
                  <Image
                    className={imageClass}
                    src={project.images[imageIndex]}
                    alt={project.title}
                    placeholder="blur"
                    blurDataURL={`${project.images[imageIndex]}?h=225`}
                    fill
                    quality={100}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {project.images && project.images.length > 1 && (
                    <Image
                      className={imageClass}
                      src={project.images[(imageIndex + 1) % project.images.length]}
                      alt={project.title}
                      fill
                      quality={100}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ visibility: "hidden" }}
                    />
                  )}
                </motion.span>
              </AnimatePresence>
              {project.images && project.images.length > 1 && (
                <>
                  <FaChevronLeft
                    style={{ left: 5 }}
                    className={arrow}
                    onClick={() => paginate(-1)}
                  />
                  <FaChevronRight
                    style={{ right: 5 }}
                    className={arrow}
                    onClick={() => paginate(1)}
                  />
                </>
              )}
            </div>
            {project.images && project.images.length > 1 && (
              <div className="flex items-center justify-center gap-[5px] py-[5px]">
                {project.images.map((_, index) => (
                  <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: images have no stable id
                    key={index}
                    className={clsx(
                      "w-[8px] h-[8px] rounded-[50%]",
                      imageIndex === index
                        ? "bg-primary cursor-default"
                        : "bg-light-tertiary cursor-pointer"
                    )}
                    {...buttonProps(
                      () => {
                        if (index !== imageIndex) {
                          setPage([index, index > imageIndex ? 1 : -1]);
                        }
                      },
                      `Go to image ${index + 1}`
                    )}
                  />
                ))}
              </div>
            )}
            <div className="flex flex-row flex-wrap gap-[5px] w-full transition-all duration-300 ease-in-out">
              {project.tags?.length > 0 && (
                <>
                  {project.tags.map((tag) => (
                    <span key={tag._id} className={projectTag}>
                      {tag.name}
                    </span>
                  ))}
                </>
              )}
            </div>
            <div className="w-full text-left leading-[1.5em]">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default ProjectModal;
