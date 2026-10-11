"use client";
import Image from "next/image";
import { type RefObject, useRef, useState } from "react";
import clsx from "clsx";
import DynamicIcon from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types/Project";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaLink } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const imageClass =
  "pointer-events-none select-none block w-full h-full rounded-base object-center object-cover";
const arrow =
  "absolute top-1/2 leading-none text-light-primary text-[2em] drop-shadow-[0px_3px_2px_#0000001a] z-2 opacity-[0.35] group-hover/image:opacity-80 hover:opacity-100 focus-visible:opacity-100";

interface Props {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ProjectModal({ project, open, onOpenChange }: Props) {
  const isDragging = useRef(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(next, details) => {
        if (!next && isDragging.current) {
          details.cancel();
          return;
        }
        onOpenChange(next);
      }}>
      <DialogContent className="rounded-base border border-border shadow-card bg-light-primary flex flex-col w-[95%] h-[95%] md:w-[850px] md:max-w-[90%] md:h-[800px] md:max-h-[85%]">
        <ProjectModalContent project={project} isDragging={isDragging} />
      </DialogContent>
    </Dialog>
  );
}

function ProjectModalContent({
  project,
  isDragging,
}: {
  project: Project;
  isDragging: RefObject<boolean>;
}) {
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, project.images.length, page);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <>
      <div className="flex flex-row gap-[10px] items-center justify-between py-[20px] px-[30px] border-b border-border text-dark-primary">
        <div className="flex flex-col gap-[8px] items-start overflow-hidden">
          <DialogTitle render={<span />} className="text-dark-primary text-[1.5em] font-bold">
            {project.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-[5px]">
            <Badge variant="title">
              <DynamicIcon name={project.status} />
              {project.status}
            </Badge>
            {project.link && project.link !== "" && (
              <Badge
                variant="titleLink"
                render={<a href={project.link} target="_blank" rel="noopener noreferrer" />}>
                <FaLink />
                {"Link"}
              </Badge>
            )}
            {project.github && project.github !== "" && (
              <Badge
                variant="titleLink"
                render={<a href={project.github} target="_blank" rel="noopener noreferrer" />}>
                <FaGithub />
                {"Github"}
              </Badge>
            )}
          </div>
        </div>
        <DialogClose render={<Button variant="iconLight" aria-label="Close" />}>
          <IoMdClose size={25} />
        </DialogClose>
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
                onDragStart={() => {
                  isDragging.current = true;
                }}
                onDragEnd={(_, { offset, velocity }) => {
                  isDragging.current = false;
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
                <Button
                  variant="bare"
                  aria-label="Previous image"
                  style={{ left: 5 }}
                  className={arrow}
                  onClick={() => paginate(-1)}>
                  <FaChevronLeft />
                </Button>
                <Button
                  variant="bare"
                  aria-label="Next image"
                  style={{ right: 5 }}
                  className={arrow}
                  onClick={() => paginate(1)}>
                  <FaChevronRight />
                </Button>
              </>
            )}
          </div>
          {project.images && project.images.length > 1 && (
            <div className="flex items-center justify-center gap-[5px] py-[5px]">
              {project.images.map((_, index) => (
                <Button
                  variant="bare"
                  // biome-ignore lint/suspicious/noArrayIndexKey: images have no stable id
                  key={index}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={imageIndex === index}
                  disabled={imageIndex === index}
                  onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
                  className={clsx(
                    "w-[8px] h-[8px] rounded-[50%] disabled:pointer-events-none",
                    imageIndex === index
                      ? "bg-primary"
                      : "bg-light-tertiary hover:bg-title-tag-hover"
                  )}
                />
              ))}
            </div>
          )}
          <div className="flex flex-row flex-wrap gap-[5px] w-full">
            {project.tags?.length > 0 && (
              <>
                {project.tags.map((tag) => (
                  <Badge key={tag._id}>{tag.name}</Badge>
                ))}
              </>
            )}
          </div>
          <div className="w-full text-left leading-[1.5em]">
            <DialogDescription>{project.description}</DialogDescription>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectModal;
