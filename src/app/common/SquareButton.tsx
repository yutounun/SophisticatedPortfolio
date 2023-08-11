import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const BasicButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <motion.button
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.9 }}
    className={`btn mx-auto text-white font-medium text-md lg:text-lg rounded-xl lg:h-5 block ${className}`}
  >
    {children}
  </motion.button>
);

export default BasicButton;
