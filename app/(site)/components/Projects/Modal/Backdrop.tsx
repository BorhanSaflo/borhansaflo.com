"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: Props) => {
  return (
    <motion.div
      onClick={onClick}
      className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] z-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
