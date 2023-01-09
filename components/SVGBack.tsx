import React from "react";
import { motion } from "framer-motion";

export default function SVGBack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ y: { duration: 2 } }}
      className="h-full w-full absolute bottom-0 z-30"
    >
      <svg
        className="block sm:hidden"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <path
          d="M0 71L9 70L18 67L27 71L36 69L45 67L55 70L64 67L73 71L82 72L91 70L100 71L100 101L91 101L82 101L73 101L64 101L55 101L45 101L36 101L27 101L18 101L9 101L0 101Z"
          fill="#06b6d4"
          id="s11"
        />
        <path
          d="M0 78L9 75L18 74L27 75L36 72L45 74L55 74L64 77L73 73L82 77L91 77L100 73L100 101L91 101L82 101L73 101L64 101L55 101L45 101L36 101L27 101L18 101L9 101L0 101Z"
          fill="#228fb1"
          id="s12"
        />
      </svg>

      <svg
        className="hidden sm:block"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <path
          d="M0 404L80 369L160 353L240 398L320 372L400 392L480 357L560 401L640 353L720 356L800 396L880 365L960 385L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#06b6d4"
          id="l11"
        />
        <path
          d="M0 407L80 391L160 402L240 396L320 416L400 413L480 384L560 407L640 419L720 404L800 391L880 406L960 396L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#228fb1"
          id="l12"
        />
      </svg>
    </motion.div>
  );
}
