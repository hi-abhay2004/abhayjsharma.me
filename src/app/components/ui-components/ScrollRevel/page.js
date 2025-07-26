"use client";

import { motion } from "framer-motion";
import React from "react";

export const ScrollReveal = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
