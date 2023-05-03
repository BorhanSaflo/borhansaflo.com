"use client";
import { motion } from "framer-motion";
import styles from "@/app/styles/ProjectModal.module.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: Props) => {
  return (
    <motion.div
      onClick={onClick}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
